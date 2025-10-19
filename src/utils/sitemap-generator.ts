/**
 * JewelryAI - Dynamic Sitemap Generator
 * Generates XML sitemaps for pages, images, and videos
 */

import { galleryItems } from '../lib/gallery-data';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface ImageSitemapEntry {
  loc: string;
  images: {
    loc: string;
    caption?: string;
    title?: string;
    license?: string;
  }[];
}

export interface VideoSitemapEntry {
  loc: string;
  videos: {
    thumbnail_loc: string;
    title: string;
    description: string;
    content_loc: string;
    duration?: number;
    publication_date?: string;
    family_friendly: 'yes' | 'no';
    tags: string[];
    category?: string;
  }[];
}

const BASE_URL = 'https://jewelryai.app';

/**
 * Static pages configuration with SEO priorities
 */
const STATIC_PAGES: SitemapUrl[] = [
  {
    loc: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    loc: '/pricing',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    loc: '/gallery',
    changefreq: 'daily',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    loc: '/qa',
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    loc: '/privacy',
    changefreq: 'monthly',
    priority: 0.3,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    loc: '/refunds',
    changefreq: 'monthly',
    priority: 0.3,
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    loc: '/tos',
    changefreq: 'monthly',
    priority: 0.3,
    lastmod: new Date().toISOString().split('T')[0],
  },
];

/**
 * Generate main sitemap XML
 */
export function generateMainSitemap(): string {
  const urls = STATIC_PAGES.map(page => {
    return `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
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

/**
 * Generate image sitemap XML
 */
export function generateImageSitemap(): string {
  const imageItems = galleryItems.filter(item => item.type === 'image');

  // Group images by page (all are on gallery page for now)
  const galleryImages = imageItems.map(item => {
    return `    <image:image>
      <image:loc>${item.src}</image:loc>
      <image:caption>${escapeXml(item.alt)}</image:caption>
      <image:title>${escapeXml(item.alt)}</image:title>
      <image:license>${BASE_URL}/license</image:license>
    </image:image>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE_URL}/gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
${galleryImages}
  </url>
</urlset>`;
}

/**
 * Generate video sitemap XML
 */
export function generateVideoSitemap(): string {
  const videoItems = galleryItems.filter(item => item.type === 'video');

  const videoEntries = videoItems.map((item, index) => {
    // Extract video ID from src or use index
    const videoId = `video-${index + 1}`;
    const thumbnailUrl = item.src.replace(/\.(mp4|webm|mov)$/i, '-thumb.jpg');

    return `  <url>
    <loc>${BASE_URL}/gallery#${videoId}</loc>
    <video:video>
      <video:thumbnail_loc>${thumbnailUrl}</video:thumbnail_loc>
      <video:title>${escapeXml(item.alt || 'AI-Generated Jewelry Video')}</video:title>
      <video:description>${escapeXml(item.alt || 'Professional AI-generated jewelry video showcasing hyper-realistic on-model photography')}</video:description>
      <video:content_loc>${item.src}</video:content_loc>
      <video:duration>15</video:duration>
      <video:publication_date>${new Date().toISOString()}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:tag>jewelry video</video:tag>
      <video:tag>AI photography</video:tag>
      <video:tag>jewelry marketing</video:tag>
      <video:category>Jewelry Marketing</video:category>
    </video:video>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videoEntries}
</urlset>`;
}

/**
 * Escape XML special characters
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generate all sitemaps and return as object
 */
export function generateAllSitemaps() {
  return {
    'sitemap.xml': generateMainSitemap(),
    'sitemap-images.xml': generateImageSitemap(),
    'sitemap-videos.xml': generateVideoSitemap(),
  };
}

/**
 * Save sitemaps to public directory (for build process)
 */
export async function saveSitemaps(publicDir: string = './public') {
  const sitemaps = generateAllSitemaps();

  // This would be used in a Node.js build script
  // For now, we'll return the sitemaps for manual saving
  return sitemaps;
}
