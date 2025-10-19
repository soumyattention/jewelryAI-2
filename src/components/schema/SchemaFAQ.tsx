/**
 * FAQ Schema Markup Component
 * Generates structured data for FAQ sections
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface FAQItem {
  question: string;
  answer: string;
}

interface SchemaFAQProps {
  faqs: FAQItem[];
}

export const SchemaFAQ: React.FC<SchemaFAQProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Pre-defined FAQs for homepage
export const homepageFAQs: FAQItem[] = [
  {
    question: 'What is AI jewelry photography?',
    answer:
      'AI jewelry photography uses advanced artificial intelligence to transform simple product photos into stunning, hyper-realistic on-model photography. Our AI creates professional lifestyle images showing your jewelry on models without the need for expensive photoshoots, models, or photographers.',
  },
  {
    question: 'How much does AI jewelry photography cost?',
    answer:
      'Our pricing starts at £125 for the Basic package (3 photos, 5 variations each), £225 for Standard (5 photos, 8 variations), and £350 for Premium (10 photos, 10 variations with unlimited revisions). This is 90% cheaper than traditional jewelry photoshoots.',
  },
  {
    question: 'How long does it take to get my AI-generated jewelry photos?',
    answer:
      'Standard turnaround time is 48 hours from when you submit your jewelry photos. We also offer rush delivery options for urgent projects. You will receive high-resolution images ready for immediate use in your marketing, e-commerce, or social media.',
  },
  {
    question: 'What types of jewelry can you photograph with AI?',
    answer:
      'Our AI photography works with all types of jewelry including engagement rings, wedding bands, necklaces, earrings, bracelets, watches, brooches, and custom pieces. Whether you sell luxury jewelry, fashion jewelry, or handmade pieces, our AI creates stunning results.',
  },
  {
    question: 'How does AI jewelry photography compare to traditional photoshoots?',
    answer:
      'AI photography costs 90% less than traditional photoshoots, delivers results in 48 hours instead of weeks, requires no models or studio time, and provides unlimited variations. You get the same professional quality without the hassle, expense, and time commitment of traditional photography.',
  },
  {
    question: 'Can I use AI-generated jewelry photos for commercial purposes?',
    answer:
      'Yes! All AI-generated photos come with full commercial usage rights. You can use them for your e-commerce store, social media marketing, print catalogs, advertisements, website content, and any other business purposes without restrictions or additional fees.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer:
      'Simply upload clear photos of your jewelry pieces on a plain background. We recommend high-resolution images with good lighting. Our AI will handle the rest - creating beautiful on-model lifestyle shots, adjusting lighting, and generating multiple variations.',
  },
  {
    question: 'Do you offer revisions if I am not satisfied?',
    answer:
      'Yes! Our Standard and Premium packages include revision rounds. The Premium package offers unlimited revisions until you are completely satisfied with the results. We work with you to ensure the final images perfectly match your vision and brand aesthetic.',
  },
];
