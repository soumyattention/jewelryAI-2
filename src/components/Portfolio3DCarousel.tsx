import React from 'react';
import { ThreeDPhotoCarousel } from './ui/3d-carousel';

const Portfolio3DCarousel = () => {
  return (
    <section className="py-6 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            Experience Our Work in 3D
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Drag to rotate and explore our AI-generated jewelry photography from every angle. 
            Click on any image to view it in full detail.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative">
          <ThreeDPhotoCarousel />
        </div>

        {/* Instructions */}
        <div className="text-center mt-4 sm:mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Instructions Tag */}
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 shadow-lg">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="hidden sm:inline">Drag to rotate</span>
                <span className="sm:hidden">Swipe to rotate</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Click to enlarge</span>
              </div>
            </div>
            
            {/* View Portfolio Button */}
            <a 
              href="/portfolio"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-300/50 shadow-lg hover:shadow-xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[48px] text-sm font-medium text-amber-700 hover:text-amber-800"
              style={{
                boxShadow: '0 4px 20px rgba(251, 191, 36, 0.15), 0 0 0 1px rgba(251, 191, 36, 0.1)',
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse shadow-sm"></div>
              <span>View Portfolio</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio3DCarousel;