import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What kind of jewelry photos do I need to provide?',
      answer: 'We work with standard product photos taken on smartphone or render images from CAD. The clearer and higher resolution your original photos, the better our AI can preserve the details.'
    },
    {
      question: 'Is it safe to use AI-generated images on social media?',
      answer: 'Luxury lifestyle and fashion brands are already making AI promo, and the industry is growing rapidly. AI gives you freedom to have total creative control on your jewelry photography while maintaing realism.'
    },
    {
      question: 'How does the "unlimited revisions" process work?',
      answer: 'For Collection package customers, we refine the outputs until you\'re completely satisfied. We work through your dedicated communication channel to understand your feedback and make adjustments to achieve the exact look you want.'
    },
   
    {
      question: 'Do you offer larger, custom packages?',
      answer: 'Yes! We are already working with a few Shopify and eBay jewelry retailers, creating 100s of product images for their listing. Surely, we have both the capacity and capability to fulfil your requirements, please get in touch with us for custom orders.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-lg text-gray-600 px-4 sm:px-0">
            Everything you need to know about our AI jewelry photography service.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 mx-4 sm:mx-0"
            >
              <button
                className="w-full px-4 sm:px-6 py-5 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 touch-manipulation"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg sm:text-lg font-semibold text-gray-900 pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6">
                  <div className="pt-2 sm:pt-3 border-t border-gray-100">
                    <p className="text-base sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12 sm:mt-16 mx-4 sm:mx-0">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-amber-200/50">
            <h3 className="text-xl sm:text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-base sm:text-base text-gray-600 mb-6">
              Our team is here to help you understand how AI can transform your jewelry marketing.
            </p>
            <a 
              href="https://wa.me/447727727748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px] text-base sm:text-base"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;