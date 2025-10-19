/**
 * Gemini Vision SEO Enhancement Script v2
 * With intelligent rate limit handling
 * Run with: node scripts/enhance-gallery-seo-v2.mjs
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
if (!GEMINI_API_KEY) {
  console.error('❌ Error: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Rate limiting: 10 requests per minute = 6 seconds minimum between requests
const RATE_LIMIT_DELAY = 7000; // 7 seconds to be safe
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

async function analyzeImageWithGemini(imageUrl, itemId, retryCount = 0) {
  try {
    const base64Image = await downloadImageAsBase64(imageUrl);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const prompt = `Analyze this jewelry image for SEO. Return ONLY valid JSON:
{
  "alt": "Descriptive 150-char alt text with jewelry type, features, setting, and 'AI-generated jewelry photography'",
  "seoTitle": "60-char compelling title",
  "seoDescription": "200-char description for jewelers seeking photography services",
  "keywords": ["5-8", "sales-focused", "SEO", "keywords"],
  "jewelryType": "ring|necklace|earrings|bracelet|watch|pendant|other",
  "style": "luxury|minimalist|vintage|modern|classic|contemporary",
  "occasion": "wedding|engagement|everyday|formal|bridal|casual",
  "targetAudience": "bridal|women|men|unisex",
  "dominantColors": ["color1", "color2"],
  "materials": ["gold|silver|diamond|gemstone|pearl"],
  "setting": "on-model|lifestyle|white-background|studio|close-up"
}`;

    const result = await model.generateContent([
      { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
      { text: prompt }
    ]);

    const text = result.response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in response');

    const metadata = JSON.parse(jsonMatch[0]);
    console.log(`✅ [${itemId}] ${metadata.jewelryType} - ${metadata.style}`);
    return metadata;

  } catch (error) {
    // Handle rate limiting with exponential backoff
    if (error.message.includes('429') && retryCount < MAX_RETRIES) {
      const waitTime = Math.pow(2, retryCount) * 60000; // 1min, 2min, 4min
      console.log(`⏸️  [${itemId}] Rate limited. Waiting ${waitTime/1000}s before retry ${retryCount + 1}/${MAX_RETRIES}...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return analyzeImageWithGemini(imageUrl, itemId, retryCount + 1);
    }

    console.error(`❌ [${itemId}] Error:`, error.message.substring(0, 100));
    return {
      alt: 'Professional AI-generated jewelry photography showcasing intricate product detail and craftsmanship for e-commerce',
      seoTitle: 'AI Jewelry Product Photography Example',
      seoDescription: 'High-quality AI-generated jewelry photography demonstrating professional product photography services for ecommerce, marketing, and commercial use by jewelers and retailers.',
      keywords: ['jewelry product photography', 'AI jewelry photography', 'professional jewelry photos', 'ecommerce jewelry images'],
      jewelryType: 'other',
      style: 'modern',
      occasion: 'everyday',
      targetAudience: 'unisex'
    };
  }
}

function extractGalleryItems() {
  const galleryPath = path.join(__dirname, '../src/lib/gallery-data.ts');
  const content = fs.readFileSync(galleryPath, 'utf-8');

  const items = [];
  const regex = /\{\s*id:\s*(\d+),[\s\S]*?src:\s*"([^"]+)"[\s\S]*?category:\s*"(photos|videos)"[\s\S]*?type:\s*"(image|video)"[\s\S]*?selected:\s*(true|false)?[\s\S]*?\}/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({
      id: parseInt(match[1]),
      src: match[2],
      category: match[3],
      type: match[4],
      selected: match[5] === 'true'
    });
  }

  return items;
}

async function main() {
  console.log('🚀 Gemini Vision Gallery SEO Enhancement v2\n');
  console.log('⚡ Features: Rate limit handling, auto-retry, progress save\n');

  const galleryItems = extractGalleryItems();
  const imageItems = galleryItems.filter(item => item.type === 'image');

  console.log(`📁 Found ${imageItems.length} images to process\n`);

  // Check for existing progress
  const progressFile = path.join(__dirname, '../gallery-enhanced-metadata.json');
  let enhancedItems = [];
  let startIndex = 0;

  if (fs.existsSync(progressFile)) {
    enhancedItems = JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
    startIndex = enhancedItems.length;
    console.log(`📂 Found existing progress: ${startIndex} items already processed`);
    console.log(`🔄 Resuming from item ${startIndex + 1}\n`);
  }

  const itemsToProcess = imageItems.slice(startIndex);
  const totalTime = Math.ceil((itemsToProcess.length * RATE_LIMIT_DELAY) / 1000 / 60);

  console.log(`⚠️  Processing ${itemsToProcess.length} remaining items`);
  console.log(`⚠️  Rate limit: ${RATE_LIMIT_DELAY/1000}s between requests`);
  console.log(`⚠️  Estimated time: ${totalTime} minutes`);
  console.log(`⚠️  API cost: ~$${(itemsToProcess.length * 0.002).toFixed(2)}\n`);

  const startTime = Date.now();

  for (let i = 0; i < itemsToProcess.length; i++) {
    const item = itemsToProcess[i];
    const globalIndex = startIndex + i;

    console.log(`\n[${globalIndex + 1}/${imageItems.length}] Processing ID ${item.id}...`);

    const metadata = await analyzeImageWithGemini(item.src, item.id);
    enhancedItems.push({ ...item, ...metadata });

    // Save progress after each item
    fs.writeFileSync(progressFile, JSON.stringify(enhancedItems, null, 2));

    // Show progress
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = itemsToProcess.length - (i + 1);
    const etaSeconds = Math.floor(remaining * (RATE_LIMIT_DELAY / 1000));

    console.log(`💾 Progress saved (${enhancedItems.length}/${imageItems.length})`);
    console.log(`⏱️  Elapsed: ${Math.floor(elapsed/60)}m ${elapsed%60}s | ETA: ${Math.floor(etaSeconds/60)}m ${etaSeconds%60}s`);

    // Rate limiting
    if (i < itemsToProcess.length - 1) {
      console.log(`⏸️  Waiting ${RATE_LIMIT_DELAY/1000}s (rate limit)...`);
      await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY));
    }
  }

  console.log(`\n✅ All ${enhancedItems.length} items processed!`);
  console.log(`📝 Saved to: gallery-enhanced-metadata.json`);

  // Show sample
  const sample = enhancedItems[Math.floor(Math.random() * enhancedItems.length)];
  console.log(`\n🎯 Random Sample (ID ${sample.id}):`);
  console.log(`Alt: ${sample.alt.substring(0, 100)}...`);
  console.log(`Type: ${sample.jewelryType}, Style: ${sample.style}`);
  console.log(`Keywords: ${sample.keywords.slice(0, 3).join(', ')}...`);

  console.log(`\n📋 Next: Review the JSON file and run the apply-metadata script`);
}

main().catch(console.error);
