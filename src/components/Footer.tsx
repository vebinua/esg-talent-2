import React from 'react';
import { ArrowRight, MapPin, Users, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gradient-to-br from-[#033a66] to-[#04548c] text-white pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 fade-in-up">
          {/* Column 1: Logo + Description (1/2 width) */}
          <div className="md:col-span-3 space-y-2">
            <button
              onClick={() => {
                onPageChange('home');
              }}
              className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#033a66] rounded-lg transform transition-transform duration-200 hover:scale-105"
              aria-label="ESG Talent - Go to homepage"
            >
              <img
                src="/ESG Talent logo.white.png"
                alt="ESG Talent"
                className="h-10 w-auto"
              />
            </button>
            <p className="text-xs text-blue-100 leading-relaxed max-w-sm">
              Setting the standard for global executive search, recruitment, and business advisory in sustainability and ESG
            </p>
          </div>

          {/* Column 2: Our Offices */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-blue-200 font-semibold text-base flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Our Offices
            </h4>
            <div className="text-xs text-blue-100 leading-relaxed space-y-2">
              
              <div className="mb-3">
                <div className="font-medium text-white mb-1">Singapore</div>
                <address className="not-italic">
                  1 Coleman Street #10-10 The Adelphi<br />
                  Singapore 179803
                </address>
              </div>
              
              <div>
                <div className="font-medium text-white mb-1">Malaysia</div>
                <address className="not-italic">
                  
                  9-1, Jalan USJ 10/1G, Taipan Crest,<br />
                  UEP Subang Jaya, 47620 Subang Jaya,<br />
                  Selangor
                </address>
              </div>
              
            </div>
          </div>
          {/* Column 3: Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-blue-200 font-semibold text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Our Services', id: 'services' },
                { label: 'Sustainability', id: 'sustainability' },
                { label: 'Insights', id: 'insights' },
                { label: 'Career Opportunities', id: 'careers' }
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onPageChange(link.id);
                    }}
                    className="text-blue-200 hover:text-white transition-all duration-300 text-xs text-left transform hover:translate-x-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            
          </div>

          {/* Column 4: Our Services */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-blue-200 font-semibold text-base">Partnership</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://genashtim.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-all duration-300 text-xs text-left transform hover:translate-x-2 block"
                >
                  Genashtim
                </a>
              </li>
              <li>
                <a
                  href="https://esg-bi.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-all duration-300 text-sm text-left transform hover:translate-x-2 block"
                >
                  ESG Business Institute
                </a>
              </li>
              <li>
                <a
                  href="https://lestari-advisory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-all duration-300 text-sm text-left transform hover:translate-x-2 block"
                >
                  Lestari Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect With Us */}
          <div className="md:col-span-2 space-y-3 relative">
            <h4 className="text-blue-200 font-semibold text-base">Follow Us</h4>

            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/company/esgtalent/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative shadow-lg hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]"
                aria-label="Follow us on LinkedIn"
                title="Follow us on LinkedIn"
              >
                <svg className="h-4 w-4 drop-shadow-[0_0_8px_rgba(0,119,181,0.8)]" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/esgtalent"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative shadow-lg hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]"
                aria-label="Follow us on Facebook"
                title="Follow us on Facebook"
              >
                <svg className="h-4 w-4 drop-shadow-[0_0_8px_rgba(24,119,242,0.8)]" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a
                href="https://www.instagram.com/esgtalent.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative shadow-lg hover:shadow-[0_0_20px_rgba(225,48,108,0.6)]"
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
              >
                <svg className="h-4 w-4 drop-shadow-[0_0_8px_rgba(225,48,108,0.8)]" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/38978436551"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
                aria-label="Contact us on WhatsApp"
                title="Chat with us on WhatsApp"
              >
                <svg className="h-4 w-4 drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" viewBox="0 0 24 24" fill="white">
                  <path d="M12.05 2C6.52 2 2 6.52 2 12.05c0 1.89.49 3.72 1.42 5.35L2 22l4.77-1.25c1.57.85 3.36 1.3 5.23 1.3 5.53 0 10.05-4.52 10.05-10.05S17.58 2 12.05 2zm0 18.1c-1.63 0-3.23-.45-4.61-1.3l-.33-.2-2.82.74.75-2.75-.21-.34c-.88-1.39-1.34-3.01-1.34-4.65C3.48 7.36 7.36 3.48 12.05 3.48s8.57 3.88 8.57 8.57-3.88 8.57-8.57 8.57zm4.36-6.65c-.24-.12-1.42-.7-1.64-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.92-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.01-.37.11-.49.12-.12.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.49-.4-.42-.54-.42h-.46c-.16 0-.42.06-.65.3-.22.24-.86.84-.86 2.04s.88 2.36 1 2.52c.12.16 1.72 2.6 4.16 3.65.58.25 1.03.4 1.38.52.58.18 1.1.16 1.52.1.46-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gradient-to-r from-[#022a4d] to-[#033a66] border-t border-blue-600 border-opacity-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-1.5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-xs text-blue-200">
                © 2025 ESG Talent. All rights reserved
              </p>
            </div>
            
            <div className="flex space-x-6 text-xs">
              <button
                onClick={() => {
                  onPageChange('privacy-policy');
                }}
                className="text-blue-200 hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => {
                  onPageChange('privacy-policy');
                  // Small delay to allow page to load, then scroll to cookies section
                  setTimeout(() => {
                    const element = document.getElementById('cookies-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
                className="text-blue-200 hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;