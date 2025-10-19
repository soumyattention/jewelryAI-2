import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Clock, DollarSign } from 'lucide-react';
import Confetti from 'react-confetti';
import InteractiveCTA from './InteractiveCTA';

const FinalCTA = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });
  const [showMainCTA, setShowMainCTA] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Track window dimensions for confetti
  useEffect(() => {
    const detectSize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    detectSize();
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height
      });
    }
    setShowConfetti(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonRef.current && showConfetti) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        width: rect.width,
        height: rect.height
      });
    }
  };

  const handleMouseLeave = () => {
    setShowConfetti(false);
  };

  // Update button position on scroll or resize
  useEffect(() => {
    const updateButtonPosition = () => {
      if (buttonRef.current && showConfetti) {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        });
      }
    };

    window.addEventListener('scroll', updateButtonPosition);
    window.addEventListener('resize', updateButtonPosition);
    
    return () => {
      window.removeEventListener('scroll', updateButtonPosition);
      window.removeEventListener('resize', updateButtonPosition);
    };
  }, [showConfetti]);

  const handleAllAnswered = () => {
    setShowMainCTA(true);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          confettiSource={{
            x: buttonPosition.x - buttonPosition.width / 4,
            y: buttonPosition.y - buttonPosition.height / 4,
            w: buttonPosition.width / 2,
            h: buttonPosition.height / 2
          }}
          colors={['#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#fbbf24', '#f59e0b']}
          gravity={0.4}
          wind={0.02}
          initialVelocityX={8}
          initialVelocityY={20}
          friction={0.99}
        />
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-yellow-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-amber-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Interactive CTA Section */}
          <InteractiveCTA onAllAnswered={handleAllAnswered} />

          {/* Main CTA Section - Fades in after all questions answered */}
          <div className={`transition-all duration-1000 ${
            showMainCTA 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-8 pointer-events-none'
          }`}>
            {/* Benefits */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto px-4 sm:px-0">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-amber-400/20">
                  <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">90% Cost Savings</h3>
                <p className="text-gray-400 text-sm sm:text-sm">vs traditional photoshoots</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-amber-400/20">
                  <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Days Not Months</h3>
                <p className="text-gray-400 text-sm sm:text-sm">Lightning fast delivery</p>
              </div>
              
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-amber-400/20">
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">95% Accuracy</h3>
                <p className="text-gray-400 text-sm sm:text-sm">Preserve every detail</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8 px-4 sm:px-0">
              <a 
                ref={buttonRef}
                href="https://wa.me/447727727748"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-lg sm:text-lg hover:from-emerald-600 hover:to-green-700 hover:glow-green-intense transform hover:scale-105 transition-all duration-200 shadow-2xl flex items-center space-x-2 touch-manipulation min-h-[48px] w-full sm:w-auto justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <span>Start Your AI Photoshoot Today</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <button className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-4 rounded-xl font-semibold text-lg sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center space-x-2 touch-manipulation min-h-[48px] w-full sm:w-auto justify-center">
                                        <a href="/gallery" className="flex items-center space-x-2">
                                      <span>View Gallery</span>
                </a>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm sm:text-sm px-4 sm:px-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Full Commercial Rights</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>14-30 Day Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;