import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Eye, ArrowDown, Check, Star, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FurniturePage = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', url: string } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - replace with your actual furniture images and AI results
  const furnitureShowcases = [
    {
      id: 1,
      inputImages: [
        'https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-02-27%20at%209.25.40%20PM.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202024-12-15%20at%202.05.40%20PM%20(1).jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202025-02-27%20at%209.25.43%20PM%20(2).jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://ik.imagekit.io/soumya3301/WhatsApp%20Image%202024-12-15%20at%202.05.49%20PM%20(1).jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiResults: [
        {
          type: 'image' as const,
          url: 'https://ik.imagekit.io/soumya3301/33.png?auto=compress&cs=tinysrgb&w=800',
          title: 'Generated using our Furniture AI'
        },
        {
          type: 'image' as const,
          url: 'https://ik.imagekit.io/soumya3301/34.png?auto=compress&cs=tinysrgb&w=800',
          title: 'Generated using our Furniture AI'
        },
        {
          type: 'image' as const,
          url: 'https://ik.imagekit.io/soumya3301/35.png?auto=compress&cs=tinysrgb&w=800',
          title: 'Generated using our Furniture AI'
        },
        {
          type: 'image' as const,
          url: 'https://ik.imagekit.io/soumya3301/32.png?auto=compress&cs=tinysrgb&w=800',
          title: 'Generated using our Furniture AI'
        }
      ]
    },
    {
      id: 2,
      inputImages: [
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiResults: [
        {
          type: 'image' as const,
          url: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'AI Modern Kitchen'
        },
        {
          type: 'image' as const,
          url: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800',
          title: 'AI Kitchen Design'
        }
      ]
    }
  ];

  const currentShowcase = furnitureShowcases[currentSlide];
  const [currentResultIndex, setCurrentResultIndex] = useState(0);

  const nextResult = () => {
    setCurrentResultIndex((prev) => (prev + 1) % currentShowcase.aiResults.length);
  };

  const prevResult = () => {
    setCurrentResultIndex((prev) => (prev - 1 + currentShowcase.aiResults.length) % currentShowcase.aiResults.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % furnitureShowcases.length);
    setCurrentResultIndex(0); // Reset result index when changing showcase
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + furnitureShowcases.length) % furnitureShowcases.length);
    setCurrentResultIndex(0); // Reset result index when changing showcase
  };

  const openMediaPreview = (media: { type: 'image' | 'video', url: string }) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeMediaPreview = () => {
    setSelectedMedia(null);
    document.body.style.overflow = '';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedMedia) {
        closeMediaPreview();
      }
    };

    if (selectedMedia) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedMedia]);

  // Static scattered positions for input images - centered with equal padding
  const getStaticCardStyle = (index: number) => {
    const positions = [
      { top: '35%', left: '35%', rotate: '-8deg', zIndex: 4 },
      { top: '35%', left: '65%', rotate: '6deg', zIndex: 3 },
      { top: '65%', left: '35%', rotate: '4deg', zIndex: 2 },
      { top: '65%', left: '65%', rotate: '-6deg', zIndex: 1 }
    ];
    
    return positions[index] || positions[0];
  };

  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <SEOHead 
        title="Furniture AI - AI-Powered Furniture Photography & Design"
        description="Transform your furniture photos with AI-powered photography and videography. Create stunning interior designs and product showcases."
        keywords="AI furniture photography, interior design AI, furniture videography, AI home design"
        canonicalUrl="https://jewelryai.app/furniture"
      />
      <Header />
      
      <main className="flex-grow pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Furniture AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                Photography & Videography
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Click photos of your furniture and let us turn them into stunning, professional showcases with our AI-powered custom Furniture photography suite.
            </p>
            
            {/* Creative Tagline */}
            <div className="relative mb-8">
              {/* Decorative line with gradient */}
              <div className="hidden sm:flex items-center justify-center mb-4">
                <div className="flex-1 max-w-xs">
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                </div>
                <div className="mx-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
                </div>
                <div className="flex-1 max-w-xs">
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                </div>
              </div>
              
              {/* Tagline with special styling */}
              <div className="relative">
                {/* Desktop version - full tagline with rounded pill shape */}
                <div className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50/80 to-yellow-50/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200/50 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                      Trained with <span className="text-amber-600 font-bold">10,714</span> furniture photos
                    </span>
                  </div>
                  <div className="w-px h-4 bg-amber-300/50"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                      Unmatched realism
                    </span>
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-px h-4 bg-amber-300/50"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                      No competition
                    </span>
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Mobile version - rectangular with only two items */}
                <div className="sm:hidden flex justify-center">
                  <div className="bg-gradient-to-r from-amber-50/80 to-yellow-50/80 backdrop-blur-sm px-6 py-4 rounded-lg border border-amber-200/50 shadow-lg max-w-sm w-full">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-800">
                          Trained with <span className="text-amber-600 font-bold">10,714</span> furniture photos
                        </span>
                      </div>
                      <div className="w-px h-4 bg-amber-300/50"></div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-gray-800">Unmatched realism</span>
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Gallery Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-5 gap-8 h-[600px]">
                
                {/* Left Side - Static Scattered Input Images (40%) */}
                <div className="col-span-2">
                  <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200/50 shadow-lg relative overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center relative z-10">Input Images</h3>
                    
                    {/* Static Scattered Cards Container - Larger images with less padding */}
                    <div className="absolute inset-4 top-16">
                      {currentShowcase.inputImages.map((image, index) => {
                        const cardStyle = getStaticCardStyle(index);
                        return (
                          <div 
                            key={`${currentSlide}-${index}`} // Key includes currentSlide to prevent animation
                            className="absolute w-28 h-36 group cursor-pointer transform hover:scale-110 hover:z-50 transition-all duration-300"
                            style={{
                              top: cardStyle.top,
                              left: cardStyle.left,
                              transform: `translate(-50%, -50%) rotate(${cardStyle.rotate})`,
                              zIndex: cardStyle.zIndex
                            }}
                            onClick={() => openMediaPreview({ type: 'image', url: image })}
                          >
                            {/* Card Shadow */}
                            <div 
                              className="absolute inset-0 bg-black/20 rounded-xl blur-sm"
                              style={{
                                transform: 'translate(4px, 6px)'
                              }}
                            ></div>
                            
                            {/* Card */}
                            <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200/50 group-hover:shadow-2xl transition-all duration-300">
                              <img 
                                src={image} 
                                alt={`Input ${index + 1}`}
                                className="w-full h-full object-cover"
                                draggable={false}
                              />
                              
                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30">
                                    <Eye className="w-4 h-4 text-white" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Side - AI Results with Proper Slider (60%) */}
                <div className="col-span-3">
                  <div className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-4 border border-amber-200/50 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI Generated Results</h3>
                    
                    {/* Vertical Slider Container */}
                    <div className="relative h-full flex items-center justify-center">
                      
                      {/* Slider Content - 3 images layout with larger side images */}
                      <div className="flex items-center justify-center space-x-6 w-full px-4">
                        {/* Left side image - larger and more visible */}
                        {currentShowcase.aiResults[(currentResultIndex - 1 + currentShowcase.aiResults.length) % currentShowcase.aiResults.length] && (
                          <div className="relative w-32 opacity-75 transform scale-90 cursor-pointer" onClick={prevResult}>
                            <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200/50 filter blur-sm hover:blur-none transition-all duration-300">
                              <img 
                                src={currentShowcase.aiResults[(currentResultIndex - 1 + currentShowcase.aiResults.length) % currentShowcase.aiResults.length].url}
                                alt="Previous"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Text below image */}
                            <div className="text-center mt-2">
                              <p className="text-xs text-gray-600 font-medium blur-sm">
                                {currentShowcase.aiResults[(currentResultIndex - 1 + currentShowcase.aiResults.length) % currentShowcase.aiResults.length].title}
                              </p>
                            </div>
                            
                            {/* Previous Button over the image */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevResult();
                              }}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md rounded-full p-3 hover:bg-white/90 transition-all duration-200 border border-white/50 shadow-lg hover:shadow-xl hover:scale-110"
                            >
                              <ChevronLeft className="w-5 h-5 text-gray-700" />
                            </button>
                          </div>
                        )}

                        {/* Center main image - full size and clear */}
                        <div className="flex-1 max-w-sm">
                          <div 
                            className="aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                            onClick={() => openMediaPreview(currentShowcase.aiResults[currentResultIndex])}
                          >
                            {currentShowcase.aiResults[currentResultIndex].type === 'video' ? (
                              <div className="relative w-full h-full">
                                <video
                                  src={currentShowcase.aiResults[currentResultIndex].url}
                                  className="w-full h-full object-cover"
                                  muted
                                  playsInline
                                  preload="metadata"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 group-hover:bg-white/30 transition-all duration-200">
                                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <img 
                                src={currentShowcase.aiResults[currentResultIndex].url}
                                alt={currentShowcase.aiResults[currentResultIndex].title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            )}
                          </div>
                          {/* Text below main image */}
                          <div className="text-center mt-3">
                            <p className="text-sm text-gray-700 font-semibold">
                              {currentShowcase.aiResults[currentResultIndex].title}
                            </p>
                          </div>
                        </div>

                        {/* Right side image - larger and more visible */}
                        {currentShowcase.aiResults[(currentResultIndex + 1) % currentShowcase.aiResults.length] && (
                          <div className="relative w-32 opacity-75 transform scale-90 cursor-pointer" onClick={nextResult}>
                            <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200/50 filter blur-sm hover:blur-none transition-all duration-300">
                              <img 
                                src={currentShowcase.aiResults[(currentResultIndex + 1) % currentShowcase.aiResults.length].url}
                                alt="Next"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Text below image */}
                            <div className="text-center mt-2">
                              <p className="text-xs text-gray-600 font-medium blur-sm">
                                {currentShowcase.aiResults[(currentResultIndex + 1) % currentShowcase.aiResults.length].title}
                              </p>
                            </div>
                            
                            {/* Next Button over the image */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextResult();
                              }}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md rounded-full p-3 hover:bg-white/90 transition-all duration-200 border border-white/50 shadow-lg hover:shadow-xl hover:scale-110"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-700" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Beta Text */}
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600 font-medium">
                        Generated using our Furniture AI Beta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked with better padding */}
            <div className="lg:hidden">
              <div className="space-y-8 px-4">
                
                {/* Input Images - Top with Static Scattered Cards */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">Input Images</h3>
                  
                  {/* Mobile Static Scattered Cards - Larger */}
                  <div className="relative h-72 overflow-hidden">
                    {currentShowcase.inputImages.slice(0, 4).map((image, index) => {
                      const cardStyle = getStaticCardStyle(index);
                      return (
                        <div 
                          key={`mobile-${currentSlide}-${index}`}
                          className="absolute w-20 h-28 group cursor-pointer transform hover:scale-110 hover:z-50 transition-all duration-300"
                          style={{
                            top: cardStyle.top,
                            left: cardStyle.left,
                            transform: `translate(-50%, -50%) rotate(${cardStyle.rotate})`,
                            zIndex: cardStyle.zIndex
                          }}
                          onClick={() => openMediaPreview({ type: 'image', url: image })}
                        >
                          {/* Card Shadow */}
                          <div 
                            className="absolute inset-0 bg-black/20 rounded-lg blur-sm"
                            style={{
                              transform: 'translate(3px, 4px)'
                            }}
                          ></div>
                          
                          {/* Card */}
                          <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200/50 group-hover:shadow-xl transition-all duration-300">
                            <img 
                              src={image} 
                              alt={`Input ${index + 1}`}
                              className="w-full h-full object-cover"
                              draggable={false}
                            />
                            
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-1.5 border border-white/30">
                                  <Eye className="w-3 h-3 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full p-3 shadow-lg">
                    <ArrowDown className="w-6 h-6 text-white animate-bounce" />
                  </div>
                </div>

                {/* AI Results - Bottom with 3-image slider like desktop */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">AI Generated Results</h3>
                  
                  {/* Mobile 3-Image Slider - Same as desktop */}
                  <div className="relative">
                    <div className="flex items-center justify-center space-x-4 overflow-hidden">
                      
                      {/* Left side - blurred and smaller */}
                      {currentShowcase.aiResults[(currentResultIndex - 1 + currentShowcase.aiResults.length) % currentShowcase.aiResults.length] && (
                        <div className="relative w-16 opacity-75 transform scale-75 flex-shrink-0 cursor-pointer" onClick={prevResult}>
                          <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200/50 filter blur-sm">
                            <img 
                              src={currentShowcase.aiResults[(currentResultIndex - 1 + currentShowcase.aiResults.length) % currentShowcase.aiResults.length].url}
                              alt="Previous"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Previous Button over the image */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevResult();
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-2 hover:bg-white/90 transition-all duration-200 border border-white/50 shadow-lg"
                          >
                            <ChevronLeft className="w-3 h-3 text-gray-700" />
                          </button>
                        </div>
                      )}

                      {/* Center main image */}
                      <div 
                        className="w-44 flex-shrink-0 cursor-pointer"
                        onClick={() => openMediaPreview(currentShowcase.aiResults[currentResultIndex])}
                      >
                        <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200/50">
                          {currentShowcase.aiResults[currentResultIndex].type === 'video' ? (
                            <div className="relative w-full h-full">
                              <video
                                src={currentShowcase.aiResults[currentResultIndex].url}
                                className="w-full h-full object-cover"
                                muted
                                playsInline
                                preload="metadata"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30">
                                  <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <img 
                              src={currentShowcase.aiResults[currentResultIndex].url}
                              alt={currentShowcase.aiResults[currentResultIndex].title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        {/* Text below main image */}
                        <div className="text-center mt-2">
                          <p className="text-sm text-gray-700 font-semibold">
                            {currentShowcase.aiResults[currentResultIndex].title}
                          </p>
                        </div>
                      </div>

                      {/* Right side - blurred and smaller */}
                      {currentShowcase.aiResults[(currentResultIndex + 1) % currentShowcase.aiResults.length] && (
                        <div className="relative w-16 opacity-75 transform scale-75 flex-shrink-0 cursor-pointer" onClick={nextResult}>
                          <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200/50 filter blur-sm">
                            <img 
                              src={currentShowcase.aiResults[(currentResultIndex + 1) % currentShowcase.aiResults.length].url}
                              alt="Next"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Next Button over the image */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextResult();
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-2 hover:bg-white/90 transition-all duration-200 border border-white/50 shadow-lg"
                          >
                            <ChevronRight className="w-3 h-3 text-gray-700" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Beta Text */}
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600 font-medium">
                        Generated using our Furniture AI Beta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots for Showcases */}
            <div className="flex justify-center mt-8 space-x-2">
              {furnitureShowcases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setCurrentResultIndex(0);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Desktop Layout - Text Left, Video Right */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-5 gap-12 items-center">
                
                {/* Left Side - Text Content (40%) */}
                <div className="col-span-2 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      AI Furniture
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                        Videography
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Experience your furniture in motion with our AI-powered videography. 
                      Create stunning, cinematic videos that showcase your furniture from every angle.
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
                      <span className="text-gray-700">360° Product Rotation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
                      <span className="text-gray-700">Cinematic Lighting Effects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
                      <span className="text-gray-700">Professional Camera Movements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
                      <span className="text-gray-700">4K Quality Output</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Video Player (60%) */}
                <div className="col-span-3">
                  <div className="relative">
                    {/* Video Container */}
                    <div 
                      className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                      onClick={() => openMediaPreview({ 
                        type: 'video', 
                        url: 'https://res.cloudinary.com/dc4ezu6y8/video/upload/v1752578880/Untitled-2025-07-15_08_38_19_copy_-_Copy_d9ytcs.mp4' 
                      })}
                    >
                      {/* Video Element */}
                      <div className="aspect-[3/2] relative overflow-hidden">
                        <video
                          src="https://res.cloudinary.com/dc4ezu6y8/video/upload/v1752578880/Untitled-2025-07-15_08_38_19_copy_-_Copy_d9ytcs.mp4"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          muted
                          playsInline
                          preload="metadata"
                          poster="https://ik.imagekit.io/soumya3301/33.png?auto=compress&cs=tinysrgb&w=800"
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
                          <div className="bg-white/20 backdrop-blur-md rounded-full p-6 border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                        
                        {/* Video Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                          <div className="text-white">
                            <h3 className="text-lg font-semibold mb-1">AI Furniture Showcase</h3>
                            <p className="text-sm text-white/80">Generated using our Furniture AI Beta</p>
                          </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-sm font-medium">
                          0:30
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Video Only */}
            <div className="lg:hidden px-4">
              <div className="space-y-6">
                {/* Video Player */}
                <div className="relative">
                  <div 
                    className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                    onClick={() => openMediaPreview({ 
                      type: 'video', 
                      url: 'https://res.cloudinary.com/dc4ezu6y8/video/upload/v1752578880/Untitled-2025-07-15_08_38_19_copy_-_Copy_d9ytcs.mp4' 
                    })}
                  >
                    {/* Video Element */}
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <video
                        src="https://res.cloudinary.com/dc4ezu6y8/video/upload/v1752578880/Untitled-2025-07-15_08_38_19_copy_-_Copy_d9ytcs.mp4"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        muted
                        playsInline
                        preload="metadata"
                        poster="https://ik.imagekit.io/soumya3301/33.png?auto=compress&cs=tinysrgb&w=800"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                          <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                        0:30
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Caption */}
                <div className="text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-lg">
                    <p className="text-sm text-gray-600 font-medium">
                      Generated using our Furniture AI Beta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pricing Section - Just Above Footer */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Choose the perfect package for your furniture brand. No hidden fees, 
              no surprises. Just stunning results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {[
              {
                name: 'First Look',
                price: '$99',
                description: 'Perfect for testing our quality',
                features: [
                  'Up to 3 Furniture Items',
                  'Up to 3 AI Furniture Photoshoots',
                  '1 Cinematic Video',
                  '7 Days Delivery',
                  'No Revision Request'
                ],
                cta: 'Get Started',
                popular: false,
                link: 'https://checkout.dodopayments.com/buy/pdt_rbD4D5ZCYfTy2cREbI1yW?quantity=1'
              },
              {
                name: 'The Collection',
                price: '$499',
                description: 'Best value for furniture stores',
                features: [
                  'Up to 20 Furniture Items',
                  'Up to 40 AI Photoshoots',
                  'Up to 10 AI Cinematic Videos',
                  '14 Days Delivery',
                  'Unlimited Revisions',
                  'Dedicated WhatsApp Channel'
                ],
                cta: 'Start Your Collection',
                popular: true,
                link: 'https://wa.me/447727727748'
              }
            ].map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.popular 
                    ? 'ring-2 ring-emerald-400 shadow-emerald-200/50 transform sm:scale-105 bg-gradient-to-br from-emerald-50/30 to-green-50/20 shadow-emerald-500/20' 
                    : 'ring-2 ring-amber-400/60 shadow-amber-200/30 border border-amber-200/50 bg-gradient-to-br from-amber-50/20 to-yellow-50/10'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center space-x-1 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/50">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Best Value</span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl sm:text-4xl font-bold text-gray-900">{pkg.price}</span>
                    </div>
                    <p className="text-base sm:text-base text-gray-600">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          pkg.popular 
                            ? 'bg-emerald-100' 
                            : 'bg-amber-100'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            pkg.popular 
                              ? 'text-emerald-600' 
                              : 'text-amber-600'
                          }`} />
                        </div>
                        <span className="text-base sm:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a 
                    href={pkg.link}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 touch-manipulation min-h-[48px] text-base sm:text-base ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:scale-105'
                      : 'bg-white/60 backdrop-blur-sm text-black border-2 border-amber-300/50 hover:bg-white/80 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-200/50 transform hover:scale-105 font-bold'
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Service Explanation Tagline */}
          <div className="relative mt-12 sm:mt-16 mb-8 sm:mb-12">
            {/* Centered rectangular box with single sentence */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm px-8 py-4 rounded-lg border border-blue-200/50 shadow-lg max-w-4xl">
                <p className="text-sm sm:text-base font-medium text-gray-800 text-center leading-relaxed">
                  This is not an app, currently it's under development, and we're offering this as a <span className="text-blue-600 font-bold">service</span> - you provide furniture images, we create and deliver AI photos & videos.
                </p>
              </div>
            </div>
          </div>

          {/* Custom Packages */}
          <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200/50">
              <h3 className="text-xl sm:text-xl font-bold text-gray-900 mb-4">Need Something Bigger?</h3>
              <p className="text-base sm:text-base text-gray-600 mb-6">
                We offer custom packages for large furniture collections and enterprise clients. 
                Get in touch to discuss your specific needs.
              </p>
              <button className="bg-white text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-200 touch-manipulation min-h-[48px] text-base sm:text-base">
                Contact Us for Custom Pricing
              </button>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-green-200">
              <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
              </div>
              <span className="font-medium text-base sm:text-base">100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Media Preview Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.4) 25%, rgba(51, 65, 85, 0.3) 50%, rgba(30, 41, 59, 0.4) 75%, rgba(15, 23, 42, 0.3) 100%)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)'
          }}
          onClick={closeMediaPreview}
        >
          {/* Additional glassmorphic overlay elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-yellow-500/5 pointer-events-none"></div>
          
          {/* Glassmorphic container */}
          <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full shadow-lg hover:bg-white/30 transition-all duration-200 touch-manipulation flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                width: '48px',
                height: '48px',
                minWidth: '48px',
                minHeight: '48px'
              }}
              onClick={(e) => {
                e.stopPropagation();
                closeMediaPreview();
              }}
              aria-label="Close preview"
            >
              <X className="w-6 h-6 flex-shrink-0" />
            </button>

            {/* Media container */}
            <div 
              className="relative w-full h-full max-w-[90vw] max-h-[85vh] sm:max-w-[85vw] sm:max-h-[90vh] md:max-w-[80vw] md:max-h-[85vh] lg:max-w-[75vw] lg:max-h-[80vh] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl pointer-events-none"></div>
              
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.url} 
                  alt="Preview"
                  className="max-w-full max-h-full object-contain select-none"
                  draggable={false}
                />
              ) : (
                <video 
                  src={selectedMedia.url}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FurniturePage;