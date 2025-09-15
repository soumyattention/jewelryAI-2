import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Gem, Instagram, MessageSquare, Mail, ArrowRight, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Ensure footer never overlaps content
    const ensureFooterPosition = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.position = 'relative';
        footer.style.zIndex = '10';
        footer.style.transform = 'translateZ(0)';
        footer.style.willChange = 'transform';
      }
    };

    // Call immediately and on scroll
    ensureFooterPosition();
    window.addEventListener('scroll', ensureFooterPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', ensureFooterPosition);
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden z-10" style={{ willChange: 'transform' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-yellow-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-yellow-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-amber-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          
          {/* About Us Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <a href="/" className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg hover:opacity-80 transition-opacity duration-200">
                <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <h3 className="text-lg sm:text-xl font-bold text-white">About Us</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="#" 
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">The Core Idea</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </a>
              
              <a 
                href="#" 
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">Our Team</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </a>
              
              <a 
                href="#" 
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">Future Updates</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Navigation</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <Link 
                to="/"
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">Home</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
              
              <Link 
                to="/galleryx"
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">Gallery</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
              
              <Link 
                to="/privacy"
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">Privacy Policy</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
              
              <a 
                href="/refunds" 
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">Cancellation & Refunds</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </a>
              
              <a 
                href="/tos" 
                className="group flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 touch-manipulation py-1"
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="text-sm sm:text-base">Terms of Services</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* Email Subscription Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Stay Updated</h3>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Get the latest updates on AI jewelry photography trends, new features, and exclusive offers.
            </p>

            {/* Email Subscription Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 sm:py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubscribed}
                className={`group w-full flex items-center justify-center space-x-2 px-6 py-3 sm:py-3.5 rounded-xl font-semibold transition-all duration-300 touch-manipulation min-h-[48px] text-base sm:text-base ${
                  isSubscribed
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25'
                }`}
              >
                {isSubscribed ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    <span>Subscribe Now</span>
                  </>
                )}
              </button>
            </form>

            {/* Social Icons */}
            <div className="pt-3 sm:pt-4">
              <p className="text-gray-400 text-sm sm:text-sm mb-3 sm:mb-4">Follow us on social media</p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 touch-manipulation"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 touch-manipulation"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 touch-manipulation"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-500 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 touch-manipulation"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25 touch-manipulation"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg hover:opacity-80 transition-opacity duration-200">
                <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a href="/" className="text-lg sm:text-xl font-bold text-white hover:text-amber-400 transition-colors duration-200">Jewelry AI</a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm sm:text-sm">
                © 2025 Jewelry AI. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm sm:text-sm mt-1">
                Revolutionizing jewelry photography with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;