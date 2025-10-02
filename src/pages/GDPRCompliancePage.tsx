import React from 'react';
import { ArrowLeft, Shield, User, Database, Share2, Clock, Eye, Lock, FileText, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

interface GDPRCompliancePageProps {
  onPageChange: (page: string) => void;
}

const GDPRCompliancePage: React.FC<GDPRCompliancePageProps> = ({ onPageChange }) => {
  const sections = [
    {
      icon: User,
      title: "1. Who We Are",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            ESG Talent is a recruitment and executive search firm specializing in ESG and sustainability leadership. We operate globally, with headquarters in Singapore.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding this notice, please contact us: <a href="mailto:info@esg-talent.com" className="text-[#04548c] hover:underline font-medium">info@esg-talent.com</a>
          </p>
        </div>
      )
    },
    {
      icon: Database,
      title: "2. What Data We Collect",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect and process the following personal data:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Contact details (name, email, phone number, address)</li>
            <li>Curriculum Vitae (CV), work history, skills, and qualifications</li>
            <li>References, certifications, and professional achievements</li>
            <li>Compensation and benefits details (only where voluntarily provided)</li>
            <li>Interview notes and assessments</li>
          </ul>
        </div>
      )
    },
    {
      icon: Eye,
      title: "3. How We Use Your Data",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your data will only be used for recruitment purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Matching your profile with suitable opportunities</li>
            <li>Sharing your CV and relevant details with potential clients</li>
            <li>Communicating with you about job opportunities, interviews, or career updates</li>
            <li>Maintaining candidate records in our secure database</li>
          </ul>
        </div>
      )
    },
    {
      icon: Share2,
      title: "4. Who We Share Data With",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may share your data with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>ESG Talent's clients for the purpose of considering you for a role</li>
            <li>Trusted third-party service providers (e.g., recruitment platforms, assessment providers)</li>
          </ul>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-semibold">
              We will never sell your data.
            </p>
          </div>
        </div>
      )
    },
    {
      icon: Clock,
      title: "5. How Long We Keep Your Data",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We will store your personal data for <strong>24 months</strong> unless:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You withdraw your consent earlier, or</li>
            <li>There is a legal requirement to retain it longer.</li>
          </ul>
        </div>
      )
    },
    {
      icon: Shield,
      title: "6. Your Rights (Under GDPR)",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your data at any time</li>
            <li>Withdraw consent for processing at any time</li>
            <li>Request data portability (transfer of your data)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            To exercise these rights, please contact us at <a href="mailto:info@esg-talent.com" className="text-[#04548c] hover:underline font-medium">info@esg-talent.com</a>
          </p>
        </div>
      )
    },
    {
      icon: Lock,
      title: "7. Data Security",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed">
            We use appropriate technical and organizational measures to ensure your personal data is secure and protected against unauthorized access, alteration, or disclosure.
          </p>
        </div>
      )
    },
    {
      icon: FileText,
      title: "8. Updates to This Notice",
      content: (
        <div>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Notice from time to time. Any updates will be posted on our website or shared with you directly.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="GDPR Compliance - Candidate Privacy Notice | ESG Talent"
        description="ESG Talent's GDPR compliant candidate privacy notice. Learn how we collect, use, store, and protect your personal data in our recruitment process."
        keywords="GDPR compliance, candidate privacy notice, data protection, recruitment privacy, personal data, ESG Talent privacy"
        url="/privacy-policy/gdpr"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: 'https://esg-talent.com/' },
          { name: 'Privacy Policy', url: 'https://esg-talent.com/privacy-policy' },
          { name: 'GDPR Compliance', url: 'https://esg-talent.com/privacy-policy/gdpr' }
        ])}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">GDPR Compliance</h1>
            <h2 className="text-2xl text-blue-100 mb-4">Candidate Privacy Notice</h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Last Updated: October 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onPageChange('privacy-policy')}
            className="text-[#04548c] hover:text-blue-700 font-semibold flex items-center transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Privacy Policy
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                At ESG Talent, we take your privacy seriously and are committed to protecting your personal data. 
                This Privacy Notice explains how we collect, use, store, and share your data as part of our recruitment 
                and executive search services.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* GDPR Sections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#04548c] mb-4">
                        {section.title}
                      </h3>
                      <div className="prose prose-lg max-w-none">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-[#04548c] to-[#023d67]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <Mail className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Your Data?
              </h2>
              <p className="text-xl text-blue-200 mb-6">
                Contact us for any questions regarding your personal data or to exercise your GDPR rights.
              </p>
              <a
                href="mailto:info@esg-talent.com"
                className="bg-[#43ab04] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#369003] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default GDPRCompliancePage;