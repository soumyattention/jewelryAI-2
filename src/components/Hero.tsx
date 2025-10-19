import React from 'react';
import { Play, Star, ArrowRight } from 'lucide-react';
import { ImageSwiper } from './ui/image-swiper';

const Hero = () => {
  // High-quality jewelry photography images from Pexels
  const jewelryImages = "https://ik.imagekit.io/soumya3301/3.png?updatedAt=1750483598664,https://ik.imagekit.io/soumya3301/8.png?updatedAt=1750483597465,https://ik.imagekit.io/soumya3301/7.png?updatedAt=1750483598632,https://ik.imagekit.io/soumya3301/1.png?updatedAt=1750483666775,https://ik.imagekit.io/soumya3301/2.png?updatedAt=1750483598632,https://ik.imagekit.io/soumya3301/6.png?updatedAt=1750483598830,https://ik.imagekit.io/soumya3301/Necklace/replicate-prediction-qftbnva4w1rmc0cqkcbaec8t34.jpg?updatedAt=1750705074646,https://ik.imagekit.io/soumya3301/Necklace/022404992414_2244edfe4fd911f0afe58584d6140a20_output_0superresolution.jpg?updatedAt=1750705074676";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Dynamic Moving Gradient Overlay */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-yellow-100/30 to-amber-100/40 animate-gradient-x"></div>
      </div>
      
      {/* Animated Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-yellow-300/25 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-200/25 to-amber-300/30 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left lg:order-first">
            {/* Trust Badge - Mobile: Stacked, Desktop: Inline */}
            <div className="flex flex-col sm:inline-flex sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6 md:mb-8">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/50 flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/50">
                <span className="text-sm sm:text-base font-medium text-gray-700">World's First & Finest AI Jewelry Suite</span>
              </div>
            </div>

            {/* Main Headline - Mobile: Line breaks, Desktop: Normal */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              <span className="sm:hidden">
                Jewelry Photography<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                  Shouldn't Burn
                </span><br />
                Your Wallet.
              </span>
              <span className="hidden sm:inline">
                Jewelry Photography{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                  Shouldn't Burn
                </span>{' '}
                Your Wallet.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              We create stunning, hyper-realistic, on-model jewelry photography and videography with 95% retention of details—at a fraction of the cost.
            </p>

            {/* Image Swiper - Mobile: Show here, Desktop: Hide here */}
            <div className="lg:hidden relative flex justify-center mb-8 sm:mb-10">
              <div className="relative">
                <ImageSwiper 
                  images={jewelryImages}
                  cardWidth={260}
                  cardHeight={320}
                  autoSwipeInterval={2000}
                  className="transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200/50">
                  <div className="text-xs font-semibold text-gray-900">✨ Ultra-realistic</div>
                </div>
                
                <div className="absolute -bottom-3 -left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200/50">
                  <div className="text-xs font-semibold text-gray-900">🎬 Cinematic Videos</div>
                </div>

                {/* Swipe Instruction */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                  AI-generated
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <a 
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#pricing');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-2 touch-manipulation min-h-[48px]"
              >
                <span>Try Us For $99</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <a
                                        href="/gallery"
                className="group flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-md text-gray-800 px-6 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg border border-white/30 hover:bg-white/30 hover:border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 touch-manipulation min-h-[48px]"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>View Gallery</span>
              </a>
            </div>

          </div>

          {/* Right Column - Image Swiper - Desktop: Show here, Mobile: Hide here */}
          <div className="relative hidden lg:flex justify-center lg:justify-end lg:order-last">
            <div className="relative">
              <ImageSwiper 
                images={jewelryImages}
                cardWidth={320}
                cardHeight={400}
                autoSwipeInterval={2000}
                className="transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200/50">
                <div className="text-xs font-semibold text-gray-900">✨ Ultra-realistic</div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200/50">
                <div className="text-xs font-semibold text-gray-900">🎬 Cinematic Videos</div>
              </div>

              {/* Swipe Instruction */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                AI-generated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;