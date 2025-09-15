import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PhotoGallery } from '../components/ui/gallery';
import GalleryGridX from '../components/GalleryGridX';

const GalleryX = () => {
  useEffect(() => {
    // Prevent footer overlap during scroll
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const main = document.querySelector('main');
      
      if (footer && main) {
        // Ensure footer stays at bottom during scroll
        footer.style.position = 'relative';
        footer.style.zIndex = '10';
        footer.style.transform = 'translateZ(0)';
        
        // Ensure main content stays in proper position
        main.style.position = 'relative';
        main.style.zIndex = '0';
        main.style.transform = 'translateZ(0)';
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter flex flex-col relative">
      <SEOHead 
        title="Gallery - Jewelry AI | AI-Generated Jewelry Photography Collection"
        description="Browse our curated gallery of AI-generated jewelry photography. Discover the stunning quality and realism our advanced AI technology can achieve."
        keywords="jewelry AI gallery, AI photography collection, jewelry photography examples, AI-generated jewelry photos, professional jewelry gallery"
        canonicalUrl="https://jewelryai.app/galleryx"
      />
      <Header />
      
      <main className="flex-grow overflow-hidden pt-16 sm:pt-18 relative z-0">
        <PhotoGallery animationDelay={0.3} />
        <GalleryGridX />
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryX;