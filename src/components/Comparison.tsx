import React from 'react';
import { DollarSign, Clock, Users, Palette, Zap, Infinity, Award, Video, ShieldCheck } from 'lucide-react';

const Comparison = () => {
  const problemItems = [
    {
      icon: DollarSign,
      title: 'Expensive Models & Photographers',
      description: 'Thousands of dollars per shoot'
    },
    {
      icon: Users,
      title: 'Studio Rental Hassles',
      description: 'Complex booking and scheduling'
    },
    {
      icon: Clock,
      title: 'Slow Turnaround Times',
      description: 'Weeks or months for final results'
    },
    {
      icon: Palette,
      title: 'Limited Creative Freedom',
      description: 'Restricted by physical constraints'
    }
  ];

  const solutionItems = [
    {
      icon: Zap,
      title: '90% Cost Reduction',
      description: 'Fraction of traditional costs'
    },
    {
      icon: Infinity,
      title: 'Limitless Creativity',
      description: 'Infinite models, poses, and scenes'
    },
    {
      icon: Award,
      title: '4K Quality, 95% Accuracy',
      description: 'Preserve every jewelry detail'
    },
    {
      icon: Infinity,
      title: 'Limitless Creativity',
      description: 'Infinite models, poses, and scenes'
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            This changes everything.
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            One of the biggest innovation in the Jewelry industry in decades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          {/* The Problem */}
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-2xl font-bold text-red-600 mb-2 px-4 sm:px-0">The Photoshoot Nightmare</h3>
              <p className="text-base sm:text-base text-gray-600 px-4 sm:px-0">Traditional jewelry photography problems</p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {problemItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 bg-red-50/50 backdrop-blur-sm rounded-xl border border-red-100/50 shadow-sm hover:shadow-md transition-shadow duration-200 mx-4 sm:mx-0">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-base">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-2xl font-bold text-green-600 mb-2 px-4 sm:px-0">The JewelryAI Advantage</h3>
              <p className="text-base sm:text-base text-gray-600 px-4 sm:px-0">AI-powered jewelry photography benefits</p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {solutionItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 bg-green-50/50 backdrop-blur-sm rounded-xl border border-green-100/50 shadow-sm hover:shadow-md transition-shadow duration-200 mx-4 sm:mx-0">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-base sm:text-base">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;