import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you use our services, we may collect personal information such as your name, email address, phone number, and billing information. This information is collected when you create an account, place an order, or contact our support team.'
        },
        {
          subtitle: 'Jewelry Images and Content',
          text: 'We collect the jewelry images you upload to our platform for AI processing. These images are used solely for the purpose of creating your requested AI-generated content and are handled with the utmost care and security.'
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, time spent on pages, and other analytics data to improve our services.'
        }
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'Your personal information and uploaded images are used to provide our AI jewelry photography services, process your orders, and deliver the final content to you.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to communicate with you about your orders, provide customer support, send important updates about our services, and respond to your inquiries.'
        },
        {
          subtitle: 'Service Improvement',
          text: 'We analyze usage data to understand how our services are used, identify areas for improvement, and develop new features that better serve our customers.'
        },
        {
          subtitle: 'AI Model Training',
          text: 'With your explicit consent, we may use anonymized and aggregated data to improve our AI models. Individual jewelry images are never used for training without explicit permission.'
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Security and Protection',
      content: [
        {
          subtitle: 'Encryption and Security',
          text: 'All data transmission is encrypted using industry-standard SSL/TLS protocols. Your jewelry images and personal information are stored on secure servers with multiple layers of protection including firewalls, access controls, and regular security audits.'
        },
        {
          subtitle: 'Access Controls',
          text: 'Access to your personal information and uploaded content is strictly limited to authorized personnel who need it to provide our services. All team members are bound by confidentiality agreements.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information and uploaded images only as long as necessary to provide our services and fulfill legal obligations. You can request deletion of your data at any time.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing and Disclosure',
      content: [
        {
          subtitle: 'Third-Party Services',
          text: 'We may share limited information with trusted third-party service providers who assist us in operating our website, processing payments, or delivering our services. These providers are contractually bound to protect your information.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, but only under the same privacy protections outlined in this policy.'
        },
        {
          subtitle: 'No Sale of Personal Data',
          text: 'We do not sell, rent, or trade your personal information or jewelry images to third parties for marketing purposes.'
        }
      ]
    },
    {
      icon: Globe,
      title: 'Your Rights and Choices',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information at any time. You can do this through your account settings or by contacting our support team.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You can request deletion of your personal information and uploaded content. We will process such requests promptly, subject to any legal obligations to retain certain information.'
        },
        {
          subtitle: 'Marketing Communications',
          text: 'You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or updating your communication preferences in your account.'
        },
        {
          subtitle: 'Cookie Preferences',
          text: 'You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect the functionality of our website.'
        }
      ]
    },
    {
      icon: Mail,
      title: 'Contact Information',
      content: [
        {
          subtitle: 'Privacy Questions',
          text: 'If you have any questions about this Privacy Policy or our data practices, please contact our privacy team at privacy@jewelryai.app or through our website contact form.'
        },
        {
          subtitle: 'Data Protection Officer',
          text: 'For EU residents, you can contact our Data Protection Officer for any privacy-related concerns or to exercise your rights under GDPR.'
        },
        {
          subtitle: 'Response Time',
          text: 'We aim to respond to all privacy-related inquiries within 48 hours during business days.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Privacy Policy - Jewelry AI | Data Protection & Security"
        description="Learn how Jewelry AI protects your jewelry images and personal information. Our comprehensive privacy policy covers data security, storage, and your rights."
        keywords="privacy policy, data protection, jewelry AI privacy, image security, GDPR compliance"
        canonicalUrl="https://jewelryai.app/privacy"
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Jewelry AI services.
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
          <div className="mb-16 p-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              At Jewelry AI, we understand that your jewelry images and personal information are valuable and sensitive. 
              We are committed to protecting your privacy and being transparent about how we handle your data. 
              This Privacy Policy explains our practices regarding the collection, use, and protection of your information 
              when you use our AI-powered jewelry photography services.
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

          {/* Updates and Changes */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. When we make significant changes, 
              we will notify you by email or through a prominent notice on our website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to review this Privacy Policy periodically to stay informed about 
              how we protect your information. Your continued use of our services after any changes 
              indicates your acceptance of the updated policy.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About This Policy?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about our Privacy Policy or data practices, 
                we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@jewelryai.app"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Privacy Team</span>
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

export default PrivacyPolicy;