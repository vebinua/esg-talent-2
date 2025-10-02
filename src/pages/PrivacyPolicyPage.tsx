import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../utils/structuredData';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

interface PrivacyPolicyPageProps {
  onPageChange: (page: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onPageChange }) => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Privacy Policy - ESG Talent Data Protection & Privacy"
        description="Learn how ESG Talent collects, uses, and protects your personal information. Our comprehensive privacy policy covers data handling, cookies, and your rights."
        keywords="privacy policy, data protection, GDPR compliance, cookie policy, personal information, data security"
        url="/privacy-policy"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: 'https://esg-talent.com/' },
          { name: 'Privacy Policy', url: 'https://esg-talent.com/privacy-policy' }
        ])}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Privacy Policy</h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  This privacy policy has been compiled to better serve those who are concerned with how their personal information is being used online. Personal information is information, whether true or not, about an individual who can be identified either from that information or from that information and other information to which the organization has or is likely to have access. It does not include information where your identity has been removed, which is known as anonymous data. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your personal information
                </p>
              </div>

              {/* Quick Guide */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4">Quick guide to contents</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                  <li>What personal information do we collect?</li>
                  <li>How do we collect information?</li>
                  <li>How do we use your information? How do we protect your information?</li>
                  <li>How long is your information retained?</li>
                  <li>Do we use 'cookies'?</li>
                  <li>Do we make automated decisions?</li>
                  <li>Third-party disclosure</li>
                  <li>Third-party links</li>
                  <li>Google</li>
                  <li>Transfer of personal information overseas</li>
                  <li>Changes to this privacy policy</li>
                  <li>Contacting us</li>
                  <li>Your legal rights</li>
                </ul>
              </div>

              {/* What personal information do we collect */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Eye className="h-8 w-8 mr-3" />
                  What personal information do we collect from the people who visit our blog, website or app?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When ordering or registering on our site, we may collect, use, store and transfer personal data about you. We have grouped these together as follows:
                </p>
                
                <div className="space-y-4 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Identity Information</strong> includes name, maiden name, username or similar identifier, country of residence, job title, company information and place of residence;
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Contact Information</strong> includes your physical address, email address and telephone number;
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Profile Information</strong> includes username and password, your interests, preferences, feedback and survey responses;
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Technical Information</strong> includes internet protocol (IP) address, your login data, your location, browser type and version, time zone setting and location, browser plug-in types and versions, operating system, platform and traffic data relating to services provided by us and used by you;
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Usage Information</strong> includes information about how you use our websites, platforms and services. It might also include a note or recording of support calls you make to us, live chats or similar interactions; and
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Marketing and Communications Information</strong> includes your preferences in receiving marketing materials from us and our third parties and your communications preferences.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data), nor do we collect any information about criminal convictions and offences.
                </p>
              </div>

              {/* How do we collect information */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4">How do we collect information?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We collect personal data as follows:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Interactions.</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You may give us your Identity and Contact Information by filling out a form or enter information on our website, for example when you register, subscribe or sign up for our promotions. This includes personal data you provide when you do any of the following:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                      <li>create an account on our website;</li>
                      <li>use our website;</li>
                      <li>subscribe to our newsletters or alerts;</li>
                      <li>request marketing materials to be sent to you;</li>
                      <li>enter a prize, competition, promotion or survey, or participate in an event or other marketing campaign organized by us; or</li>
                      <li>contact us – for example, if you get in touch to give us some feedback.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated technologies or interactions.</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As you interact with our website, we may automatically collect Technical Information about your equipment, browsing actions, patterns and other interactions.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may also receive personal data about you from various third parties and public sources as follows:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                      <li>LinkedIn</li>
                      <li>Facebook</li>
                      <li>Instagram</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How do we use your information */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Users className="h-8 w-8 mr-3" />
                  How do we use your information?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                  <li>to administer, operate, maintain and protect our business and website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data);</li>
                  <li>to personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested;</li>
                  <li>to improve our website in order to better serve you; and</li>
                  <li>for promotional purposes including sending you newsletters, marketing materials and special offers.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The legal basis for the processing of your personal information is that it is necessary for the performance of a contract with you, where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests, where we need to comply with a legal or regulatory obligation or where we obtain your consent to the processing of your personal information.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Change of purpose</h3>
                <p className="text-gray-700 leading-relaxed">
                  We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purposes. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us at info@esgtalent.com. If we need to use your personal information for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.
                </p>
              </div>

              {/* How do we protect your information */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Lock className="h-8 w-8 mr-3" />
                  How do we protect your information?
                </h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>We do not use vulnerability scanning and/or scanning to PCI standards.</li>
                  <li>An external PCI compliant payment gateway handles all CC transactions.</li>
                  <li>We use regular Malware Scanning.</li>
                  <li>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All transactions are processed through a gateway provider and are not stored or processed on our servers.
                </p>
              </div>

              {/* How long is your information retained */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <FileText className="h-8 w-8 mr-3" />
                  How long is your information retained?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will only hold your information for as long as is necessary for the purposes described in this Privacy Policy or in our terms and conditions, or for legal or business purposes. However, please be advised that we may retain some of your information after you cease to use our services, for instance if this is necessary to meet our legal obligations, such as retaining the information for tax and accounting purposes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When determining the relevant retention periods, we will take into account factors including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                  <li>our contractual obligations and rights in relation to the information involved;</li>
                  <li>legal obligation(s) under applicable law to retain data for a certain period of time;</li>
                  <li>our legitimate interest where we have carried out a balancing test;</li>
                  <li>statute of limitations under applicable law(s);</li>
                  <li>potential or actual disputes;</li>
                  <li>if you have made a request to have your information deleted; and</li>
                  <li>guidelines issued by the relevant data protection authorities.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  In some circumstances, we may anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
                </p>
              </div>

              {/* Do we use cookies */}
              <div id="cookies-section" className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Globe className="h-8 w-8 mr-3" />
                  Do we use 'cookies'?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not use cookies for tracking purposes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you turn cookies off, some of the features that make your site experience more efficient may not function properly that make your site experience more efficient and may not function properly.
                </p>
              </div>

              {/* Do we make automated decisions */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  Do we make automated decisions?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not envisage that any decisions will be made about you using automated means. However, we will notify you if this position changes.
                </p>
              </div>

              {/* Third-party disclosure */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <FileText className="h-8 w-8 mr-3" />
                  Third-party disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer to outside parties your personal information.
                </p>
              </div>

              {/* Third-party links */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Globe className="h-8 w-8 mr-3" />
                  Third-party links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
                </p>
              </div>

              {/* Google */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Globe className="h-8 w-8 mr-3" />
                  Google
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en" className="text-[#04548c] hover:underline" target="_blank" rel="noopener noreferrer">
                    https://support.google.com/adwordspolicy/answer/1316548?hl=en
                  </a>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have not enabled Google AdSense on our site but we may do so in the future.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If at any time you would like to unsubscribe from receiving future emails, you can email us at info@esg-talent.com and we will promptly remove you from ALL correspondence.
                </p>
              </div>

              {/* Transfer of personal information overseas */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Globe className="h-8 w-8 mr-3" />
                  Transfer of personal information overseas (e.g. from within the EEA to outside the EEA)?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When our partners who help us in the administration or operation of our organization are based in other locations, your information may be transferred outside of your country. When your personal data is transferred from within the EEA to outside the EEA, we will always ensure that there is a proper legal agreement or other legal basis that covers the data transfer. When we send your information from a country (not in the EEA) to outside of that country, we will make sure that your information is protected to at least the same standard as that which is required in the originating country, and will work with any such third parties to make sure that they have reasonable security arrangements in place. We may also transfer your information outside of your country in relation to business opportunities but we would only do this with your consent.
                </p>
              </div>

              {/* Changes to this Privacy Policy */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <FileText className="h-8 w-8 mr-3" />
                  Changes to this Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may change this Privacy Policy from time to time, to reflect changes at ESG Talent, or for legal or regulatory reasons. Unless we are unable to do so, we will give you reasonable notice of any changes to this Privacy Policy, which may be by notifying you via email and/or by posting an updated version on our website.
                </p>
              </div>

              {/* Contacting Us */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Mail className="h-8 w-8 mr-3" />
                  Contacting Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you would like a copy of some or all of the information we hold about you, please contact us at info@esg-talent.com.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We want to make sure that your information is accurate and up-to-date. You may ask us to correct or remove information you think is inaccurate by contacting us at info@esg-talent.com.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If there are any other questions regarding this privacy policy, you may contact us using the information below.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="space-y-3">
                    <div className="font-semibold text-gray-900">ESG Talent</div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#04548c] mr-3" />
                      <span className="text-gray-700">1 Coleman Street #10-10 The Adelphi<br />Singapore, 179803</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[#04548c] mr-3" />
                      <span className="text-gray-700">info@esg-talent.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Legal Rights */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#04548c] mb-4 flex items-center">
                  <Shield className="h-8 w-8 mr-3" />
                  Your Legal Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have various rights in relation to your personal information, including your right to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>request access to your personal information about you and to request the correction of any error in relation to your personal information or to object to the processing of your personal information;</li>
                  <li>obtain information about the use of your personal information, including: (i) the purposes for which your personal information is being used; (ii) the categories of your personal information being used; (iii) to whom your personal data has been or will be disclosed; (iv) where possible, the period for which your information will be obtained; (v) your right to require rectification or erasure of your personal information or restrict or object to its use; (vi) your right to lodge a complaint with the applicable supervisory authority; and (vii) whether your information is subject to any automated decision-making, including profiling;</li>
                  <li>have your personal information erased in certain situations, including where: (i) your personal information is no longer needed to be processed for the purposes for which it was collected; (ii) your personal information has been processed unlawfully; and (iii) erasure is required by applicable law;</li>
                  <li>restrict the processing of your personal information in certain situations, including where: (i) you are contesting the accuracy of your personal data, (ii) your data is being processed unlawfully you do not want your information erased; (iii) your personal information is no longer needed for the purposes for which you provided it but you require that information to help establish, exercise or defend legal claims;</li>
                  <li>receive your personal information in a structured, commonly used and machine-readable format and transmit that information to a third party;</li>
                  <li>lodge a complaint about the way your personal information is being handled or processed with the relevant data protection regulator; and/or</li>
                  <li>if relevant, to withdraw consent. If you do not provide your personal information, or withdraw your consent for the processing of your personal information, where such information is necessary for us to provide services to you, we will not be able to provide these services to you.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If you wish to exercise any of the rights set out above, please contact the DPO at info@esg-talent.com. You will not have to pay a fee to access your personal information (or to exercise any of the above rights). However, a reasonable fee may be charged if your request is clearly unfounded, repetitive or excessive. Alternatively, we may be entitled to refuse to act on the request.
                </p>
              </div>

              {/* ESG Talent Candidate Privacy Notice */}
              <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-[#04548c] flex items-center">
                    <Shield className="h-8 w-8 mr-3" />
                    ESG Talent – Candidate Privacy Notice
                  </h2>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    GDPR Compliant
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 italic">Last Updated: October 1, 2025</p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  At ESG Talent, we take your privacy seriously and are committed to protecting your personal data. This Privacy Notice explains how we collect, use, store, and share your data as part of our recruitment and executive search services.
                </p>

                <div className="space-y-6">
                  {/* 1. Who We Are */}
                  <div>
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">1. Who We Are</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      ESG Talent is a recruitment and executive search firm specializing in ESG and sustainability leadership. We operate globally, with headquarters in Singapore.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      If you have any questions regarding this notice, please contact us: <a href="mailto:info@esg-talent.com" className="text-[#04548c] hover:underline font-semibold">info@esg-talent.com</a>
                    </p>
                  </div>

                  {/* 2. What Data We Collect */}
                  <div>
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">2. What Data We Collect</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We may collect and process the following personal data:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Contact details (name, email, phone number, address)</li>
                      <li>Curriculum Vitae (CV), work history, skills, and qualifications</li>
                      <li>References, certifications, and professional achievements</li>
                      <li>Compensation and benefits details (only where voluntarily provided)</li>
                      <li>Interview notes and assessments</li>
                    </ul>
                  </div>

                  {/* 3. How We Use Your Data */}
                  <div>
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">3. How We Use Your Data</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Your data will only be used for recruitment purposes, including:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Matching your profile with suitable opportunities</li>
                      <li>Sharing your CV and relevant details with potential clients</li>
                      <li>Communicating with you about job opportunities, interviews, or career updates</li>
                      <li>Maintaining candidate records in our secure database</li>
                    </ul>
                  </div>

                  {/* 4. Who We Share Data With */}
                  <div>
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">4. Who We Share Data With</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We may share your data with:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                      <li>ESG Talent's clients for the purpose of considering you for a role</li>
                      <li>Trusted third-party service providers (e.g., recruitment platforms, assessment providers)</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      We will never sell your data.
                    </p>
                  </div>

                  {/* 5. How Long We Keep Your Data */}
                  <div>
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">5. How Long We Keep Your Data</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We will store your personal data for <strong>24 months</strong> unless:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>You withdraw your consent earlier, or</li>
                      <li>There is a legal requirement to retain it longer.</li>
                    </ul>
                  </div>

                  {/* 6. Your Rights (Under GDPR) */}
                  <div className="bg-white p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">6. Your Rights (Under GDPR)</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
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
                      To exercise these rights, please contact us at <a href="mailto:info@esg-talent.com" className="text-[#04548c] hover:underline font-semibold">info@esg-talent.com</a>
                    </p>
                  </div>

                  {/* 7. Data Security */}
                  <div>
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">7. Data Security</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We use appropriate technical and organizational measures to ensure your personal data is secure and protected against unauthorized access, alteration, or disclosure.
                    </p>
                  </div>

                  {/* 8. Updates to This Notice */}
                  <div>
                    <h3 className="text-xl font-bold text-[#04548c] mb-3">8. Updates to This Notice</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may update this Privacy Notice from time to time. Any updates will be posted on our website or shared with you directly.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage;