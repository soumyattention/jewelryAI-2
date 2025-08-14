import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Jewelry AI - AI Jewelry Photography & Video Studio | 90% Cost Reduction",
  description = "Transform your jewelry photos into stunning, hyper-realistic on-model photography and videos with AI. 95% accuracy, 90% cost savings vs traditional photoshoots. Try for $99!",
  keywords = "AI jewelry photography, jewelry marketing, product photography, jewelry videos, AI photoshoot, jewelry advertising, e-commerce photography",
  ogImage = "https://jewelryai.app/og-image.jpg",
  canonicalUrl,
  noIndex = false
}) => {
  const currentUrl = canonicalUrl || `https://jewelryai.app${window.location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jewelry AI" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;