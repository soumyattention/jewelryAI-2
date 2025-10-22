import React from 'react';
import { Check, X, DollarSign, Clock, Users, Zap, RefreshCw, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SchemaFAQ } from '../components/schema';
import Header from '../components/Header';

const AIvsTraditional = () => {
  const comparisonFAQs = [
    {
      question: "Is AI jewelry photography really as good as traditional photography?",
      answer: "Yes. Modern AI jewelry photography produces photorealistic 4K images that are indistinguishable from traditional photography. Our AI models are trained on millions of professional jewelry photos and can replicate the same lighting, composition, and quality standards. The key difference is cost and speed - AI is 80-90% cheaper and 5-10x faster."
    },
    {
      question: "How much money can I save with AI jewelry photography?",
      answer: "Traditional jewelry photography costs $500-$5,000 per photoshoot (photographer fee + model + studio + equipment). AI jewelry photography costs $99-$799 for the same quality. For a typical jewelry brand doing 10 photoshoots/year, you save $4,000-$45,000 annually while getting faster turnaround and unlimited revisions."
    },
    {
      question: "Can AI create editorial-style jewelry photos like Vogue?",
      answer: "Absolutely. Our AI specializes in creating high-fashion editorial jewelry photos with premium AI models, professional lighting, and artistic composition. You can specify the exact style (Vogue, Harper's Bazaar, minimalist, luxury, etc.) and our AI will generate magazine-quality editorial photos for your jewelry."
    },
    {
      question: "Do I need to hire models for AI jewelry photography?",
      answer: "No. AI jewelry photography uses virtual AI models, so you never need to hire, schedule, or pay real models. You get unlimited model variety (different ethnicities, ages, styles) without the $200-$1,000/day model fees. Plus, AI models are always available and never need breaks or rescheduling."
    },
    {
      question: "How long does AI jewelry photography take compared to traditional?",
      answer: "AI jewelry photography takes 2-7 days from upload to final delivery. Traditional photography takes 2-4 weeks (scheduling photographer + model, photoshoot day, editing, revisions). AI is 5-10x faster and you can get rush delivery in 24-48 hours if needed."
    },
    {
      question: "What about revisions - can I request changes to AI photos?",
      answer: "Yes. Our Launch and Collection packages include unlimited revisions. Traditional photographers typically charge extra for revisions or limit them to 1-2 rounds. With AI, you can request as many changes as needed until you're 100% satisfied - different poses, backgrounds, lighting, or models."
    }
  ];

  return (
    <>
      <SEOHead
        title="AI vs Traditional Jewelry Photography: Cost, Quality & Speed Comparison"
        description="Compare AI jewelry photography vs traditional photography. AI costs $99-$799 vs traditional $500-$5,000+. Same photorealistic quality, 5-10x faster (2-7 days vs 2-4 weeks), unlimited AI models vs expensive model fees. See detailed comparison table, cost savings calculator, and real examples. Perfect for e-commerce, editorial, and social media."
        keywords="AI vs traditional jewelry photography, AI jewelry photography cost comparison, AI jewelry model vs real model, virtual jewelry model cost, AI editorial jewelry photo, how much does jewelry photography cost, AI photography vs photographer, jewelry photography pricing comparison, AI model jewelry photography"
        canonicalUrl="https://jewelryai.app/ai-vs-traditional-photography"
      />
      <Header />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI vs Traditional Jewelry Photography
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Same photorealistic quality. 80-90% cost savings. 5-10x faster delivery.
              No models, studios, or scheduling headaches.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">80-90%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">2-7 Days</div>
              <div className="text-gray-600">vs 2-4 Weeks</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">$0</div>
              <div className="text-gray-600">Model Fees</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <RefreshCw className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">Unlimited</div>
              <div className="text-gray-600">Revisions</div>
            </div>
          </div>

          {/* Main Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Complete Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-emerald-500 to-green-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">
                      <Star className="w-5 h-5 inline mr-2" />
                      AI Jewelry Photography
                    </th>
                    <th className="px-6 py-4 text-center text-white font-semibold">Traditional Photography</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Cost per Photoshoot</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-emerald-600 font-bold text-lg">$99 - $799</span>
                      <div className="text-xs text-gray-500">All-inclusive</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 font-bold text-lg">$500 - $5,000+</span>
                      <div className="text-xs text-gray-500">+ model + studio fees</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Turnaround Time</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-gray-900 font-semibold">2-7 days</span>
                      <div className="text-xs text-gray-500">Rush in 24-48hrs</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">2-4 weeks</span>
                      <div className="text-xs text-gray-500">Scheduling delays common</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Model Fees</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-emerald-600 font-bold">$0 (AI models)</span>
                      <div className="text-xs text-gray-500">Unlimited variety</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">$200-$1,000/day</span>
                      <div className="text-xs text-gray-500">Limited availability</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Studio/Location Costs</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-emerald-600 font-bold">$0 (included)</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">$200-$2,000/day</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Equipment/Setup</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-gray-900">None required</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">$500+/hour rental</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Revision Requests</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-emerald-600 font-bold">1 - Unlimited</span>
                      <div className="text-xs text-gray-500">No extra cost</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">1-2 (extra fees)</span>
                      <div className="text-xs text-gray-500">$50-$200 per revision</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Photo Quality</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-gray-900 font-semibold">Photorealistic 4K</span>
                      <div className="text-xs text-gray-500">Indistinguishable from real</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-gray-900 font-semibold">Professional 4K</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Consistency</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-emerald-600 font-bold">100% consistent</span>
                      <div className="text-xs text-gray-500">Perfect every time</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">Varies by shoot</span>
                      <div className="text-xs text-gray-500">Depends on conditions</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Model Diversity</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-emerald-600 font-bold">Unlimited options</span>
                      <div className="text-xs text-gray-500">Any age, ethnicity, style</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">Limited by availability</span>
                      <div className="text-xs text-gray-500">Booking conflicts</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Scalability</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                      <span className="text-emerald-600 font-bold">Instant scaling</span>
                      <div className="text-xs text-gray-500">100+ photos/week possible</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <span className="text-gray-700">Limited capacity</span>
                      <div className="text-xs text-gray-500">Scheduling bottlenecks</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-emerald-50">
                    <td className="px-6 py-4 text-gray-900 font-bold text-lg">Total Cost (10 shoots/year)</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-emerald-600 font-bold text-2xl">$990 - $7,990</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 font-bold text-2xl">$5,000 - $50,000+</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm italic">
              *Save $4,000 - $42,000 per year with AI jewelry photography while maintaining the same professional quality
            </p>
          </div>

          {/* Cost Savings Calculator */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 mb-16 border-2 border-emerald-200">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Your Annual Cost Savings
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Photography</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Photographer (10 shoots)</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Model fees (10 days)</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Studio rental (10 days)</span>
                    <span className="font-semibold">$3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment/props</span>
                    <span className="font-semibold">$1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revisions (extra)</span>
                    <span className="font-semibold">$1,000</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-3 flex justify-between text-lg font-bold">
                    <span>Annual Total</span>
                    <span className="text-red-600">$15,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-6 shadow-lg text-white">
                <h3 className="text-xl font-semibold mb-4">AI Photography (JewelryAI)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>10 photoshoots (Launch package)</span>
                    <span className="font-semibold">$4,990</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Model fees</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Studio rental</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment/props</span>
                    <span className="font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revisions</span>
                    <span className="font-semibold">$0 (unlimited)</span>
                  </div>
                  <div className="border-t-2 border-emerald-300 pt-3 flex justify-between text-lg font-bold">
                    <span>Annual Total</span>
                    <span className="text-2xl">$4,990</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="inline-block bg-white rounded-lg px-8 py-4 shadow-lg">
                <div className="text-sm text-gray-600 mb-1">Your Annual Savings</div>
                <div className="text-4xl font-bold text-emerald-600">$10,010</div>
                <div className="text-sm text-gray-500 mt-1">67% cost reduction</div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Common Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {comparisonFAQs.map((faq, index) => (
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

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Save 80-90% on Jewelry Photography?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Get the same photorealistic quality as traditional photography.
              Faster delivery. Unlimited AI models. No studio or model fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-white hover:text-emerald-600 transition-all duration-200 shadow-lg"
              >
                View Pricing
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg"
              >
                See Examples
              </a>
            </div>
          </div>

        </div>
      </section>
      <SchemaFAQ faqs={comparisonFAQs} />
    </>
  );
};

export default AIvsTraditional;
