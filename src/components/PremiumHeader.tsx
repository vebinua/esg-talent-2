import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface PremiumHeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const PremiumHeader: React.FC<PremiumHeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Sustainability', id: 'sustainability' },
    { name: 'Insights', id: 'insights' },
    { name: 'Career Opportunities', id: 'careers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || currentPage === 'profile'
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent backdrop-blur-0'
      }`} 
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - NO HOVER EFFECT ON IMAGE */}
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
            aria-label="ESG Talent - Go to homepage"
          >
            <img
              src={isScrolled || currentPage === 'profile' ? "/ESG Telent logo.png" : "/ESG Talent logo.white.png"}
              alt="ESG Talent - Sustainable Growth Through Expert Talent"
              className="h-10 min-h-[40px] w-auto transition-all duration-500 ease-in-out"
              // Removed hover:scale-105 — logo no longer scales on hover
              // Optional: add style={{ pointerEvents: 'none' }} if you want to block all pointer events on image
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                    currentPage === item.id
                      ? isScrolled || currentPage === 'profile'
                        ? 'text-[#04548c] font-semibold' 
                        : 'text-white font-semibold'
                      : isScrolled || currentPage === 'profile'
                        ? 'text-gray-700 hover:text-[#43ab04]'
                        : 'text-white/90 hover:text-white'
                  } ${currentPage === item.id ? 'border-2 border-dotted border-[#43ab04] px-3 py-1 rounded-lg' : ''} focus:outline-none`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  title={item.id === 'services' ? 'ESG Executive Search & Sustainability Recruitment Services' : 
                         item.id === 'careers' ? 'ESG Careers & Sustainability Job Portal' :
                         item.id === 'insights' ? 'ESG Leadership Insights & Industry Trends' :
                         item.id === 'about' ? 'Global ESG Leadership Network & Team' : item.name}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button — Hover effects preserved */}
            <button
              onClick={() => onPageChange('contact')}
              className="relative bg-[#43ab04] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#43ab04] focus:ring-offset-2 overflow-hidden group"
              aria-label="Contact us to connect with ESG Talent"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-[#369003] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <span className="relative z-10">
                Connect with Us
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden focus:outline-none transition-colors duration-300 ${
              isScrolled || currentPage === 'profile' ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="lg:hidden py-4 border-t border-gray-200/20 bg-white/95 backdrop-blur-md rounded-b-lg" 
            role="navigation" 
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg ${
                  currentPage === item.id
                    ? 'text-[#04548c] font-semibold border-2 border-dotted border-[#43ab04]'
                    : 'text-gray-700 hover:text-[#43ab04]'
                } focus:outline-none`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.name}
              </button>
            ))}
            <div className="mt-4 px-4">
              <button
                onClick={() => {
                  onPageChange('contact'); 
                  setIsMenuOpen(false);
                }}
                className="w-full relative bg-[#43ab04] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#43ab04] focus:ring-offset-2 overflow-hidden group"
                aria-label="Contact us to connect with ESG Talent"
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-[#369003] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <span className="relative z-10">
                  Connect with Us
                </span>
              </button> 
            </div>
          </div>
        )}
      </div>
    </header> 
  );
};

export default PremiumHeader;