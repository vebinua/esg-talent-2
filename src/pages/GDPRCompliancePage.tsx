import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Mail, Phone, MapPin, Globe, Target, Calendar, Building } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

interface GDPRCompliancePageProps {
  onPageChange: (page: string) => void;
}

const GDPRCompliancePage: React.FC<GDPRCompliancePageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="GDPR Candidate Privacy Notice - ESG Talent Data Protection"
        description="ESG Talent's GDPR compliant candidate privacy notice. Learn how we collect, use, and protect your personal data in our recruitment and executive search services."
        keywords="GDPR compliance, candidate privacy notice, data protection, recruitment privacy, ESG Talent privacy, personal data protection"
        url="/privacy-policy/gdpr"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: 'https://esg-talent.com/' },
          { name: 'Privacy Policy', url: 'https://esg-talent.com/privacy-policy' },
          { name: 'GDPR Compliance', url: 'https://esg-talent.com/privacy-policy/gdpr' }
        ])}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                GDPR Compliant
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Candidate Privacy Notice
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              How ESG Talent collects, uses, and protects your personal data in our recruitment services
            </p>
          </div>
        </div>
      </section>

      {/* GDPR Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <button
              onClick={() => onPageChange('privacy-policy')}
              className="text-[#04548c] hover:text-blue-700 font-semibold mb-8 flex items-center transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Privacy Policy
            </button>
          </ScrollAnimationWrapper>

          <div className="prose prose-lg max-w-none">
            
            {/* Header */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#04548c] mb-4">
                  ESG Talent – Candidate Privacy Notice
                </h2>
                <div className="bg-gradient-to-r from-blue-600 to-[#04548c] text-white px-6 py-3 rounded-full inline-flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="font-semibold">GDPR Compliant</span>
                </div>
                <div className="flex items-center justify-center mt-4 text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Last Updated: October 1, 2025</span>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Introduction */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At ESG Talent, we take your privacy seriously and are committed to protecting your personal data. 
                  This Privacy Notice explains how we collect, use, store, and share your data as part of our 
                  recruitment and executive search services.
                </p>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 1: Who We Are */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Building className="h-6 w-6 mr-3" />
                  1. Who We Are
                </h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ESG Talent is a recruitment and executive search firm specializing in ESG and sustainability 
                    leadership. We operate globally, with headquarters in Singapore.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#04548c]">
                    <p className="text-gray-700">
                      If you have any questions regarding this notice, please contact us:{' '}
                      <a 
                        href="mailto:info@esg-talent.com" 
                        className="text-[#04548c] hover:text-blue-700 font-semibold"
                      >
                        info@esg-talent.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 2: What Data We Collect */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Eye className="h-6 w-6 mr-3" />
                  2. What Data We Collect
                </h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect and process the following personal data:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Contact details (name, email, phone number, address)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Curriculum Vitae (CV), work history, skills, and qualifications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">References, certifications, and professional achievements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Compensation and benefits details (only where voluntarily provided)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Interview notes and assessments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 3: How We Use Your Data */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Target className="h-6 w-6 mr-3" />
                  3. How We Use Your Data
                </h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your data will only be used for recruitment purposes, including:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Matching your profile with suitable opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Sharing your CV and relevant details with potential clients</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Communicating with you about job opportunities, interviews, or career updates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Maintaining candidate records in our secure database</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 4: Who We Share Data With */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  4. Who We Share Data With
                </h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your data with:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">ESG Talent's clients for the purpose of considering you for a role</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Trusted third-party service providers (e.g., recruitment platforms, assessment providers)</span>
                    </li>
                  </ul>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-gray-700 font-semibold">
                      We will never sell your data.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 5: How Long We Keep Your Data */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-3" />
                  5. How Long We Keep Your Data
                </h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We will store your personal data for <strong>24 months</strong> unless:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">You withdraw your consent earlier, or</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">There is a legal requirement to retain it longer.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 6: Your Rights */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-3" />
                  6. Your Rights (Under GDPR)
                </h3>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Access the personal data we hold about you</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Request correction of inaccurate or incomplete data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Request deletion of your data at any time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Withdraw consent for processing at any time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[#04548c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Request data portability (transfer of your data)</span>
                    </li>
                  </ul>
                  <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-[#04548c]">
                    <p className="text-gray-700">
                      To exercise these rights, please contact us at{' '}
                      <a 
                        href="mailto:info@esg-talent.com" 
                        className="text-[#04548c] hover:text-blue-700 font-semibold"
                      >
                        info@esg-talent.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 7: Data Security */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-3" />
                  7. Data Security
                </h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    We use appropriate technical and organizational measures to ensure your personal data is 
                    secure and protected against unauthorized access, alteration, or disclosure.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Section 8: Updates to This Notice */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-3" />
                  8. Updates to This Notice
                </h3>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Notice from time to time. Any updates will be posted on our 
                    website or shared with you directly.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Section */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="bg-gradient-to-br from-[#04548c] to-[#023d67] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Questions About Your Data?</h3>
                <p className="text-blue-200 mb-6">
                  If you have any questions about how we handle your personal data or want to exercise your rights, 
                  we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@esg-talent.com"
                    className="bg-white text-[#04548c] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Us
                  </a>
                  <button
                    onClick={() => onPageChange('privacy-policy')}
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#04548c] transition-all duration-300"
                  >
                    Back to Privacy Policy
                  </button>
                </div>
              </div>
            </ScrollAnimationWrapper>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRCompliancePage;