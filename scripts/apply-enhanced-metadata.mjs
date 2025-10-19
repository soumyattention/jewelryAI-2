/**
 * Apply Enhanced Metadata to gallery-data.ts
 * Takes the AI-generated metadata and updates the gallery file
 *
 * Run with: node scripts/apply-enhanced-metadata.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function main() {
  console.log('🔄 Applying Enhanced Metadata to gallery-data.ts\n');

  // Read enhanced metadata
  const metadataPath = path.join(__dirname, '../gallery-enhanced-metadata.json');
  if (!fs.existsSync(metadataPath)) {
    console.error('❌ Error: gallery-enhanced-metadata.json not found!');
    console.error('   Run the enhancement script first.');
    process.exit(1);
  }

  const enhancedItems = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
  console.log(`📊 Loaded ${enhancedItems.length} enhanced items\n`);

  // Read original gallery-data.ts
  const galleryPath = path.join(__dirname, '../src/lib/gallery-data.ts');
  let galleryContent = fs.readFileSync(galleryPath, 'utf-8');

  // Create backup
  const backupPath = path.join(__dirname, '../src/lib/gallery-data.backup.ts');
  fs.writeFileSync(backupPath, galleryContent);
  console.log(`💾 Backup created: gallery-data.backup.ts\n`);

  let updatedCount = 0;
  let notFoundCount = 0;

  // Update each item
  for (const item of enhancedItems) {
    // Find the item in the original content
    const itemRegex = new RegExp(
      `(\\{\\s*id:\\s*${item.id},\\s*[\\s\\S]*?)(alt:\\s*"[^"]*")([\\s\\S]*?\\})`,
      'g'
    );

    const match = itemRegex.exec(galleryContent);
    if (!match) {
      console.warn(`⚠️  Could not find item ID ${item.id} in gallery-data.ts`);
      notFoundCount++;
      continue;
    }

    // Build the new item object with enhanced metadata
    const enhancedItemString = `{
        id: ${item.id},
        category: "${item.category}",
        type: "${item.type}",
        src: "${item.src}",
        alt: "${item.alt.replace(/"/g, '\\"')}",${item.autoplay ? `\n        autoplay: ${item.autoplay},` : ''}${item.selected ? `\n        selected: ${item.selected},` : ''}

        // Enhanced SEO metadata
        seoTitle: "${item.seoTitle?.replace(/"/g, '\\"') || ''}",
        seoDescription: "${item.seoDescription?.replace(/"/g, '\\"') || ''}",
        keywords: ${JSON.stringify(item.keywords || [])},
        jewelryType: "${item.jewelryType || ''}",
        style: "${item.style || ''}",
        occasion: "${item.occasion || ''}",
        targetAudience: "${item.targetAudience || ''}",
        dominantColors: ${JSON.stringify(item.dominantColors || [])},
        materials: ${JSON.stringify(item.materials || [])},
        setting: "${item.setting || ''}"
    }`;

    // Replace the entire item
    galleryContent = galleryContent.replace(match[0], enhancedItemString);
    updatedCount++;

    if (updatedCount % 20 === 0) {
      console.log(`✅ Updated ${updatedCount}/${enhancedItems.length} items...`);
    }
  }

  // Write updated content
  fs.writeFileSync(galleryPath, galleryContent);

  console.log(`\n✅ Successfully updated ${updatedCount} items`);
  if (notFoundCount > 0) {
    console.log(`⚠️  Could not find ${notFoundCount} items`);
  }

  console.log(`\n📝 Updated file: src/lib/gallery-data.ts`);
  console.log(`💾 Backup saved: src/lib/gallery-data.backup.ts`);

  // Show sample
  console.log(`\n🎯 Sample updated item:`);
  const sample = enhancedItems[0];
  console.log(`ID: ${sample.id}`);
  console.log(`Alt: ${sample.alt.substring(0, 100)}...`);
  console.log(`AI Keywords: ${sample.keywords.filter(k => k.toLowerCase().includes('ai')).join(', ')}`);

  console.log(`\n📋 Next Steps:`);
  console.log(`   1. Review the changes in src/lib/gallery-data.ts`);
  console.log(`   2. Test the application: npm run dev`);
  console.log(`   3. Build: npm run build`);
  console.log(`   4. Deploy`);
}

main();
