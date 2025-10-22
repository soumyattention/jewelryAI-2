/**
 * Build script to generate static sitemap files
 * Run with: node scripts/generate-sitemaps.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import gallery data
const galleryDataPath = path.join(__dirname, '../src/lib/gallery-data.ts');
const publicDir = path.join(__dirname, '../public');

const BASE_URL = 'https://jewelryai.app';

// Static pages configuration
const STATIC_PAGES = [
  { loc: '/', changefreq: 'daily', priority: 1.0 },
  { loc: '/pricing', changefreq: 'weekly', priority: 0.9 },
  { loc: '/gallery', changefreq: 'daily', priority: 0.9 },
  { loc: '/ai-vs-traditional-photography', changefreq: 'weekly', priority: 0.9 },
  { loc: '/qa', changefreq: 'weekly', priority: 0.8 },
  { loc: '/privacy', changefreq: 'monthly', priority: 0.3 },
  { loc: '/refunds', changefreq: 'monthly', priority: 0.3 },
  { loc: '/tos', changefreq: 'monthly', priority: 0.3 },
];

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateMainSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const urls = STATIC_PAGES.map(page => {
    return `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
}

function generateImageSitemap() {
  // For now, create a basic image sitemap
  // You can enhance this by parsing gallery-data.ts
  const today = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE_URL}/gallery</loc>
    <lastmod>${today}</lastmod>
    <image:image>
      <image:loc>${BASE_URL}/og-image.jpg</image:loc>
      <image:caption>AI-powered jewelry photography and videography services</image:caption>
      <image:title>Jewelry AI - Professional AI Photography</image:title>
    </image:image>
  </url>
</urlset>`;
}

function generateVideoSitemap() {
  const today = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${BASE_URL}/gallery</loc>
    <video:video>
      <video:thumbnail_loc>${BASE_URL}/og-image.jpg</video:thumbnail_loc>
      <video:title>AI-Generated Jewelry Videos - Jewelry AI</video:title>
      <video:description>Professional AI-generated jewelry videos showcasing hyper-realistic on-model photography for jewelry marketing and e-commerce</video:description>
      <video:publication_date>${today}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:tag>jewelry video</video:tag>
      <video:tag>AI photography</video:tag>
      <video:tag>jewelry marketing</video:tag>
      <video:category>Jewelry Marketing</video:category>
    </video:video>
  </url>
</urlset>`;
}

// Generate and save sitemaps
console.log('🔄 Generating sitemaps...');

const sitemaps = {
  'sitemap.xml': generateMainSitemap(),
  'sitemap-images.xml': generateImageSitemap(),
  'sitemap-videos.xml': generateVideoSitemap(),
};

Object.entries(sitemaps).forEach(([filename, content]) => {
  const filepath = path.join(publicDir, filename);
  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`✅ Generated ${filename}`);
});

console.log('🎉 All sitemaps generated successfully!');
