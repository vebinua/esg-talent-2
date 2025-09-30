import React from 'react';
import { useState } from 'react';
import { Target, Users, TrendingUp, Search, Handshake, Award, ArrowRight, Globe, Shield, BarChart3 } from 'lucide-react';
import { X } from 'lucide-react';
import GEOOptimizer from '../components/GEOOptimizer';
import AIOptimizedContent from '../components/AIOptimizedContent';
import SEOHead from '../components/SEOHead';
import { organizationSchema, websiteSchema } from '../utils/structuredData';
import CursorFollower from '../components/CursorFollower';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { generateGEOContent, generateGEOCitations } from '../utils/geoOptimization';

interface PremiumHomePageProps {
  onPageChange: (page: string) => void;
}

const PremiumHomePage: React.FC<PremiumHomePageProps> = ({ onPageChange }) => {
  const services = [
    {
      icon: Search,
      title: 'Executive Search',
      description: 'We specialize in finding the right executives to lead ESG initiatives. Our team has experience working with companies across a range of industries, from renewable energy to sustainable finance.',
      gradient: 'from-[#04548c] to-[#023d67]'
    },
    {
      icon: Users,
      title: 'Permanent Recruitment',
      description: 'Our permanent recruitment services help our clients identify and attract top talent from entry-level to manager-level positions for their ESG teams. We work with companies of all sizes, from startups to established corporations.',
      gradient: 'from-[#023d67] to-[#04548c]'
    },
    {
      icon: Award,
      title: 'Advisory and Consulting Services',
      description: 'We offer advisory services to help companies develop their ESG strategies and build high-performing teams. Our team of experts can provide guidance on everything from ESG reporting to stakeholder engagement.',
      gradient: 'from-[#04548c] to-[#023d67]'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects' },
    { number: '50+', label: 'Global Partners' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  const whyESGReasons = [
    {
      icon: Target,
      title: 'Built by ESG Professionals, for ESG Professionals',
      description: 'Our team consists of industry insiders who live and breathe ESG. This deep-rooted expertise gives us an edge in identifying not just qualified talent — but the right talent to lead impact with integrity.'
    },
    {
      icon: Users,
      title: 'A Catalyst for the ESG Community',
      description: 'We believe in strengthening the entire ESG ecosystem. Every placement we make is a step toward a more responsible, equitable, and regenerative economy. By empowering ESG professionals, we\'re also supporting the greater good.'
    },
    {
      icon: TrendingUp,
      title: 'Guided by the Triple Bottom Line: People. Planet. Profit.',
      description: 'Our commitment goes beyond business outcomes. We actively contribute to a future where sustainability is the norm — not the niche. Our practices, partnerships, and placements are aligned with long-term value creation across all three Ps.'
    }
  ];

  return (
    <AIOptimizedContent
      entityType="organization"
      summary="ESG Talent is the leading global executive search, recruitment and business advisory firm specializing in Environmental, Social, and Governance (ESG) and sustainability. We set the standard for sustainable talent solutions worldwide, serving Fortune 500 companies and emerging sustainability leaders across North America, Europe, and Asia-Pacific."
      keyFacts={[
        "Global ESG executive search and recruitment leader",
        "Specialized in Environmental, Social, and Governance talent",
        "Serves Fortune 500 companies and sustainability leaders",
        "Global presence across North America, Europe, Asia-Pacific",
        "Committed to JEDI principles and sustainable business practices",
        "Partners with B Corp certified organizations",
        "Expert in climate risk, sustainable finance, and ESG reporting"
      ]}
    >
    <main className="min-h-screen overflow-hidden">
      <SEOHead
        title="ESG Talent - Transform Your Sustainable Future"
        description="Leading global executive search, recruitment and business advisory in sustainability and ESG. Setting the standard for sustainable talent solutions worldwide."
        keywords="ESG talent, sustainability recruitment, executive search, ESG advisory, sustainable business, environmental recruitment, social governance, ESG consulting"
        url="/"
        structuredData={[organizationSchema, websiteSchema]}
      />
      
      <GEOOptimizer
        title="ESG Talent - Global ESG Executive Search & Advisory"
        description="Leading global executive search, recruitment and business advisory in sustainability and ESG. Setting the standard for sustainable talent solutions worldwide."
        keywords={['ESG talent', 'sustainability recruitment', 'executive search', 'ESG advisory', 'environmental jobs', 'social governance', 'climate risk management']}
        content={generateGEOContent('organization', {})}
        citations={generateGEOCitations('organization')}
      />
      
      <CursorFollower />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c]">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video 
            src="https://esg-talent.com/jenn/ESG_Talent.mp4" 
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04548c]/80 via-[#023d67]/70 to-[#04548c]/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
                <span className="block opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  Transform Your
                </span>
                <span className="block opacity-0 animate-slide-up bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  Sustainable&nbsp;Future
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Setting the Standard in Global Executive Search, Recruitment, and Business Advisory for Sustainability
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <button
                onClick={() => onPageChange('services')}
                className="btn-grad text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#43ab04] hover:border-[#43ab04] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {stats.map((stat, index) => (
                <ScrollAnimationWrapper key={index} animation="scale-up" delay={index * 100}>
                  <div className="group text-center bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#04548c]/5 rounded-full group-hover:bg-[#04548c]/10 transition-colors duration-300"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#43ab04]/5 rounded-full group-hover:bg-[#43ab04]/10 transition-colors duration-300"></div>
                    
                    {/* Icon based on stat type */}
                    <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                      {index === 0 && <Target className="h-6 w-6 text-white" />}
                      {index === 1 && <Users className="h-6 w-6 text-white" />}
                      {index === 2 && <Award className="h-6 w-6 text-white" />}
                      {index === 3 && <TrendingUp className="h-6 w-6 text-white" />}
                    </div>
                    
                    <div className="text-4xl md:text-5xl font-bold text-[#04548c] mb-3 group-hover:text-[#023d67] transition-colors duration-200 relative z-10">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-semibold text-base group-hover:text-gray-700 transition-colors duration-200 relative z-10">
                      {stat.label}
                    </div>
                    
                    {/* Subtle progress bar for visual interest */}
                    <div className="mt-3 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#04548c] to-[#43ab04] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                        style={{ animationDelay: `${index * 100}ms` }}
                      ></div>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </ScrollAnimationWrapper>
          
          {/* Additional context text */}
          <ScrollAnimationWrapper animation="fade-up" delay={400}>
            <div className="text-center">
             <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Trusted by leading organizations worldwide to deliver exceptional ESG talent solutions and drive sustainable transformation
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Why ESG Talent Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">
                Why ESG Talent?
              </h2>
              <div className="max-w-5xl mx-auto space-y-4">
                <p className="text-2xl font-semibold text-[#04548c]">
                  We combine recruitment expertise with ESG knowledge – connecting sustainability-driven organizations with the professionals who can deliver impact.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At ESG Talent, we specialize in finding and placing ESG leaders who combine purpose with performance that are shaping a more sustainable world. As ESG practitioners ourselves, we understand the complexities, the standards, and the urgency that define the sustainability space today.
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  We go beyond matching resumés to job descriptions — we align people, purpose, and performance by delivering the right talent to achieve your sustainability goals.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up" delay={200}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#04548c] mb-8">
                What Sets Us Apart:
              </h3>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {whyESGReasons.map((reason, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 200}
              >
                <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 cursor-default border border-gray-100 hover:border-[#04548c]/20 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#04548c] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed transition-colors duration-300 flex-grow">
                    {reason.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="fade-up" delay={600}>
            <div className="text-center mt-10">
              <div className="bg-gradient-to-br from-[#04548c] to-[#023d67] rounded-2xl p-6 text-white max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed">
                  Whether you're scaling your ESG team or seeking your next meaningful role, 
                  <span className="font-semibold"> ESG Talent is your trusted partner for sustainable success.</span>
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive ESG talent solutions designed to meet your organization's unique sustainability objectives.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 200}
              >
                <div className={`group bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:bg-[#04548c] h-full flex flex-col`}>
                  <div className="bg-[#04548c] group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white group-hover:text-[#04548c]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed mb-4 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                  
                  <button
                    onClick={() => {
                      onPageChange('services');
                      // Use a longer delay and check multiple times for element availability
                      const scrollToSection = () => {
                        const sectionIds = ['executive-search', 'permanent-recruitment', 'lestari-advisory'];
                        const element = document.getElementById(sectionIds[index]);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          // If element not found, try again after a short delay
                          setTimeout(scrollToSection, 100);
                        }
                      };
                      setTimeout(scrollToSection, 500);
                    }}
                    className="text-[#43ab04] group-hover:text-white font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300 mt-auto cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollAnimationWrapper animation="slide-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">
                  Ready to transform your ESG Talent strategy?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Connect with our experts to discuss your talent needs and discover how we can help you build a sustainable future.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Target,
                      title: 'Strategic Partnership',
                      description: 'We become your trusted partner in building world-class ESG teams.'
                    },
                    {
                      icon: Users,
                      title: 'Expert Guidance',
                      description: 'Our team provides strategic insights to navigate the ESG Talent landscape.'
                    },
                    {
                      icon: TrendingUp,
                      title: 'Measurable Impact',
                      description: 'We help you achieve tangible results in your talent sustainability initiatives.'
                    }
                  ].map((item, index) => (
                    <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                      <div className="flex items-start space-x-3">
                        <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </ScrollAnimationWrapper>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#04548c] to-[#023d67] rounded-2xl p-6 text-white">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <BarChart3 className="h-12 w-12 text-white mb-4" />
                    <h3 className="text-xl font-bold mb-3">Start Your ESG Transformation</h3>
                    <p className="text-blue-100 mb-4">
                      Connect with our experts to discuss your talent needs and discover how we can help you build a sustainable future.
                    </p>
                    <button
                      onClick={() => onPageChange('contact')}
                      className="bg-[#43ab04] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#369003] transition-all duration-300 transform hover:scale-105"
                    >
                      Start Your Journey
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Modal for Comprehensive ESG Solutions */}
    </main>
    </AIOptimizedContent>
  );
};

export default PremiumHomePage;