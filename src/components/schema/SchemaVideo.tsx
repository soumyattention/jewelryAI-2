/**
 * Video Schema Markup Component
 * For gallery videos and video content
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate?: string;
  duration?: string; // ISO 8601 format: PT1M30S for 1 minute 30 seconds
  embedUrl?: string;
  interactionCount?: number;
  tags?: string[];
  category?: string;
}

export const SchemaVideo: React.FC<VideoSchemaProps> = ({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate = new Date().toISOString(),
  duration = 'PT15S', // Default 15 seconds
  embedUrl,
  interactionCount,
  tags = ['jewelry video', 'AI photography', 'jewelry marketing'],
  category = 'Jewelry Marketing',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    ...(embedUrl && { embedUrl }),
    publisher: {
      '@type': 'Organization',
      name: 'Jewelry AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jewelryai.app/favicon.png',
      },
    },
    ...(interactionCount && {
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'http://schema.org/WatchAction',
        userInteractionCount: interactionCount,
      },
    }),
    keywords: tags.join(', '),
    genre: category,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
