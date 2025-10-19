/**
 * Organization Schema Markup Component
 * Enhanced with full business details for SEO
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SchemaOrganization: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'OnlineBusiness'],
    name: 'Jewelry AI',
    alternateName: 'JewelryAI',
    url: 'https://jewelryai.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://jewelryai.app/favicon.png',
      width: '512',
      height: '512',
    },
    image: 'https://jewelryai.app/og-image.jpg',
    description:
      'AI-powered jewelry photography and videography services that transform product photos into stunning, hyper-realistic on-model photography at 90% cost reduction',
    sameAs: [
      'https://www.instagram.com/yusrattention/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+447727727748',
      contactType: 'customer service',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Soumya Mahato',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '£125-£350',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Jewelry Photography Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Basic AI Photography Package',
            description: '3 photos with 5 variations each',
          },
          price: '125',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Standard AI Photography Package',
            description: '5 photos with 8 variations each',
          },
          price: '225',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium AI Photography Package',
            description: '10 photos with 10 variations each, unlimited revisions',
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
