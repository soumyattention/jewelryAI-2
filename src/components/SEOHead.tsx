import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  article?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Jewelry AI - AI Jewelry Photography & Video Studio | 90% Cost Reduction",
  description = "Transform your jewelry photos into stunning, hyper-realistic on-model photography and videos with AI. 95% accuracy, 90% cost savings vs traditional photoshoots. Professional results in 48 hours. Trusted by 500+ jewelry brands.",
  keywords = "AI jewelry photography, jewelry marketing, product photography, jewelry videos, AI photoshoot, jewelry advertising, e-commerce photography, jewelry AI, automated jewelry photography",
  ogImage = "https://jewelryai.app/og-image.jpg",
  ogImageWidth = "1200",
  ogImageHeight = "630",
  canonicalUrl,
  noIndex = false,
  author = "Jewelry AI Team",
  publishedTime,
  modifiedTime,
  article = false,
}) => {
  const currentUrl = canonicalUrl || `https://jewelryai.app${window.location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={currentUrl} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Jewelry AI" />
      <meta property="og:locale" content="en_GB" />

      {/* Article metadata (for blog posts) */}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@jewelryai" />
      <meta name="twitter:site" content="@jewelryai" />

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </Helmet>
  );
};

export default SEOHead;