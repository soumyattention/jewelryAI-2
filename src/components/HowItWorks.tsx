import React from 'react';
import { Package, Upload, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Package,
      title: 'Choose Your Package',
      description: 'Pick the plan that fits your collection size.',
      details: 'Start with our $99 trial or go full scale with our Collection package.'
    },
    {
      number: '02',
      icon: Upload,
      title: 'Upload Your Jewelry',
      description: 'Share your existing jewelry photos with us in your dedicated project channel.',
      details: 'Connect via Slack or WhatsApp for seamless communication throughout the process.'
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Receive Your Content',
      description: 'We handle the entire creative process and deliver your breathtaking photos and videos.',
      details: 'Get 4K quality images and cinematic videos that showcase your jewelry perfectly.'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            From Your Photo to a Masterpiece in 3 Simple Steps
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Our streamlined process makes it easy to transform your jewelry photos into 
            stunning marketing content that drives sales.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300 text-center lg:text-left mx-4 sm:mx-0">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${
                    index === 2 
                      ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                      : 'bg-gradient-to-br from-amber-500 to-yellow-600'
                  } text-white font-bold text-base sm:text-lg rounded-xl mb-4 mx-auto lg:mx-0`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 ${
                      index === 2 
                        ? 'bg-gradient-to-br from-emerald-50 to-green-50' 
                        : 'bg-gradient-to-br from-amber-50 to-yellow-50'
                    } rounded-2xl flex items-center justify-center`}>
                      <step.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${
                        index === 2 ? 'text-emerald-600' : 'text-amber-600'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-base sm:text-base text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm sm:text-sm text-gray-500">{step.details}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-6 h-6 text-amber-400 transform rotate-90">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;