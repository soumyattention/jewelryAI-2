/**
 * Breadcrumb Schema Markup Component
 * Helps search engines understand site hierarchy
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const SchemaBreadcrumb: React.FC<SchemaBreadcrumbProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Helper function to generate breadcrumbs from pathname
export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const baseUrl = 'https://jewelryai.app';
  const paths = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: 'Home',
      url: baseUrl,
    },
  ];

  let currentPath = '';
  paths.forEach((path) => {
    currentPath += `/${path}`;
    // Convert path to readable name
    const name = path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      name,
      url: `${baseUrl}${currentPath}`,
    });
  });

  return breadcrumbs;
};
