import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import CompetitiveComparison from '../components/CompetitiveComparison';
import HowItWorks from '../components/HowItWorks';
import Portfolio3DCarousel from '../components/Portfolio3DCarousel';
import QAPricing from '../components/QAPricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import USPs from '../components/USPs';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const QAPage = () => {
  return (
    <>
      <SEOHead 
        title="Jewelry AI - AI Jewelry Photography & Video Studio | 90% Cost Reduction"
        description="Transform your jewelry photos into stunning, hyper-realistic on-model photography and videos with AI. 95% accuracy, 90% cost savings vs traditional photoshoots. Try for $99!"
        keywords="AI jewelry photography, jewelry marketing, product photography, jewelry videos, AI photoshoot, jewelry advertising, e-commerce photography, jewelry AI, automated jewelry photography"
        canonicalUrl="https://jewelryai.app/qa"
      />
      <Header />
      <Hero />
      <Comparison />
      <CompetitiveComparison />
      <HowItWorks />
      <Portfolio3DCarousel />
      <QAPricing />
      <Testimonials />
      <FAQ />
      <Team />
      <USPs />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default QAPage;