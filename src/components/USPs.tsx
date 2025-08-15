import React from 'react';
import { Camera, Palette, Video } from 'lucide-react';

const USPs = () => {
  const usps = [
    {
      icon: Camera,
      title: 'Render to Real',
      subtitle: 'Transform CAD Renders into Reality',
      description: 'Convert your jewelry CAD renders into pixel-perfect realistic on-model photoshoots and videos that connects with your customers.',
      highlight: 'I\'m sure you have 100s of CAD renders that you can\'t show to customers in any real way possible—this is our solution.',
      gradient: 'from-amber-500 to-yellow-600',
      bgGradient: 'from-amber-50 to-yellow-50'
    },
    {
      icon: Palette,
      title: 'Let it be Any Style',
      subtitle: 'There\'s no limit to Creativity',
      description: 'Let it be Vogue Editorial, or Avant-Garde, let it be outdoor, studio, closeup, even styles inspired by famous photographers, we can do anything.',
      highlight: 'I\'m sure you want your Instagram to look like an International Luxury Brand, we can do that.',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Video,
      title: 'Concept to Video',
      subtitle: 'Bring Your Ideas to Life',
      description: 'Transform your concepts and ideas into realistic videos using your own jewelry articles- Engagement, Weddings, its—anything you can imagine.',
      highlight: 'I can\'t wait to hear your unique ideas, to turn them into ads',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
              Jewelry AI
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Three powerful capabilities that set us apart from traditional photography and other AI solutions
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {usps.map((usp, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${usp.bgGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <usp.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${usp.gradient.split('-')[1]}-600`} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-gray-600 mb-4">
                    {usp.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                    {usp.description}
                  </p>
                  
                  {/* Highlight Box */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border-l-4 border-amber-400">
                    <p className="text-sm sm:text-base font-medium text-gray-800 italic">
                      "{usp.highlight}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-amber-200/50">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Ready to Transform Your Jewelry Marketing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of jewelers who've already revolutionized their content creation with our AI-powered platform.
            </p>
            <a 
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#pricing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Your AI Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPs;
