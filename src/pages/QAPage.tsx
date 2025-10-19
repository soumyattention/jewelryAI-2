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
        title="Jewelry Photography Questions Answered | AI Photography Guide | Jewelry AI"
        description="Get answers to all your jewelry photography questions. Learn how AI photography works, pricing details, turnaround times, and quality guarantees. Free consultation available."
        keywords="jewelry photography questions, AI photography FAQ, jewelry photography guide, how does AI jewelry photography work, jewelry photography consultation"
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