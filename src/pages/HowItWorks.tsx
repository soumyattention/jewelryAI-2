import React from 'react';
import { Upload, Sparkles, Image, Download, Check, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload Your Jewelry Photos",
      description: "Simply upload clear photos of your jewelry pieces. No special equipment needed - smartphone photos work great. Our AI analyzes your jewelry's unique features, materials, and style.",
      icon: Upload,
      details: [
        "Upload 1-50 jewelry photos at once",
        "Accepted formats: JPG, PNG, HEIC",
        "No professional camera required",
        "AI automatically removes backgrounds",
        "Instant upload confirmation"
      ],
      time: "2 minutes"
    },
    {
      number: 2,
      title: "AI Analyzes & Understands Your Jewelry",
      description: "Our advanced AI examines every detail of your jewelry - gemstones, metals, design, style. It understands what makes your piece unique and how to showcase it perfectly.",
      icon: Sparkles,
      details: [
        "AI identifies jewelry type (ring, necklace, earring, etc.)",
        "Detects materials (gold, silver, diamond, gemstones)",
        "Analyzes style (luxury, minimalist, vintage, modern)",
        "Understands lighting requirements",
        "Maps optimal model positioning"
      ],
      time: "Automated (instant)"
    },
    {
      number: 3,
      title: "Choose Your AI Model & Style",
      description: "Select from our library of photorealistic AI models. Choose the pose, background, lighting style, and aesthetic that matches your brand. Want editorial? Vogue-style? E-commerce clean? We've got it all.",
      icon: Image,
      details: [
        "100+ premium AI models (diverse ethnicities, ages, styles)",
        "Editorial styles: Vogue, Harper's Bazaar, minimalist, luxury",
        "E-commerce styles: white background, lifestyle, on-model",
        "Custom poses and hand positions",
        "Background options: studio, outdoor, lifestyle, abstract",
        "Upload reference images for custom styles"
      ],
      time: "5 minutes"
    },
    {
      number: 4,
      title: "Receive Professional Photos",
      description: "Get photorealistic 4K images that are indistinguishable from traditional photography. All photos include full commercial licensing - use them anywhere without restrictions.",
      icon: Download,
      details: [
        "4K resolution images (3840x2160px)",
        "Multiple file formats: JPG, PNG, TIFF, RAW",
        "Unlimited revisions on premium packages",
        "Full commercial license included",
        "Cloud download + direct links",
        "Social media optimized versions included"
      ],
      time: "2-7 days"
    }
  ];

  const faqs = [
    {
      question: "How does AI jewelry photography actually work?",
      answer: "Our AI uses advanced computer vision and generative AI to analyze your jewelry photos, understand the materials and style, then creates photorealistic images with virtual models in professional settings. The AI is trained on millions of professional jewelry photos and can replicate the same lighting, composition, and quality standards as traditional photography."
    },
    {
      question: "What kind of photos do I need to upload?",
      answer: "Any clear photo of your jewelry works - even smartphone photos! The AI can handle various angles and backgrounds. For best results, upload well-lit photos showing the jewelry clearly. Our AI automatically removes backgrounds and enhances the image quality."
    },
    {
      question: "How long does the entire process take?",
      answer: "Uploading takes 2 minutes. Choosing your model and style takes about 5 minutes. After you submit, you'll receive professional photos in 2-7 days depending on your package (First Look: 7 days, Launch: 3-5 days, Collection: 2-3 days). Rush delivery available for urgent projects."
    },
    {
      question: "Can I customize the model, pose, and background?",
      answer: "Absolutely! Premium packages (Launch and Collection) include full customization. Choose from 100+ AI models, specify exact poses, upload reference images, select backgrounds (studio, outdoor, lifestyle), and define the aesthetic (editorial, e-commerce, luxury, minimalist). You can even upload your own reference model for brand consistency."
    },
    {
      question: "What if I don't like the results?",
      answer: "Premium packages include unlimited revisions - we'll keep refining until you're 100% satisfied. You can request different models, poses, backgrounds, or lighting. First Look package includes 1 revision. We also offer a satisfaction guarantee - if we can't meet your expectations, we'll refund your payment."
    },
    {
      question: "Is AI photography really as good as hiring a photographer?",
      answer: "Yes. Our AI-generated photos are photorealistic 4K images indistinguishable from traditional photography. The quality is identical, but AI is 80-90% cheaper, 5-10x faster, and gives you unlimited model variety without model fees, studio costs, or scheduling hassles. Plus you get unlimited revisions on premium packages."
    },
    {
      question: "What file formats and resolution do I get?",
      answer: "All packages include high-resolution images. First Look: 1080p in JPG and PNG. Launch: 4K in JPG, PNG, and TIFF. Collection: 4K in JPG, PNG, TIFF, and RAW. All images are optimized for both print and web use."
    },
    {
      question: "Can I use these photos for commercial purposes?",
      answer: "Yes! All packages include full commercial licensing. You own the photos and can use them for e-commerce websites, social media, advertising, print catalogs, email marketing, and any other commercial purpose without restrictions or royalty fees."
    }
  ];

  return (
    <>
      <SEOHead
        title="How AI Jewelry Photography Works | 4-Step Process | JewelryAI"
        description="Learn how AI jewelry photography works: 1) Upload jewelry photos, 2) AI analyzes materials & style, 3) Choose AI model & setting, 4) Receive 4K professional photos in 2-7 days. No photographer, model, or studio needed. 80-90% cheaper than traditional photography. Full commercial license included. Step-by-step guide with examples."
        keywords="how AI jewelry photography works, AI jewelry photography process, how to use AI for jewelry photos, AI jewelry photoshoot process, virtual jewelry model process, AI editorial jewelry how to, put jewelry on AI model tutorial, jewelry AI photography guide, AI jewelry photography steps"
        canonicalUrl="https://jewelryai.app/how-it-works"
      />
      <Header />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How AI Jewelry Photography Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get professional jewelry photos with AI models in 4 simple steps.
              No photographer, no studio, no model hiring. Just upload, customize, and receive.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-16 top-32 w-0.5 h-32 bg-gradient-to-b from-emerald-500 to-emerald-300" />
                )}

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg relative">
                      <step.icon className="w-12 h-12 text-white" />
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                        <span className="text-2xl font-bold text-emerald-600">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                      <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>

                    <p className="text-lg text-gray-700 mb-6">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Summary */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 mb-16 border-2 border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Total Time: 2-7 Days
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2 min</div>
                <div className="text-sm text-gray-600">Upload Photos</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Instant</div>
                <div className="text-sm text-gray-600">AI Analysis</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5 min</div>
                <div className="text-sm text-gray-600">Choose Style</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2-7 days</div>
                <div className="text-sm text-gray-600">Receive Photos</div>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              AI Process vs Traditional Photography Process
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* AI Process */}
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  AI Photography (JewelryAI)
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Step 1: Upload (2 min)</div>
                      <div className="text-sm text-emerald-50">Upload from anywhere, anytime</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Step 2: AI Analysis (Instant)</div>
                      <div className="text-sm text-emerald-50">Automated, no human needed</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Step 3: Customize (5 min)</div>
                      <div className="text-sm text-emerald-50">100+ models, unlimited styles</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Step 4: Receive (2-7 days)</div>
                      <div className="text-sm text-emerald-50">Digital delivery, instant download</div>
                    </div>
                  </div>
                  <div className="border-t border-emerald-400 pt-4 mt-6">
                    <div className="text-2xl font-bold">Total: 2-7 Days</div>
                    <div className="text-sm text-emerald-50">Cost: $99-$799</div>
                  </div>
                </div>
              </div>

              {/* Traditional Process */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-300">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Traditional Photography
                </h4>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="font-semibold">Step 1: Find Photographer (3-7 days)</div>
                      <div className="text-sm text-gray-500">Research, contact, negotiate</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="font-semibold">Step 2: Hire Model (3-7 days)</div>
                      <div className="text-sm text-gray-500">Find, book, coordinate schedules</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="font-semibold">Step 3: Book Studio (2-5 days)</div>
                      <div className="text-sm text-gray-500">Find availability, reserve, pay deposit</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="font-semibold">Step 4: Photoshoot Day (1 day)</div>
                      <div className="text-sm text-gray-500">Travel, setup, shoot, breakdown</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="font-semibold">Step 5: Editing (5-10 days)</div>
                      <div className="text-sm text-gray-500">Wait for photographer to edit</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-1 flex-shrink-0 text-red-500">✗</div>
                    <div>
                      <div className="font-semibold">Step 6: Revisions (3-7 days)</div>
                      <div className="text-sm text-gray-500">Request changes, wait again</div>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 pt-4 mt-6">
                    <div className="text-2xl font-bold text-gray-900">Total: 2-4 Weeks</div>
                    <div className="text-sm text-gray-500">Cost: $500-$5,000+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h3>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Upload your jewelry photos and get professional AI-generated images in 2-7 days.
              No photographer, no model fees, no studio costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-emerald-600 bg-white hover:bg-emerald-50 transition-all duration-200 shadow-lg gap-2"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-white/10 transition-all duration-200 gap-2"
              >
                See Examples
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HowItWorks;
