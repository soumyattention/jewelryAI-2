import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SchemaProduct } from '../components/schema';
import Header from '../components/Header';

const PricingPage = () => {
  const packages = [
    {
      name: 'First Look',
      price: '$99',
      priceNumeric: 99,
      description: 'Perfect for quality testing',
      features: [
        'Up to 3 Jewelry Articles',
        '5 AI Editorial Photoshoots',
        '1 Creative Cinematic Video',
        '7 Days Delivery',
        '1 Revision Request'
      ],
      specs: {
        photos: 5,
        videos: 1,
        turnaround: '7 days',
        revisions: 1,
        resolution: '1080p',
        formats: 'JPG, PNG',
        aiModels: 'Standard',
        commercialLicense: true
      },
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Launch',
      price: '$499',
      priceNumeric: 499,
      description: 'Your perfect pivot to AI',
      features: [
        'Up to 25 AI Editorial Photoshoots',
        'Up to 10 AI Cinematic Videos',
        'Most Natural AI Models (indistinguishable from reality)',
        'Highest Quality of AI Image/Video Models to be used',
        'Bring your reference model/pose/style/anything',
        'Unlimited Revision'
      ],
      specs: {
        photos: 25,
        videos: 10,
        turnaround: '3-5 days',
        revisions: 'Unlimited',
        resolution: '4K',
        formats: 'JPG, PNG, TIFF',
        aiModels: 'Premium (Natural)',
        commercialLicense: true
      },
      cta: 'Launch Your Brand',
      popular: true
    },
    {
      name: 'The Collection',
      price: '$799',
      priceNumeric: 799,
      description: 'One month of highest-quality contents',
      features: [
        'Up to 60 AI Editorial Photoshoots (Upscaled to 4K)',
        'Up to 20 AI Cinematic Videos (30s 1080p each)',
        'Most Natural AI Models (indistinguishable from reality)',
        'Highest Quality of AI Image/Video Models to be used',
        'Bring your reference model/pose/style/anything',
        'Unlimited Revision'
      ],
      specs: {
        photos: 60,
        videos: 20,
        turnaround: '2-3 days',
        revisions: 'Unlimited',
        resolution: '4K',
        formats: 'JPG, PNG, TIFF, RAW',
        aiModels: 'Premium (Natural)',
        commercialLicense: true
      },
      cta: 'Start Your Collection',
      popular: false
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Jewelry Photography Pricing | Editorial & Model Photos from $99 | JewelryAI"
        description="AI jewelry photography packages: First Look $99 (5 photos + video), Launch $499 (25 editorial photoshoots + 10 videos), Collection $799 (60 photos + 20 videos). AI editorial jewelry photos, AI model jewelry photography, Vogue-style AI jewelry editorials. Compare AI vs traditional photography costs - save 80-90%. Full commercial license included."
        keywords="AI jewelry photography pricing, AI editorial jewelry photo, AI jewelry model, AI Vogue editorial jewelry, put jewelry on AI model, AI model wearing jewelry, AI editorial necklace photo, AI editorial ring photo, AI editorial earring photo, virtual jewelry model, AI jewelry photography cost, jewelry photography packages, AI vs traditional photography cost"
        canonicalUrl="https://jewelryai.app/pricing"
      />
      <SchemaProduct
        name="Premium AI Jewelry Photography Package"
        description="Complete AI jewelry photography service with 25 photoshoots, 10 cinematic videos, unlimited revisions, and premium AI models"
        price="499"
        priceCurrency="USD"
        aggregateRating={{
          ratingValue: "5.0",
          reviewCount: "127"
        }}
      />
      <Header />
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Choose the perfect package for your jewelry brand. No hidden fees, 
            no surprises. Just stunning results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
          {packages.map((pkg, index) => (
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
                  href={
                    pkg.name === 'First Look' 
                      ? 'https://checkout.dodopayments.com/buy/pdt_rbD4D5ZCYfTy2cREbI1yW?quantity=1'
                      : pkg.name === 'Launch'
                      ? 'https://checkout.dodopayments.com/buy/pdt_HcLiy0bnaDmzy598sNgUn?quantity=1'
                      : pkg.name === 'The Collection'
                      ? 'https://checkout.dodopayments.com/buy/pdt_YvrRJlJyQpi00DO6W3A00?quantity=1'
                      : 'https://wa.me/447727727748'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
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

        {/* Custom Packages */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200/50">
            <h3 className="text-xl sm:text-xl font-bold text-gray-900 mb-4">Need a Custom Package?</h3>
            <p className="text-base sm:text-base text-gray-600 mb-6">
              Use our custom payment option for your specific needs.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://checkout.dodopayments.com/buy/pdt_0qz1zCZCWDFsSVZKPQHr1?quantity=1&showDiscounts=false"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-200 touch-manipulation min-h-[48px]"
              >
                Custom Payment
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-green-200">
            <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 sm:w-4 h-4 text-green-600" />
            </div>
            <span className="font-medium text-base sm:text-base">100% Satisfaction Guaranteed</span>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default PricingPage;
