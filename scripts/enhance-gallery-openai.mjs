/**
 * OpenAI Vision-Powered Gallery SEO Enhancement
 * Uses GPT-4o-mini for fast, cost-effective AI analysis
 * FOCUSES ON AI KEYWORDS - targeting jewelers searching for AI photography
 *
 * Run with: node scripts/enhance-gallery-openai.mjs
 */

import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
if (!OPENAI_API_KEY) {
  console.error('❌ Error: OPENAI_API_KEY environment variable not set');
  console.error('   Set it with: export OPENAI_API_KEY="your-key-here"');
  process.exit(1);
}
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// AI-FOCUSED KEYWORDS (what jewelers search when looking for AI photography)
const AI_KEYWORDS = [
  'AI jewelry photography',
  'AI-generated jewelry photos',
  'AI jewelry product photography',
  'AI on-model jewelry photography',
  'AI jewelry photoshoot',
  'automated jewelry photography',
  'AI jewelry images',
  'AI jewelry photo service',
  'virtual jewelry photography',
  'AI lifestyle jewelry photography'
];

const RATE_LIMIT_DELAY = 300; // 0.3 seconds (much faster than Gemini!)
const MAX_RETRIES = 3;

async function downloadImageAsBase64(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function analyzeImageWithOpenAI(imageUrl, itemId, retryCount = 0) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are an expert jewelry photographer and SEO specialist. Analyze this jewelry image.

CRITICAL: Focus on AI PHOTOGRAPHY keywords! Jewelers are searching for AI photography services.

Generate SEO-optimized metadata in JSON format:
{
  "alt": "Descriptive 150-160 char alt text. MUST include jewelry type, features, AND one of: 'AI jewelry photography', 'AI-generated', 'AI photoshoot', or 'AI product photography'. Be natural and specific.",
  "seoTitle": "Compelling title (60 chars) - include 'AI' if natural",
  "seoDescription": "200-char description targeting jewelers searching for AI photography services. Mention AI technology, cost savings, quality.",
  "keywords": ["MUST include 2-3 AI-focused keywords like 'AI jewelry photography', 'AI-generated jewelry photos', etc.", "plus 3-5 specific keywords about the jewelry type, style, use case"],
  "jewelryType": "ring|necklace|earrings|bracelet|watch|pendant|brooch|anklet|other",
  "style": "luxury|minimalist|vintage|modern|classic|contemporary",
  "occasion": "wedding|engagement|everyday|formal|bridal|casual|party",
  "targetAudience": "bridal|women|men|unisex",
  "dominantColors": ["color1", "color2"],
  "materials": ["gold|silver|platinum|diamond|gemstone|pearl"],
  "setting": "on-model|lifestyle|white-background|studio|close-up"
}

EXAMPLES OF GOOD KEYWORDS:
- "AI jewelry photography"
- "AI-generated jewelry photos"
- "AI on-model jewelry photography"
- "AI product photography jewelry"
- "automated jewelry photoshoot"
- "virtual jewelry photography"

Return ONLY valid JSON, no other text.`
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
                detail: "low" // Use low detail for faster/cheaper processing
              }
            }
          ]
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const content = response.choices[0].message.content;
    const jsonMatch = content.match(/\{[\s\S]*\}/);

    if (!jsonMatch) throw new Error('No JSON in response');

    const metadata = JSON.parse(jsonMatch[0]);

    // Ensure AI keywords are present
    if (!metadata.keywords.some(k => k.toLowerCase().includes('ai'))) {
      metadata.keywords.unshift('AI jewelry photography');
    }

    console.log(`✅ [${itemId}] ${metadata.jewelryType} - ${metadata.style} - ${metadata.keywords.filter(k => k.toLowerCase().includes('ai')).length} AI keywords`);
    return metadata;

  } catch (error) {
    // Retry logic
    if (retryCount < MAX_RETRIES && (error.code === 'rate_limit_exceeded' || error.status === 429)) {
      const waitTime = Math.pow(2, retryCount) * 2000;
      console.log(`⏸️  [${itemId}] Rate limited. Waiting ${waitTime/1000}s... (retry ${retryCount + 1}/${MAX_RETRIES})`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return analyzeImageWithOpenAI(imageUrl, itemId, retryCount + 1);
    }

    console.error(`❌ [${itemId}] Error:`, error.message?.substring(0, 100) || 'Unknown error');

    // Fallback metadata with AI focus
    return {
      alt: 'Professional AI-generated jewelry photography showcasing intricate product detail and craftsmanship for e-commerce',
      seoTitle: 'AI Jewelry Product Photography',
      seoDescription: 'High-quality AI-generated jewelry photography demonstrating professional AI photography services for ecommerce, marketing, and commercial use. 90% cost savings vs traditional photoshoots.',
      keywords: ['AI jewelry photography', 'AI-generated jewelry photos', 'AI product photography', 'automated jewelry photography', 'professional jewelry photos'],
      jewelryType: 'other',
      style: 'modern',
      occasion: 'everyday',
      targetAudience: 'unisex',
      dominantColors: ['gold', 'silver'],
      materials: ['gold'],
      setting: 'studio'
    };
  }
}

function extractGalleryItems() {
  const galleryPath = path.join(__dirname, '../src/lib/gallery-data.ts');
  const content = fs.readFileSync(galleryPath, 'utf-8');

  const items = [];
  const regex = /\{\s*id:\s*(\d+),[\s\S]*?category:\s*"(photos|videos)",[\s\S]*?type:\s*"(image|video)",[\s\S]*?src:\s*"([^"]+)"[\s\S]*?alt:\s*"([^"]*)"[\s\S]*?(?:autoplay:\s*(true|false)[\s\S]*?)?(?:selected:\s*(true|false))?[\s\S]*?\}/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({
      id: parseInt(match[1]),
      category: match[2],
      type: match[3],
      src: match[4],
      alt: match[5] || '',
      autoplay: match[6] === 'true',
      selected: match[7] === 'true'
    });
  }

  return items;
}

async function main() {
  console.log('🚀 OpenAI GPT-4o-mini Gallery SEO Enhancement\n');
  console.log('🎯 FOCUS: AI-focused keywords for jewelers searching AI photography\n');

  const allItems = extractGalleryItems();
  console.log(`📁 Found ${allItems.length} total gallery items\n`);

  // Process only images (videos need different handling)
  const imageItems = allItems.filter(item => item.type === 'image');
  console.log(`🖼️  Processing ${imageItems.length} images\n`);

  // Check for existing progress
  const progressFile = path.join(__dirname, '../gallery-enhanced-metadata.json');
  let enhancedItems = [];
  let startIndex = 0;

  if (fs.existsSync(progressFile)) {
    try {
      enhancedItems = JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
      startIndex = enhancedItems.length;
      console.log(`📂 Resuming from item ${startIndex + 1} (${startIndex} already done)\n`);
    } catch (e) {
      console.log(`⚠️  Could not load progress file, starting fresh\n`);
    }
  }

  const itemsToProcess = imageItems.slice(startIndex);
  const estimatedTime = Math.ceil((itemsToProcess.length * RATE_LIMIT_DELAY) / 1000 / 60);
  const estimatedCost = itemsToProcess.length * 0.0015; // ~$0.0015 per image with gpt-4o-mini

  console.log(`⚠️  Processing ${itemsToProcess.length} remaining items`);
  console.log(`⚠️  Rate limit: ${RATE_LIMIT_DELAY/1000}s between requests`);
  console.log(`⚠️  Estimated time: ${estimatedTime} minutes`);
  console.log(`⚠️  Estimated cost: $${estimatedCost.toFixed(2)}\n`);

  const startTime = Date.now();

  for (let i = 0; i < itemsToProcess.length; i++) {
    const item = itemsToProcess[i];
    const globalIndex = startIndex + i;

    console.log(`\n[${globalIndex + 1}/${imageItems.length}] Processing ID ${item.id}...`);

    const metadata = await analyzeImageWithOpenAI(item.src, item.id);
    enhancedItems.push({ ...item, ...metadata });

    // Save progress after every 10 items
    if ((i + 1) % 10 === 0 || i === itemsToProcess.length - 1) {
      fs.writeFileSync(progressFile, JSON.stringify(enhancedItems, null, 2));
      console.log(`💾 Progress saved (${enhancedItems.length}/${imageItems.length})`);
    }

    // Progress stats
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = itemsToProcess.length - (i + 1);
    const etaSeconds = Math.floor(remaining * (RATE_LIMIT_DELAY / 1000));

    console.log(`⏱️  Elapsed: ${Math.floor(elapsed/60)}m ${elapsed%60}s | ETA: ${Math.floor(etaSeconds/60)}m ${etaSeconds%60}s`);

    // Rate limiting
    if (i < itemsToProcess.length - 1) {
      await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY));
    }
  }

  console.log(`\n✅ All ${enhancedItems.length} items processed!`);
  console.log(`📝 Saved to: gallery-enhanced-metadata.json`);

  // Show AI keyword stats
  const aiKeywordCount = enhancedItems.reduce((sum, item) =>
    sum + (item.keywords?.filter(k => k.toLowerCase().includes('ai')).length || 0), 0
  );
  const avgAIKeywords = (aiKeywordCount / enhancedItems.length).toFixed(1);

  console.log(`\n📊 AI Keyword Stats:`);
  console.log(`   Total AI keywords: ${aiKeywordCount}`);
  console.log(`   Average per item: ${avgAIKeywords}`);
  console.log(`   All items have AI keywords: ${enhancedItems.every(i => i.keywords?.some(k => k.toLowerCase().includes('ai'))) ? '✅' : '❌'}`);

  // Show random sample
  const sample = enhancedItems[Math.floor(Math.random() * enhancedItems.length)];
  console.log(`\n🎯 Random Sample (ID ${sample.id}):`);
  console.log(`Alt: ${sample.alt.substring(0, 120)}...`);
  console.log(`AI Keywords: ${sample.keywords.filter(k => k.toLowerCase().includes('ai')).join(', ')}`);
  console.log(`All Keywords: ${sample.keywords.join(', ')}`);

  console.log(`\n📋 Next Steps:`);
  console.log(`   1. Review gallery-enhanced-metadata.json`);
  console.log(`   2. Run script to apply metadata to gallery-data.ts`);
  console.log(`   3. Build and deploy`);
}

main().catch(console.error);
