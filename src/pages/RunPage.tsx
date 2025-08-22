import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RunGrid from '../components/RunGrid';
import FloatingDock from '../components/FloatingDock';

const RunPage = () => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const MAX_SELECTION = 25;

  const handleSelectionChange = (count: number, percentage: number) => {
    setSelectedCount(count);
    setProgressPercentage(percentage);
  };

  return (
    <div className="min-h-screen bg-white font-inter flex flex-col relative">
      <SEOHead 
        title="Run - Jewelry AI | AI-Generated Jewelry Collection"
        description="Explore our comprehensive collection of AI-generated jewelry images. Browse through hundreds of curated jewelry photographs."
        keywords="jewelry AI run, AI jewelry collection, jewelry image gallery, AI-generated jewelry photos"
        canonicalUrl="https://jewelryai.app/run"
      />
      <Header />
      
      <main className="flex-grow pt-16 sm:pt-18">
        {/* Page Header */}
        <div className="text-center py-12 sm:py-16 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Jewelry <span className="text-amber-500">Collection</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our extensive collection of AI-generated jewelry photography
          </p>
        </div>
        
        <RunGrid onSelectionChange={handleSelectionChange} />
      </main>
      
      <Footer />
      
      {/* Floating Dock - Rendered at top level, outside main content */}
      <FloatingDock 
        selectedCount={selectedCount}
        maxSelection={MAX_SELECTION}
        progressPercentage={progressPercentage}
      />
    </div>
  );
};

export default RunPage;