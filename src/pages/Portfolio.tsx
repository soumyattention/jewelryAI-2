import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PhotoGallery } from '../components/ui/gallery';
import PortfolioGallery from '../components/PortfolioGallery';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <SEOHead 
        title="Portfolio - Jewelry AI | AI-Generated Jewelry Photography Gallery"
        description="Explore our stunning portfolio of AI-generated jewelry photography. See how our advanced AI transforms ordinary jewelry photos into professional, on-model photography."
        keywords="jewelry AI portfolio, AI photography gallery, jewelry photography examples, AI-generated jewelry photos, professional jewelry photography"
        canonicalUrl="https://jewelryai.app/portfolio"
      />
      <Header />
      
      <main className="flex-grow overflow-hidden pt-16 sm:pt-18">
        <PhotoGallery animationDelay={0.3} />
        <PortfolioGallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;