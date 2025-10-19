/**
 * Product/Service Schema Markup Component
 * For pricing packages and service offerings
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface ProductSchemaProps {
  name: string;
  description: string;
  price: string;
  priceCurrency?: string;
  image?: string;
  url?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  priceValidUntil?: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export const SchemaProduct: React.FC<ProductSchemaProps> = ({
  name,
  description,
  price,
  priceCurrency = 'GBP',
  image = 'https://jewelryai.app/og-image.jpg',
  url = 'https://jewelryai.app/pricing',
  availability = 'InStock',
  priceValidUntil = '2025-12-31',
  aggregateRating,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: 'Jewelry AI',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      availability: `https://schema.org/${availability}`,
      url,
      priceValidUntil,
      seller: {
        '@type': 'Organization',
        name: 'Jewelry AI',
      },
    },
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: '5',
        worstRating: '1',
      },
    }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Service Schema for main AI photography service
export const SchemaService: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Jewelry Photography',
    provider: {
      '@type': 'Organization',
      name: 'Jewelry AI',
      url: 'https://jewelryai.app',
    },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://jewelryai.app',
      servicePhone: '+447727727748',
      availableLanguage: 'English',
    },
    termsOfService: 'https://jewelryai.app/tos',
    description:
      'Transform jewelry photos into stunning, hyper-realistic on-model photography and videos using AI. Professional results in 48 hours at 90% cost reduction.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Jewelry Photography Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Basic AI Photography Package',
            description: '3 jewelry photos with 5 AI-generated variations each',
          },
          price: '125',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Standard AI Photography Package',
            description: '5 jewelry photos with 8 AI-generated variations each, 1 revision round',
          },
          price: '225',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium AI Photography Package',
            description: '10 jewelry photos with 10 AI-generated variations each, unlimited revisions',
          },
          price: '350',
          priceCurrency: 'GBP',
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
