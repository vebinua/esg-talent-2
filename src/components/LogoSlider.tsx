import React, { useEffect, useState } from 'react';

interface LogoSliderProps {
  className?: string;
}

const LogoSlider: React.FC<LogoSliderProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [
    {
      src: '/abcimpact_logo.jpg',
      alt: 'ABC Impact - ESG and sustainability consulting client',
      name: 'ABC Impact'
    },
    {
      src: '/araiba.jpg',
      alt: 'Araiba - Technology and sustainability solutions client',
      name: 'Araiba'
    },
    {
      src: '/bioeconomy_corp_logo.jpg',
      alt: 'Bioeconomy Corporation - Sustainable business client',
      name: 'Bioeconomy Corporation'
    },
    {
      src: '/heng_hiap_logo.jpg',
      alt: 'Heng Hiap - Manufacturing and sustainability client',
      name: 'Heng Hiap'
    },
    {
      src: '/home_who-we-are-page_49.jpg',
      alt: 'ESG Talent client - Sustainability leadership',
      name: 'Client Partner'
    },
    {
      src: '/raise_logo.jpg',
      alt: 'Raise - Impact investment and ESG client',
      name: 'Raise'
    },
    {
      src: '/home_who-we-are-page_46.jpg',
      alt: 'ESG Talent client - Environmental solutions',
      name: 'Client Partner'
    },
    {
      src: '/the_body_shop.jpg',
      alt: 'The Body Shop - Sustainable beauty and ESG client',
      name: 'The Body Shop'
    },
    {
      src: '/wsglogo.jpg',
      alt: 'WSG - Workforce development and sustainability client',
      name: 'WSG'
    },
    {
      src: '/home_who-we-are-page_52.jpg',
      alt: 'ESG Talent client - Corporate sustainability',
      name: 'Client Partner'
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [logos.length]);

  // Calculate visible logos for infinite scroll effect
  const getVisibleLogos = () => {
    const visibleCount = 5; // Show 5 logos at a time on desktop
    const result = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % logos.length;
      result.push({ ...logos[index], key: `${index}-${i}` });
    }
    
    return result;
  };

  const visibleLogos = getVisibleLogos();

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="relative">
        {/* Desktop View - 5 logos */}
        <div className="hidden md:flex items-center justify-center space-x-8 transition-all duration-600 ease-in-out">
          {visibleLogos.map((logo, index) => (
            <div
              key={logo.key}
              className={`flex-shrink-0 transition-all duration-600 ease-in-out transform ${
                index === 2 
                  ? 'scale-110 opacity-100' // Center logo is larger and fully opaque
                  : index === 1 || index === 3
                  ? 'scale-100 opacity-90' // Adjacent logos
                  : 'scale-90 opacity-70' // Outer logos
              }`}
            >
              <div className="w-40 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:scale-102 transition-all duration-200 p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-200"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tablet View - 3 logos */}
        <div className="hidden sm:flex md:hidden items-center justify-center space-x-6 transition-all duration-1000 ease-in-out">
          {visibleLogos.slice(0, 3).map((logo, index) => (
            <div
              key={logo.key}
              className={`flex-shrink-0 transition-all duration-1000 ease-in-out transform ${
                index === 1 
                  ? 'scale-110 opacity-100' // Center logo
                  : 'scale-95 opacity-80' // Side logos
              }`}
            >
              <div className="w-36 h-28 bg-white rounded-xl shadow-lg flex items-center justify-center group hover:scale-105 transition-all duration-300 p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - 1 logo */}
        <div className="flex sm:hidden items-center justify-center transition-all duration-1000 ease-in-out">
          <div className="transition-all duration-1000 ease-in-out transform">
            <div className="w-40 h-32 bg-white rounded-xl shadow-sm flex items-center justify-center transition-all duration-300 p-4">
              <img
                src={visibleLogos[0].src}
                alt={visibleLogos[0].alt}
                className="max-w-full max-h-full object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {logos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#04548c] focus:ring-offset-2 ${
                index === currentIndex
                  ? 'bg-[#04548c] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to logo ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#04548c] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#43ab04] rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default LogoSlider;