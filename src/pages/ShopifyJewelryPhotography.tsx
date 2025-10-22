import React from 'react';
import { Check, Zap, DollarSign, Clock, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SchemaFAQ } from '../components/schema';
import Header from '../components/Header';

const ShopifyJewelryPhotography = () => {
  const faqs = [
    {
      question: "How do I add AI jewelry photos to my Shopify store?",
      answer: "After receiving your AI-generated photos from JewelryAI, simply upload them to your Shopify product pages like any other image. All photos come in web-optimized formats (JPG, PNG) and are ready for immediate use. We provide multiple sizes optimized for Shopify's image requirements."
    },
    {
      question: "Are AI-generated photos good enough for Shopify product listings?",
      answer: "Absolutely. Our AI photos are photorealistic 4K images indistinguishable from traditional photography. They meet all Shopify image quality requirements and often outperform traditional photos in click-through rates and conversions because of consistent lighting and professional composition."
    },
    {
      question: "How much does AI jewelry photography cost for Shopify?",
      answer: "Starting at $99 for 5 AI-generated photos (First Look package). For Shopify stores, we recommend the Launch package ($499 for 25 photos) which gives you enough product images for 5-10 jewelry items with multiple angles. This is 80-90% cheaper than hiring a Shopify photographer."
    },
    {
      question: "Can I use AI photos for all my Shopify jewelry products?",
      answer: "Yes! All packages include full commercial licensing for unlimited use on Shopify, Amazon, your website, social media, and anywhere else. There are no restrictions or additional fees."
    },
    {
      question: "How fast can I get photos for my Shopify launch?",
      answer: "2-7 days delivery depending on package. Need faster? Rush delivery available for urgent Shopify launches. Much faster than traditional photography which takes 2-4 weeks."
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Jewelry Photography for Shopify | 4K Product Photos from $99"
        description="Get professional AI jewelry photos for your Shopify store. 4K product images with AI models, white background, and lifestyle shots. Starting at $99 for 5 photos. 2-7 day delivery. Perfect for Shopify jewelry stores - 80% cheaper than photographers. Full commercial license. Optimized for Shopify image requirements."
        keywords="Shopify jewelry photography, AI jewelry photos Shopify, Shopify product photography jewelry, jewelry photography for Shopify store, AI jewelry images Shopify, Shopify jewelry photos AI, professional Shopify jewelry photography, affordable Shopify product photos"
        canonicalUrl="https://jewelryai.app/shopify-jewelry-photography"
      />
      <Header />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI Jewelry Photography for Shopify Stores
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get professional 4K jewelry product photos for your Shopify store in 2-7 days.
              No photographer needed. 80% cheaper. Perfect for product pages, collections, and ads.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">80% Cost Savings</h3>
              <p className="text-gray-700">$99-$799 vs $500-$5,000 for traditional Shopify product photography</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">2-7 Day Delivery</h3>
              <p className="text-gray-700">Launch your Shopify store faster. Rush delivery available for urgent launches</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shopify Optimized</h3>
              <p className="text-gray-700">All photos meet Shopify's image requirements. Multiple formats and sizes included</p>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Perfect for Shopify Product Pages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "4K product images (3840x2160px)",
                "White background photos (Shopify standard)",
                "On-model lifestyle shots (increase conversions)",
                "Multiple angles per product",
                "Optimized file sizes for fast loading",
                "JPG, PNG, and TIFF formats",
                "Social media sizes included",
                "Full commercial license (unlimited use)",
                "Unlimited revisions (premium packages)",
                "Consistent lighting across all products"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shopify-Specific Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Why Shopify Jewelry Stores Choose AI Photography
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Time to Market</h3>
                <p className="text-gray-700">Launch your Shopify store in days, not weeks. Traditional photography takes 2-4 weeks. AI photography delivers in 2-7 days. Perfect for seasonal launches and new product drops.</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consistent Brand Aesthetic</h3>
                <p className="text-gray-700">Get perfectly consistent lighting, composition, and style across all product photos. Shopify stores with consistent imagery convert 30% better than those with mixed photography styles.</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable as You Grow</h3>
                <p className="text-gray-700">Adding 50 new products to your Shopify store? No problem. AI scales instantly. Traditional photography requires booking photographers, models, studios - creating bottlenecks as you grow.</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Conversion Rates</h3>
                <p className="text-gray-700">Professional AI photos with models increase Shopify conversion rates by 25-40% compared to basic product-only shots. Show your jewelry being worn to boost sales.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-16 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Shopify Jewelry Store Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">First Look - $99</div>
                <div className="text-emerald-400 text-sm mb-4">Perfect for Testing</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ 5 AI product photos</li>
                  <li>✓ 1 video</li>
                  <li>✓ 7 day delivery</li>
                  <li>✓ Great for 1-2 products</li>
                </ul>
              </div>
              <div className="bg-emerald-600 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  BEST FOR SHOPIFY
                </div>
                <div className="text-2xl font-bold mb-2">Launch - $499</div>
                <div className="text-emerald-100 text-sm mb-4">Most Popular</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ 25 AI product photos</li>
                  <li>✓ 10 videos</li>
                  <li>✓ 3-5 day delivery</li>
                  <li>✓ Perfect for 5-10 products</li>
                  <li>✓ Unlimited revisions</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">Collection - $799</div>
                <div className="text-emerald-400 text-sm mb-4">Full Catalog</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ 60 AI product photos</li>
                  <li>✓ 20 videos</li>
                  <li>✓ 2-3 day delivery</li>
                  <li>✓ Perfect for 10-20 products</li>
                  <li>✓ Unlimited revisions</li>
                  <li>✓ 4K + RAW files</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Shopify Jewelry Photography FAQ
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
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

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Launch Your Shopify Jewelry Store?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Get professional AI product photos in 2-7 days. Perfect for Shopify.
            </p>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg gap-2"
            >
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>
      <SchemaFAQ faqs={faqs} />
    </>
  );
};

export default ShopifyJewelryPhotography;
