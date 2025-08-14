import React, { useState, useEffect } from 'react';
import { Menu, X, Gem, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 mobile-menu-container ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 z-50 relative hover:opacity-80 transition-opacity duration-200">
            <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg">
              <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Jewelry AI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 py-2 px-1"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 py-2 px-1"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="https://checkout.dodopayments.com/buy/pdt_rbD4D5ZCYfTy2cREbI1yW?quantity=1&redirect_url=https://wa.link%2F87jro9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm xl:text-base"
            >
              <span className="hidden xl:inline">Start Your AI Photoshoot</span>
              <span className="xl:hidden">Get Started</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 -mr-2 z-50 relative touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 transition-transform duration-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 transition-transform duration-200" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 top-16 sm:top-18 md:top-20 z-40 transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          
          {/* Menu Content */}
          <div className={`relative bg-white shadow-xl border-b border-gray-200 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
            <nav className="px-4 py-6 space-y-2 bg-white">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between text-gray-800 hover:text-gray-900 hover:bg-gray-50 font-medium px-4 py-4 rounded-xl transition-all duration-200 text-lg touch-manipulation bg-white border border-gray-100 shadow-sm mb-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 opacity-40" />
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between text-gray-800 hover:text-gray-900 hover:bg-gray-50 font-medium px-4 py-4 rounded-xl transition-all duration-200 text-lg touch-manipulation bg-white border border-gray-100 shadow-sm mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 opacity-40" />
                  </a>
                )
              ))}

              {/* Mobile CTA Button */}
              <div className="px-4 pt-6 pb-2">
                <a 
                  href="https://checkout.dodopayments.com/buy/pdt_rbD4D5ZCYfTy2cREbI1yW?quantity=1&redirect_url=https://wa.link%2F87jro9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-200 text-center text-lg shadow-lg touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Your AI Photoshoot
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;