import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send, Clock, Globe, Facebook, Instagram } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { trackESGEvent, trackServiceInquiry } from '../utils/analytics';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onPageChange }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', contactForm);
    
    // Track the contact form submission
    trackESGEvent.contactForm('website_form');
    trackServiceInquiry(contactForm.service || 'general_inquiry');
    
    alert('Thank you for your inquiry! We will respond within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with us professionally on LinkedIn',
      value: 'ESG Talent Company',
      action: 'https://www.linkedin.com/company/esgtalent/',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      description: 'Quick questions and instant messaging',
      value: 'Chat with us instantly',
      action: 'https://wa.me/',
    }
  ];

  const officeInfo = [
    {
      icon: Globe,
      title: 'Global Headquarters',
      location: 'New York, NY',
      description: 'Primary hub for North American operations'
    },
    {
      icon: MapPin,
      title: 'European Office',
      location: 'London, UK',
      description: 'Serving European and EMEA markets'
    },
    {
      icon: MapPin,
      title: 'Asia-Pacific Office',
      location: 'Singapore',
      description: 'Regional center for APAC operations'
    }
  ];

  const services = [
    'Executive Search',
    'Permanent Recruitment',
    'ESG Business Advisory',
    'Talent Consulting',
    'Market Intelligence',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact ESG Talent | International ESG Recruitment Specialist"
        description="Ready to hire ESG leaders? Contact our international ESG recruitment specialists. Get expert ESG leadership hiring advice and discover our global sustainability talent hub."
        keywords="contact ESG talent, international ESG recruitment specialist, ESG leadership hiring, global sustainability talent hub, ESG talent marketplace, hire ESG leaders consultation"
        url="/contact"
        structuredData={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'Connect With Us', url: 'https://esg-talent.com/contact' }
          ])
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Connect With Us.png" 
            alt="Connect With Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04548c]/80 via-[#023d67]/70 to-[#04548c]/80"></div>
        </div>
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Connect With Us</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
             Ready to transform your ESG strategy? Let's start the conversation about your talent and advisory needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">Send Us a Message</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your ESG talent needs or advisory requirements. We'll get back to you with a tailored solution
            </p>
          </div>
          </ScrollAnimationWrapper>

          {/* Quick Contact Options */}
          <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-2xl shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  value={contactForm.service}
                  onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                  aria-describedby="service-help"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <div id="service-help" className="sr-only">Choose the service you're most interested in</div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message&nbsp;*
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  placeholder="Please describe your ESG talent needs, timeline, and any specific requirements..."
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm resize-none"
                  aria-describedby="message-help"
                ></textarea>
                <div id="message-help" className="sr-only">Provide details about your ESG talent requirements</div>
              </div>

            <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#43ab04] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#369003] hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </div>

            </form>
          </div>
          </ScrollAnimationWrapper>

          {/* Alternative Contact Methods */}
          <ScrollAnimationWrapper animation="fade-up" delay={300}>
          <div className="mt-8 text-center">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect With Us</h3>
              <p className="text-gray-600">Choose your preferred way to get in touch with our&nbsp;team</p>
            </div>
            
            {/* Direct Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2 text-[#04548c]" />
                  Email Us
                </h4>
                <a
                  href="mailto:info@esg-talent.com"
                  className="text-[#04548c] hover:text-blue-700 font-medium transition-colors duration-200"
                  onClick={() => trackESGEvent.contactClick('email')}
                >
                  info@esg-talent.com
                </a>
                <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                  WhatsApp&nbsp;Chat
                </h4>
                <a
                  href="https://wa.me/38978436551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1da851] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center text-sm"
                  onClick={() => trackESGEvent.contactClick('whatsapp')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat with Us
                </a>
                <p className="text-gray-600 text-sm mt-2">Instant messaging support</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <h4 className="text-base font-semibold text-gray-900 mb-3">Follow Us On Social Media</h4>
              <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/esgtalent/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-1 bg-white border-2 border-[#0077b5] px-4 py-3 rounded-xl font-semibold hover:bg-[#0077b5] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg group"
                aria-label="Follow us on LinkedIn"
                onClick={() => trackESGEvent.socialClick('linkedin')}
              >
                <svg className="h-6 w-6 group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24" fill="#0077B5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm text-[#0077b5] group-hover:text-white">LinkedIn</span>
                <span className="text-xs text-gray-600 group-hover:text-blue-200">Professional updates</span>
              </a>
              
              <a
                href="https://www.facebook.com/esgtalent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-1 bg-white border-2 border-[#1877f2] px-4 py-3 rounded-xl font-semibold hover:bg-[#1877f2] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg group"
                aria-label="Follow us on Facebook"
                onClick={() => trackESGEvent.socialClick('facebook')}
              >
                <svg className="h-6 w-6 group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm text-[#1877f2] group-hover:text-white">Facebook</span>
                <span className="text-xs text-gray-600 group-hover:text-blue-200">Company news</span>
              </a>
              
              <a
                href="https://www.instagram.com/esgtalent.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-1 bg-white border-2 border-pink-500 px-4 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg group"
                aria-label="Follow us on Instagram"
                onClick={() => trackESGEvent.socialClick('instagram')}
              >
                <svg className="h-6 w-6 group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24" fill="url(#instagram-gradient-contact)">
                  <defs>
                    <linearGradient id="instagram-gradient-contact" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#FD1D1D" />
                      <stop offset="100%" stopColor="#FCB045" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm text-pink-500 group-hover:text-white">Instagram</span>
                <span className="text-xs text-gray-600 group-hover:text-pink-200">Behind the scenes</span>
              </a>
            </div>
            </div>
          </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;