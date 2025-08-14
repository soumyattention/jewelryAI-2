import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PhotoGallery } from '../components/ui/gallery';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <SEOHead 
        title="Gallery - Jewelry AI | AI-Generated Jewelry Photography Collection"
        description="Browse our curated gallery of AI-generated jewelry photography. Discover the stunning quality and realism our advanced AI technology can achieve."
        keywords="jewelry AI gallery, AI photography collection, jewelry photography examples, AI-generated jewelry photos, professional jewelry gallery"
        canonicalUrl="https://jewelryai.app/gallery"
      />
      <Header />
      
      <main className="flex-grow overflow-hidden pt-16 sm:pt-18">
        <PhotoGallery animationDelay={0.3} />
        <GalleryGrid />
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;