import React from 'react';
import SEOHead from '../components/SEOHead';
import { SchemaOrganization, SchemaFAQ, homepageFAQs, SchemaService } from '../components/schema';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import CompetitiveComparison from '../components/CompetitiveComparison';
import HowItWorks from '../components/HowItWorks';
import Portfolio3DCarousel from '../components/Portfolio3DCarousel';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import USPs from '../components/USPs';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="AI Jewelry Photography & Video Studio | 90% Cost Reduction | Jewelry AI"
        description="Transform your jewelry photos into stunning, hyper-realistic on-model photography and videos with AI. Save 90% on traditional photoshoots. Get professional results in 48 hours. Trusted by 500+ jewelry brands."
        keywords="AI jewelry photography, jewelry video production, AI photoshoot, jewelry marketing, product photography, jewelry advertising, e-commerce jewelry photos, AI model photography, virtual jewelry photography, jewelry content creation"
        canonicalUrl="https://jewelryai.app"
      />
      {/* Enhanced Schema Markup for SEO */}
      <SchemaOrganization />
      <SchemaService />
      <SchemaFAQ faqs={homepageFAQs} />

      <Header />
      <Hero />
      <Comparison />
      <CompetitiveComparison />
      <HowItWorks />
      <Portfolio3DCarousel />
      <Pricing />
      <FAQ />
      <Team />
      <USPs />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default HomePage;
