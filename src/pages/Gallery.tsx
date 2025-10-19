import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { galleryItems, GalleryItem } from '../lib/gallery-data';
import { X, ChevronLeft, ChevronRight, Play, Grid3x3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Component as Docks } from '../components/ui/docks';
import { PhotoGallery } from '../components/ui/gallery';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "photos" | "videos" | "featured">("featured");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const galleryTopRef = useRef<HTMLDivElement>(null);

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Randomize items once on mount
  const [randomizedItems] = useState(() => shuffleArray(galleryItems));

  // Handle category change with scroll to top
  const handleCategoryChange = (category: "all" | "photos" | "videos" | "featured") => {
    setSelectedCategory(category);
    // Scroll to gallery top
    if (galleryTopRef.current) {
      galleryTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter items based on selected category
  const filteredItems = selectedCategory === "all"
    ? randomizedItems
    : selectedCategory === "featured"
      ? randomizedItems.filter(item => item.selected)
      : randomizedItems.filter(item => item.category === selectedCategory);

  // Open fullscreen preview
  const openFullscreen = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close fullscreen preview
  const closeFullscreen = () => {
    setSelectedItem(null);
    setSelectedIndex(-1);
    setIsFullscreen(false);
    setIsVideoPlaying(false);
    document.body.style.overflow = 'auto';
  };

  // Navigate to next item
  const navigateNext = () => {
    if (selectedIndex < filteredItems.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedItem(filteredItems[nextIndex]);
      setIsVideoPlaying(false);
    }
  };

  // Navigate to previous item
  const navigatePrevious = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedItem(filteredItems[prevIndex]);
      setIsVideoPlaying(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;

      switch (e.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowRight':
          navigateNext();
          break;
        case 'ArrowLeft':
          navigatePrevious();
          break;
        case ' ':
          e.preventDefault();
          if (selectedItem?.type === 'video' && videoRef.current) {
            if (isVideoPlaying) {
              videoRef.current.pause();
              setIsVideoPlaying(false);
            } else {
              videoRef.current.play();
              setIsVideoPlaying(true);
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, selectedIndex, isVideoPlaying, selectedItem]);

  // Auto-play video when opened
  useEffect(() => {
    if (selectedItem?.type === 'video' && videoRef.current && isFullscreen) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }, [selectedItem, isFullscreen]);

  // Intersection Observer for viewport-based video autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0');
          const video = videoRefs.current[videoId];

          if (video) {
            if (entry.isIntersecting) {
              // Video is in viewport, play it
              video.play().catch((error) => {
                console.log('Video autoplay failed:', error);
              });
            } else {
              // Video is out of viewport, pause it
              video.pause();
            }
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
        rootMargin: '0px'
      }
    );

    // Observe all video elements
    const videoElements = document.querySelectorAll('[data-video-id]');
    videoElements.forEach((element) => observer.observe(element));

    return () => {
      videoElements.forEach((element) => observer.unobserve(element));
    };
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      <SEOHead
        title="Gallery - Jewelry AI | AI-Generated Jewelry Photography Collection"
        description="Browse our curated gallery of AI-generated jewelry photography. Discover the stunning quality and realism our advanced AI technology can achieve."
        keywords="jewelry AI gallery, AI photography collection, jewelry photography examples, AI-generated jewelry photos, professional jewelry gallery"
        canonicalUrl="https://jewelryai.app/gallery"
      />
      <Header />

      {/* Fixed Floating Dock - Always Visible */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
        <Docks
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <main className="flex-grow overflow-hidden pt-16 sm:pt-18 pb-16 relative z-0">
        {/* Animated Photo Gallery Header */}
        <div className="[&_a]:hidden">
          <PhotoGallery animationDelay={0.3} />
        </div>

        {/* Subheader Section */}
        <div className="pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 bg-gradient-to-b from-white to-gray-50 relative z-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
                Curated Gallery Collection
              </h2>
              <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                A carefully curated selection of our finest AI-generated jewelry photography and videography.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryTopRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatePresence mode="sync">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                  onClick={() => openFullscreen(item, index)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Media */}
                  {item.type === 'video' ? (
                    <div className="relative w-full h-full" data-video-id={item.id}>
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[item.id] = el;
                        }}
                        src={item.src}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      {/* Glassmorphic Video Play Indicator */}
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Featured Badge */}
                  {item.selected && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show All Button - Only visible when on Featured tab */}
          {selectedCategory === 'featured' && (
            <div className="mt-16 text-center">
              <button
                onClick={() => handleCategoryChange('all')}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                <Grid3x3 className="w-5 h-5 mr-2" />
                Show All ({randomizedItems.length} items)
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {isFullscreen && selectedItem && (
          <motion.div
            ref={fullscreenRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-[10001] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Navigation Buttons */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous item"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
            )}

            {selectedIndex < filteredItems.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Next item"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute top-4 left-4 z-[10001] bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <span className="text-white font-medium text-sm">
                {selectedIndex + 1} / {filteredItems.length}
              </span>
            </div>

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={selectedItem.src}
                    className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                    controls
                    autoPlay
                    loop
                    playsInline
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />
                </div>
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                />
              )}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
