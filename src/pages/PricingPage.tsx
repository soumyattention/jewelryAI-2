import React from 'react';
import { Check, Star, ArrowRight, Clock, Image, Video, Zap, RefreshCw } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SchemaProduct, SchemaFAQ } from '../components/schema';
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

  const pricingFAQs = [
    {
      question: "How does AI jewelry photography work?",
      answer: "Upload your jewelry photos, choose your preferred AI model and setting, and receive professional editorial-quality photos within 2-7 days. Our AI analyzes your jewelry and creates photorealistic images with virtual models in various poses and backgrounds."
    },
    {
      question: "Is AI jewelry photography as good as traditional photography?",
      answer: "Yes. Our AI-generated photos are indistinguishable from traditional photography and cost 80-90% less. You get the same professional quality without hiring models, photographers, or studios. Perfect for e-commerce, social media, and marketing."
    },
    {
      question: "What file formats do I receive?",
      answer: "First Look package includes JPG and PNG. Launch package includes JPG, PNG, and TIFF. The Collection package includes all formats plus RAW files. All images are high-resolution and ready for commercial use."
    },
    {
      question: "Can I use the photos for commercial purposes?",
      answer: "Yes. All packages include full commercial licensing. You own the photos and can use them for e-commerce websites, social media, advertising, catalogs, and any marketing materials without restrictions or royalty fees."
    },
    {
      question: "How long does it take to receive my photos?",
      answer: "First Look: 7 days. Launch: 3-5 days. The Collection: 2-3 days. Rush delivery available for urgent projects. You'll receive previews within 24-48 hours for feedback before final delivery."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "Launch and Collection packages include unlimited revisions until you're 100% satisfied. First Look includes 1 revision. We also offer a satisfaction guarantee - if we can't meet your expectations, we'll refund your payment."
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

        {/* Detailed Feature Comparison Table */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Compare All Features
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-500 to-green-600">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">First Look<br/><span className="text-sm font-normal">$99</span></th>
                  <th className="px-6 py-4 text-center text-white font-semibold bg-emerald-600">Launch<br/><span className="text-sm font-normal">$499</span></th>
                  <th className="px-6 py-4 text-center text-white font-semibold">The Collection<br/><span className="text-sm font-normal">$799</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium flex items-center">
                    <Image className="w-5 h-5 mr-2 text-emerald-600" />
                    AI Editorial Photos
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">5</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold bg-emerald-50">25</td>
                  <td className="px-6 py-4 text-center text-gray-700">60</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium flex items-center">
                    <Video className="w-5 h-5 mr-2 text-emerald-600" />
                    AI Cinematic Videos
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">1</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold bg-emerald-50">10</td>
                  <td className="px-6 py-4 text-center text-gray-700">20</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                    Turnaround Time
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">7 days</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold bg-emerald-50">3-5 days</td>
                  <td className="px-6 py-4 text-center text-gray-700">2-3 days</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium flex items-center">
                    <RefreshCw className="w-5 h-5 mr-2 text-emerald-600" />
                    Revision Requests
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">1</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold bg-emerald-50">Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-emerald-600" />
                    Resolution
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700">1080p</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold bg-emerald-50">4K</td>
                  <td className="px-6 py-4 text-center text-gray-700">4K</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">File Formats</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">JPG, PNG</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold bg-emerald-50 text-sm">JPG, PNG, TIFF</td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">JPG, PNG, TIFF, RAW</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">AI Model Quality</td>
                  <td className="px-6 py-4 text-center text-gray-700">Standard</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold bg-emerald-50">Premium</td>
                  <td className="px-6 py-4 text-center text-gray-700">Premium</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Custom Poses/Styles</td>
                  <td className="px-6 py-4 text-center text-gray-700">—</td>
                  <td className="px-6 py-4 text-center text-emerald-600 bg-emerald-50">
                    <Check className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-emerald-600">
                    <Check className="w-5 h-5 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Commercial License</td>
                  <td className="px-6 py-4 text-center text-emerald-600">
                    <Check className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-emerald-600 bg-emerald-50">
                    <Check className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center text-emerald-600">
                    <Check className="w-5 h-5 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Price per Photo</td>
                  <td className="px-6 py-4 text-center text-gray-700">$19.80</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold bg-emerald-50">$19.96</td>
                  <td className="px-6 py-4 text-center text-gray-700">$13.32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AI vs Traditional Comparison */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            AI Photography vs Traditional Photography
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Comparison</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">JewelryAI (AI)</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Traditional Photography</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Cost per Photoshoot</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">$99 - $799</td>
                  <td className="px-6 py-4 text-center text-red-600 font-bold">$500 - $5,000+</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Turnaround Time</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">2-7 days</td>
                  <td className="px-6 py-4 text-center text-gray-700">2-4 weeks</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Revisions</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">1 - Unlimited</td>
                  <td className="px-6 py-4 text-center text-gray-700">Limited (extra cost)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Model Variety</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">Unlimited AI models</td>
                  <td className="px-6 py-4 text-center text-gray-700">Limited by availability</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Location/Studio Costs</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">$0 (included)</td>
                  <td className="px-6 py-4 text-center text-gray-700">$200 - $2,000/day</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Consistency</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">100% consistent</td>
                  <td className="px-6 py-4 text-center text-gray-700">Varies by shoot</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">Quality</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">Photorealistic 4K</td>
                  <td className="px-6 py-4 text-center text-emerald-600 font-bold">Professional 4K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            *Cost savings of 80-90% compared to traditional photography while maintaining the same professional quality.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricingFAQs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        </div>
      </section>
      <SchemaFAQ faqs={pricingFAQs} />
    </>
  );
};

export default PricingPage;
