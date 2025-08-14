import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, DollarSign, Clock, CheckCircle, AlertTriangle, Mail, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundsPolicy = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Our Satisfaction Guarantee',
      content: [
        {
          subtitle: '100% Satisfaction Promise',
          text: 'We stand behind the quality of our AI-generated jewelry photography. If you\'re not completely satisfied with the final results, we\'ll work with you to make it right or provide a full refund.'
        },
        {
          subtitle: 'Quality Standards',
          text: 'Our AI maintains 95% accuracy in preserving jewelry details. If the delivered content doesn\'t meet our published quality standards, you\'re eligible for unlimited revisions or a full refund.'
        },
        {
          subtitle: 'First Look Package Guarantee',
          text: 'Try our services risk-free with our $99 First Look package. If you\'re not impressed with the quality, we\'ll refund your payment within 7 days of delivery.'
        }
      ]
    },
    {
      icon: Clock,
      title: 'Refund Timeframes and Process',
      content: [
        {
          subtitle: 'Refund Request Window',
          text: 'You can request a refund within 14 days of receiving your final deliverables. For First Look packages, this extends to 30 days to give you ample time to evaluate our quality.'
        },
        {
          subtitle: 'Processing Time',
          text: 'Once approved, refunds are processed within 3-5 business days. The time for funds to appear in your account depends on your payment method and financial institution.'
        },
        {
          subtitle: 'How to Request a Refund',
          text: 'Contact our support team via your dedicated project channel (Slack/WhatsApp) or email support@jewelryai.app with your order details and reason for the refund request.'
        },
        {
          subtitle: 'Refund Method',
          text: 'Refunds are issued to the original payment method used for the purchase. We cannot process refunds to different payment methods or accounts.'
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Refund Eligibility and Conditions',
      content: [
        {
          subtitle: 'Eligible Scenarios',
          text: 'Full refunds are available for: quality not meeting our 95% accuracy standard, failure to deliver within promised timeframes, technical issues preventing proper service delivery, or dissatisfaction with First Look package results.'
        },
        {
          subtitle: 'Partial Refunds',
          text: 'Partial refunds may be offered for: late delivery beyond promised timeframes, minor quality issues that don\'t warrant full refund, or if you\'re satisfied with only part of your order deliverables.'
        },
        {
          subtitle: 'Non-Refundable Situations',
          text: 'Refunds cannot be provided after: the 14-day refund window expires (30 days for First Look), you\'ve used the content for commercial purposes, or if you\'ve requested changes beyond our standard revision policy.'
        },
        {
          subtitle: 'Custom Package Considerations',
          text: 'For custom enterprise packages, refund terms are outlined in your specific service agreement and may differ from standard policy terms.'
        }
      ]
    },
    {
      icon: RefreshCw,
      title: 'Cancellation Policy',
      content: [
        {
          subtitle: 'Before Work Begins',
          text: 'You can cancel your order for a full refund anytime before we begin processing your jewelry images. Once our AI team starts working on your project, cancellation terms change.'
        },
        {
          subtitle: 'During Production',
          text: 'If you need to cancel while work is in progress, we\'ll provide a partial refund based on the percentage of work completed. You\'ll receive any completed deliverables.'
        },
        {
          subtitle: 'Subscription Services',
          text: 'For any future subscription-based services, you can cancel anytime. You\'ll retain access until the end of your current billing period, with no refund for the remaining time.'
        },
        {
          subtitle: 'Emergency Cancellations',
          text: 'In case of emergencies or unforeseen circumstances, contact us immediately. We\'ll work with you to find a fair solution that considers both your situation and work already completed.'
        }
      ]
    },
    {
      icon: DollarSign,
      title: 'Payment and Billing',
      content: [
        {
          subtitle: 'Payment Processing',
          text: 'All payments are processed securely through industry-standard payment processors. We accept major credit cards, debit cards, and other payment methods as displayed at checkout.'
        },
        {
          subtitle: 'Billing Disputes',
          text: 'If you notice any billing errors or unauthorized charges, contact us immediately. We\'ll investigate and resolve billing disputes within 5 business days.'
        },
        {
          subtitle: 'Failed Payments',
          text: 'If a payment fails, we\'ll notify you immediately and pause work on your project until payment is resolved. No additional fees are charged for payment retries.'
        },
        {
          subtitle: 'Currency and Taxes',
          text: 'All prices are listed in USD. Applicable taxes will be calculated and displayed at checkout based on your billing location. International customers may incur additional fees from their payment provider.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Special Circumstances',
      content: [
        {
          subtitle: 'Technical Issues',
          text: 'If technical problems on our end prevent service delivery or significantly impact quality, you\'re entitled to a full refund plus a credit for future services.'
        },
        {
          subtitle: 'Force Majeure',
          text: 'In cases of natural disasters, pandemics, or other events beyond our control that prevent service delivery, we\'ll work with you to reschedule or provide appropriate refunds.'
        },
        {
          subtitle: 'Data Loss Protection',
          text: 'Your jewelry images are backed up securely. In the unlikely event of data loss, we\'ll provide a full refund and work to recover your images from our backup systems.'
        },
        {
          subtitle: 'Goodwill Gestures',
          text: 'Even outside standard refund conditions, we may offer goodwill refunds or credits for exceptional circumstances. Each case is reviewed individually by our customer success team.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Cancellation & Refunds - Jewelry AI | 100% Satisfaction Guarantee"
        description="Our comprehensive refund and cancellation policy. 100% satisfaction guarantee with flexible refund options for all Jewelry AI photography services."
        keywords="refund policy, cancellation policy, jewelry AI refunds, satisfaction guarantee, money back guarantee"
        canonicalUrl="https://jewelryai.app/refunds"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 to-yellow-50/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-amber-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 group transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cancellation & Refunds
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in the quality of our AI jewelry photography. If you're not completely satisfied, 
              we'll make it right with our comprehensive satisfaction guarantee.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise to You</h2>
            <p className="text-gray-700 leading-relaxed">
              At Jewelry AI, your satisfaction is our top priority. We're confident in our AI technology's ability 
              to create stunning, accurate jewelry photography. However, we understand that every project is unique, 
              and we want you to feel completely confident in choosing our services. That's why we offer flexible 
              refund and cancellation policies designed to protect your investment while ensuring you receive 
              exceptional results.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-8">
                  {/* Section Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-4 border-amber-200 pl-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact for Refunds */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need to Request a Refund?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our customer success team is here to help resolve any concerns. Before requesting a refund, 
              let's discuss how we can improve your results. Often, a simple revision can address your concerns 
              and deliver the perfect outcome you're looking for.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                <h3 className="font-semibold text-gray-900 mb-2">Quick Resolution</h3>
                <p className="text-gray-600 text-sm mb-4">Contact us through your project channel for fastest response</p>
                <div className="text-sm text-gray-500">Response time: Within 2 hours</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                <h3 className="font-semibold text-gray-900 mb-2">Formal Request</h3>
                <p className="text-gray-600 text-sm mb-4">Email our support team with your order details</p>
                <div className="text-sm text-gray-500">Response time: Within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About Refunds or Cancellations?</h3>
              <p className="text-gray-600 mb-6">
                Our customer success team is ready to help you understand our policies 
                and find the best solution for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@jewelryai.app"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Support Team</span>
                </a>
                <Link 
                  to="/"
                  className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundsPolicy;