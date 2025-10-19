/**
 * Gemini Vision-Powered Gallery SEO Enhancement Script
 * Run with: node scripts/enhance-gallery-seo.mjs
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gemini API Configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
if (!GEMINI_API_KEY) {
  console.error('❌ Error: GEMINI_API_KEY environment variable not set');
  process.exit(1);
}
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Top SEO Keywords from Research
const PRIMARY_KEYWORDS = [
  'jewelry product photography',
  'jewelry photography for ecommerce',
  'professional jewelry photos',
  'AI jewelry photography',
  'on-model jewelry photography'
];

/**
 * Download image from URL as base64
 */
async function downloadImageAsBase64(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];

      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve(buffer.toString('base64'));
      });
      response.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Analyze image with Gemini Vision
 */
async function analyzeImageWithGemini(imageUrl, itemId) {
  try {
    console.log(`\n🔍 [${itemId}] Analyzing...`);

    const base64Image = await downloadImageAsBase64(imageUrl);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const prompt = `You are an expert jewelry photographer and SEO specialist. Analyze this jewelry image.

Generate SEO-optimized metadata in JSON format:
{
  "alt": "Descriptive alt text (150-160 chars) including jewelry type, features, and 'AI-generated jewelry photography'. Be specific and natural.",
  "seoTitle": "Compelling title (60 chars)",
  "seoDescription": "Detailed description (200 chars) appealing to jewelers searching for photography services",
  "keywords": ["5-8", "targeted", "SEO", "keywords"],
  "jewelryType": "ring|necklace|earrings|bracelet|watch|pendant|other",
  "style": "luxury|minimalist|vintage|modern|classic|contemporary",
  "occasion": "wedding|engagement|everyday|formal|bridal",
  "targetAudience": "bridal|women|men|unisex",
  "dominantColors": ["color1", "color2"],
  "materials": ["gold|silver|diamond|gemstone"],
  "setting": "on-model|lifestyle|white-background|studio|close-up"
}

Focus on commercial keywords jewelers search when hiring photographers.
Return ONLY valid JSON.`;

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
    console.error(`❌ [${itemId}] Error:`, error.message);
    return {
      alt: 'Professional AI-generated jewelry photography showcasing product detail',
      seoTitle: 'AI Jewelry Product Photography',
      seoDescription: 'High-quality AI-generated jewelry photography for ecommerce and marketing',
      keywords: ['jewelry product photography', 'AI jewelry photography'],
      jewelryType: 'other',
      style: 'modern'
    };
  }
}

/**
 * Extract gallery items from TypeScript file
 */
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

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Gemini Vision Gallery SEO Enhancement\n');

  const galleryItems = extractGalleryItems();
  console.log(`📁 Found ${galleryItems.length} gallery items\n`);

  // Process only images (skip videos for now)
  const imageItems = galleryItems.filter(item => item.type === 'image');
  console.log(`🖼️  Processing ${imageItems.length} images\n`);

  // Process ALL items (change LIMIT to smaller number for testing)
  const LIMIT = imageItems.length; // Full processing
  const itemsToProcess = imageItems.slice(0, LIMIT);

  console.log(`⚠️  Processing ${itemsToProcess.length} items (FULL RUN)`);
  console.log(`⚠️  Estimated time: ${Math.ceil(itemsToProcess.length * 2 / 60)} minutes`);
  console.log(`⚠️  Estimated API cost: $${(itemsToProcess.length * 0.002).toFixed(2)}\n`);

  const enhancedItems = [];

  for (let i = 0; i < itemsToProcess.length; i++) {
    const item = itemsToProcess[i];
    const metadata = await analyzeImageWithGemini(item.src, item.id);

    enhancedItems.push({ ...item, ...metadata });

    // Rate limit: 1 second between requests
    if (i < itemsToProcess.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1200));
    }
  }

  // Save results
  const outputPath = path.join(__dirname, '../gallery-enhanced-metadata.json');
  fs.writeFileSync(outputPath, JSON.stringify(enhancedItems, null, 2));

  console.log(`\n✅ Complete! Saved to gallery-enhanced-metadata.json`);
  console.log(`\n🎯 Sample:`);
  console.log(`ID: ${enhancedItems[0].id}`);
  console.log(`Alt: ${enhancedItems[0].alt}`);
  console.log(`Type: ${enhancedItems[0].jewelryType}`);
  console.log(`Keywords: ${enhancedItems[0].keywords.join(', ')}`);

  console.log(`\n📋 Next: Review the JSON file, then run apply-metadata script`);
}

main().catch(console.error);
