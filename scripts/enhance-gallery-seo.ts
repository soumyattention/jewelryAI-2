/**
 * Gemini Vision-Powered Gallery SEO Enhancement Script
 *
 * This script uses Google's Gemini 2.0 Flash Vision to:
 * 1. Analyze each image in the gallery
 * 2. Generate SEO-optimized alt text, titles, descriptions
 * 3. Identify jewelry type, style, occasion, target audience
 * 4. Extract dominant colors and features
 * 5. Generate sales-oriented keywords that jewelers search for
 *
 * Run with: tsx scripts/enhance-gallery-seo.ts
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

// Top SEO Keywords from Research (Sales-Oriented for Jewelers)
const PRIMARY_KEYWORDS = [
  'jewelry product photography',
  'jewelry photography for ecommerce',
  'professional jewelry photos',
  'AI jewelry photography',
  'jewelry photoshoot',
  'on-model jewelry photography',
  'jewelry lifestyle photography',
  'product photography jewelry',
  'jewelry photography services',
  'commercial jewelry photography'
];

const INTENT_KEYWORDS = {
  buying: [
    'affordable jewelry photography',
    'hire jewelry photographer',
    'jewelry photography pricing',
    'jewelry photography packages',
    'bulk jewelry photography'
  ],
  problem: [
    'jewelry photography without studio',
    'fast jewelry photography',
    'white background jewelry photos',
    'jewelry detail photography',
    'jewelry photography on budget'
  ],
  quality: [
    'high-quality jewelry photos',
    'professional jewelry images',
    'studio quality jewelry photography',
    'luxury jewelry photography',
    'detailed jewelry photography'
  ]
};

// Jewelry-specific attributes for AI to identify
const JEWELRY_ATTRIBUTES = {
  types: ['ring', 'necklace', 'earrings', 'bracelet', 'watch', 'brooch', 'pendant', 'anklet', 'chain'],
  styles: ['luxury', 'minimalist', 'vintage', 'modern', 'classic', 'boho', 'art-deco', 'contemporary'],
  occasions: ['wedding', 'engagement', 'anniversary', 'everyday', 'formal', 'casual', 'party', 'bridal'],
  audiences: ['bridal', 'women', 'men', 'unisex'],
  materials: ['gold', 'silver', 'platinum', 'rose gold', 'white gold', 'diamond', 'gemstone', 'pearl'],
  settings: ['on-model', 'lifestyle', 'white background', 'studio', 'close-up', 'detail shot']
};

interface EnhancedGalleryItem {
  id: number;
  category: 'photos' | 'videos';
  type: 'image' | 'video';
  src: string;
  alt: string;

  // Enhanced SEO fields
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  jewelryType?: string;
  style?: string;
  occasion?: string;
  targetAudience?: string;
  dominantColors?: string[];
  materials?: string[];
  setting?: string;

  autoplay?: boolean;
  selected?: boolean;
}

/**
 * Download image from URL as base64
 */
async function downloadImageAsBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks: Buffer[] = [];

      response.on('data', (chunk) => {
        chunks.push(chunk);
      });

      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const base64 = buffer.toString('base64');
        resolve(base64);
      });

      response.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Analyze image with Gemini Vision and generate SEO metadata
 */
async function analyzeImageWithGemini(imageUrl: string, itemId: number): Promise<Partial<EnhancedGalleryItem>> {
  try {
    console.log(`\n🔍 Analyzing image ${itemId}: ${imageUrl.substring(0, 60)}...`);

    // Download image
    const base64Image = await downloadImageAsBase64(imageUrl);

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Craft the perfect prompt for SEO-optimized jewelry analysis
    const prompt = `You are an expert jewelry photographer and SEO specialist analyzing this jewelry product image.

TASK: Analyze this jewelry image and provide SEO-optimized metadata that will help jewelers find AI photography services.

Focus on these aspects:
1. **Jewelry Type**: ${JEWELRY_ATTRIBUTES.types.join(', ')}
2. **Style**: ${JEWELRY_ATTRIBUTES.styles.join(', ')}
3. **Occasion**: ${JEWELRY_ATTRIBUTES.occasions.join(', ')}
4. **Target Audience**: ${JEWELRY_ATTRIBUTES.audiences.join(', ')}
5. **Materials Visible**: ${JEWELRY_ATTRIBUTES.materials.join(', ')}
6. **Photography Setting**: ${JEWELRY_ATTRIBUTES.settings.join(', ')}
7. **Dominant Colors**: What are the main colors?
8. **Key Features**: What makes this piece unique?

PRIMARY SEO KEYWORDS TO INCORPORATE:
${PRIMARY_KEYWORDS.join(', ')}

Generate a JSON response with:
{
  "alt": "SEO-optimized alt text (150-160 chars) that includes jewelry type, key features, and photography context. Make it descriptive for blind users AND search engines.",
  "seoTitle": "Compelling title for this specific jewelry piece (60-70 chars)",
  "seoDescription": "Detailed description (200-250 chars) that highlights the jewelry, photography quality, and appeals to jewelers searching for photography services. Include relevant keywords naturally.",
  "keywords": ["array", "of", "5-8", "targeted", "SEO", "keywords", "specific", "to", "this", "image"],
  "jewelryType": "primary type from: ${JEWELRY_ATTRIBUTES.types.join(', ')}",
  "style": "style from: ${JEWELRY_ATTRIBUTES.styles.join(', ')}",
  "occasion": "best occasion from: ${JEWELRY_ATTRIBUTES.occasions.join(', ')}",
  "targetAudience": "audience from: ${JEWELRY_ATTRIBUTES.audiences.join(', ')}",
  "dominantColors": ["color1", "color2", "color3"],
  "materials": ["visible", "materials"],
  "setting": "photography setting from: ${JEWELRY_ATTRIBUTES.settings.join(', ')}"
}

IMPORTANT:
- Alt text must be natural and descriptive (not keyword-stuffed)
- Keywords should match what jewelers would search when looking for photography services
- Focus on commercial/sales intent keywords
- Highlight the AI/professional photography aspect
- Be specific to this exact image

Return ONLY valid JSON, no other text.`;

    // Analyze image with Gemini
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Image
        }
      },
      { text: prompt }
    ]);

    const response = await result.response;
    const text = response.text();

    // Parse JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in Gemini response');
    }

    const metadata = JSON.parse(jsonMatch[0]);

    console.log(`✅ Generated metadata:`);
    console.log(`   Type: ${metadata.jewelryType}`);
    console.log(`   Alt: ${metadata.alt.substring(0, 80)}...`);
    console.log(`   Keywords: ${metadata.keywords.slice(0, 3).join(', ')}...`);

    return metadata;

  } catch (error) {
    console.error(`❌ Error analyzing image ${itemId}:`, error.message);

    // Return fallback metadata
    return {
      alt: 'Professional AI-generated jewelry photography showcasing product detail and craftsmanship',
      seoTitle: 'AI Jewelry Product Photography Example',
      seoDescription: 'High-quality AI-generated jewelry photography demonstrating professional product photography for ecommerce, marketing, and commercial use.',
      keywords: ['jewelry product photography', 'AI jewelry photography', 'professional jewelry photos'],
      jewelryType: 'other',
      style: 'modern',
      occasion: 'everyday',
      targetAudience: 'unisex'
    };
  }
}

/**
 * Read existing gallery data
 */
function readGalleryData(): any[] {
  const galleryPath = path.join(__dirname, '../src/lib/gallery-data.ts');
  const content = fs.readFileSync(galleryPath, 'utf-8');

  // Extract the galleryItems array (simple regex - adjust if needed)
  const match = content.match(/export const galleryItems.*?=\s*(\[[\s\S]*?\n\];)/);
  if (!match) {
    throw new Error('Could not parse gallery data');
  }

  // This is a simplified parser - in production, you'd want a proper TS parser
  // For now, we'll extract items manually
  const itemMatches = content.matchAll(/\{\s*id:\s*(\d+),[\s\S]*?src:\s*"([^"]+)"[\s\S]*?\}/g);

  const items: any[] = [];
  for (const match of itemMatches) {
    items.push({
      id: parseInt(match[1]),
      src: match[2]
    });
  }

  return items;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Gemini Vision Gallery SEO Enhancement\n');
  console.log('📊 Target Keywords:');
  console.log('   Primary:', PRIMARY_KEYWORDS.slice(0, 3).join(', '));
  console.log('   Buying Intent:', INTENT_KEYWORDS.buying.slice(0, 2).join(', '));
  console.log('   Quality Focus:', INTENT_KEYWORDS.quality.slice(0, 2).join(', '));
  console.log('\n');

  // Read existing gallery data
  const galleryItems = readGalleryData();
  console.log(`📁 Found ${galleryItems.length} gallery items to analyze\n`);

  // Ask for confirmation
  console.log('⚠️  This will make API calls to Gemini for each image.');
  console.log('⚠️  Estimated cost: ~$0.01-0.05 per image');
  console.log(`⚠️  Total estimated cost: $${(galleryItems.length * 0.03).toFixed(2)}\n`);

  const enhancedItems: EnhancedGalleryItem[] = [];

  // Process items (limit to first 10 for testing, remove limit for full run)
  const LIMIT = 10; // Change to galleryItems.length for full processing
  const itemsToProcess = galleryItems.slice(0, LIMIT);

  console.log(`🔄 Processing ${itemsToProcess.length} items (LIMIT=${LIMIT})\n`);

  for (let i = 0; i < itemsToProcess.length; i++) {
    const item = itemsToProcess[i];

    // Clean URL (remove query params for display)
    const cleanUrl = item.src.split('?')[0];

    // Analyze with Gemini
    const metadata = await analyzeImageWithGemini(item.src, item.id);

    enhancedItems.push({
      ...item,
      ...metadata
    } as EnhancedGalleryItem);

    // Rate limiting: wait 1 second between requests
    if (i < itemsToProcess.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Save enhanced data to JSON file
  const outputPath = path.join(__dirname, '../gallery-enhanced-metadata.json');
  fs.writeFileSync(outputPath, JSON.stringify(enhancedItems, null, 2));

  console.log(`\n✅ Processing complete!`);
  console.log(`📝 Enhanced metadata saved to: gallery-enhanced-metadata.json`);
  console.log(`\n📊 Summary:`);
  console.log(`   Total processed: ${enhancedItems.length}`);
  console.log(`   Average keywords per item: ${(enhancedItems.reduce((sum, item) => sum + (item.keywords?.length || 0), 0) / enhancedItems.length).toFixed(1)}`);

  // Show sample
  console.log(`\n🎯 Sample Enhanced Item:`);
  console.log(JSON.stringify(enhancedItems[0], null, 2));

  console.log(`\n📋 Next Steps:`);
  console.log(`   1. Review gallery-enhanced-metadata.json`);
  console.log(`   2. Run: npm run apply-gallery-metadata (to update gallery-data.ts)`);
  console.log(`   3. Test and deploy`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { analyzeImageWithGemini, EnhancedGalleryItem };
