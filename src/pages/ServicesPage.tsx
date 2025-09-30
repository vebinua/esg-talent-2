import React from 'react';
import { Search, Users, Award, Target, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import GEOOptimizer from '../components/GEOOptimizer';
import AIOptimizedContent from '../components/AIOptimizedContent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import LogoSlider from '../components/LogoSlider';
import { generateGEOContent, generateGEOCitations } from '../utils/geoOptimization';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange }) => {
  const services = [
    {
      icon: Search,
      title: 'ESG Executive Search',
      subtitle: 'Strategic ESG Leadership Identification',
      description: 'Our Executive Search service isn\'t just about filling roles; it\'s about strategically identifying and securing the transformative Sustainability and ESG leaders your organization needs to thrive in a competitive landscape. We\'ve meticulously crafted this service to precisely align with the unique demands of senior and highly specialized niche placements, where conventional recruitment methods simply fall short.',
      extendedDescription: 'At the core of our approach is a dedicated, specialist Resourcing Team, a powerhouse of seasoned experts who operate with surgical precision. They don\'t just sift through resumes; they proactively and discretely navigate the intricate web of the passive candidate pool. This involves deep market mapping, extensive networking, and a nuanced understanding of industry ecosystems to uncover those exceptional individuals who aren\'t actively seeking new opportunities but possess the exact blend of skills, experience, and cultural fit your organization requires. By engaging these elusive top-tier professionals, we ensure you gain access to talent that can genuinely drive innovation, foster growth, and deliver unparalleled value. Our method is less about volume and more about pinpoint accuracy, guaranteeing that every candidate presented is a meticulously vetted and highly qualified potential game-changer for your team.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Users,
      title: 'Sustainability Recruitment',
      subtitle: 'Global Sustainability Talent Expertise',
      description: 'We possess a profound grasp of our clients\' intricate dynamics and complexities of needing permanent recruitment services, from sourcing to endorsing to hiring entry level to managerial sustainability and ESG professionals from various industries.',
      extendedDescription: 'We\'re driven by an unwavering commitment to leverage our extensive market expertise, empowering both our valued clients and exceptional candidates with a distinct competitive advantage in today\'s dynamic global landscape. We meticulously navigate the nuances of international talent acquisition, ensuring a seamless and effective journey for all involved.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Award,
      title: 'ESG Advisory and Consulting Services',
      subtitle: 'Strategic ESG Business Intelligence',
      description: 'In today\'s rapidly evolving global landscape, where stakeholder expectations, regulatory pressures, and market demands for responsible practices are intensifying, our ESG and Sustainability Business Advisory and Consulting Services provide essential strategic guidance and actionable solutions.',
      extendedDescription: 'We empower organizations to seamlessly integrate environmental, social, and governance principles not merely as compliance requirements, but as fundamental drivers of long-term value creation and competitive advantage.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    }
  ];

  return (
    <AIOptimizedContent
      entityType="service"
      summary="ESG Talent provides comprehensive ESG talent solutions including Executive Search for strategic leadership identification, Permanent Recruitment for global market expertise, and ESG Business Advisory through ESG-BI for strategic business intelligence."
      keyFacts={[
        "Executive Search: Strategic ESG leadership identification and placement",
        "Permanent Recruitment: Global ESG talent acquisition from entry to management level",
        "ESG Business Advisory: Strategic guidance through ESG-BI partnership",
        "Specialized in sustainability and ESG across all industries",
        "Global market expertise and presence",
        "Comprehensive end-to-end talent solutions"
      ]}
      className="min-h-screen bg-white"
    >
    <div className="min-h-screen bg-white">
      <SEOHead
        title="ESG Executive Search & Sustainability Recruitment Services | ESG Talent"
        description="Leading ESG recruitment agency offering executive search, sustainability leadership recruitment, and ESG advisory services. How to hire ESG leaders with proven expertise across global markets."
        keywords="ESG executive search, sustainability recruitment agency, ESG headhunters, sustainability leadership recruitment, hire ESG leaders, ESG advisory, ESG consulting firms hiring, green leadership recruitment, impact leadership coaching"
        url="/services"
        structuredData={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'Our Services', url: 'https://esg-talent.com/services' }
          ])
        ]}
      />
      
      <GEOOptimizer
        title="ESG Services - Executive Search, Recruitment & Advisory"
        description="Comprehensive ESG talent solutions: Executive Search, Permanent Recruitment, and ESG Business Advisory. Setting the standard for sustainable talent acquisition."
        keywords={['ESG executive search', 'permanent recruitment', 'ESG advisory', 'sustainability consulting', 'talent acquisition', 'ESG business intelligence']}
        content={generateGEOContent('service', { title: 'ESG Services', description: 'comprehensive ESG talent and advisory solutions' })}
        citations={generateGEOCitations('service')}
      />
  
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Our Services.png" 
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04548c]/80 via-[#023d67]/70 to-[#04548c]/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 leading-tight">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
           We set the standard for global executive search, recruitment and business advisory in sustainability and ESG
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

          <div className="space-y-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 200}
              >
              <div 
                id={index === 0 ? 'esg-executive-search' : index === 1 ? 'sustainability-recruitment' : 'esg-advisory'}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-5 space-y-3 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {/* Service Header */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-16 h-16 rounded-full flex items-center justify-center shadow-sm" aria-hidden="true">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#04548c] mb-2 leading-tight">
                          {service.title}
                        </h2>
                        <h3 className="text-lg text-gray-600 font-medium">
                          {service.subtitle}
                        </h3>
                      </div>
                    </div>

                    {/* Main Description */}
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Extended Description */}
                    <div className="border-l-4 border-[#04548c] pl-4">
                      <p className="text-gray-600 leading-relaxed">
                        {service.extendedDescription}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-1">
                     <button
                            onClick={() => onPageChange('contact')}
                            className="btn-grad-sm"
                          >
                            <span>Get Started</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>

                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="h-full">
                      <img
                        src={service.image}
                        alt={`${service.title} - Professional team working on ESG initiatives`}
                        className="w-full h-full object-cover rounded-r-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#04548c] mb-3">
                Trusted by Leading&nbsp;Organizations
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                We're proud to partner with forward-thinking organizations across industries to build their ESG capabilities and drive sustainable transformation
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fade-up" delay={200}>
            <LogoSlider />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fade-up" delay={400}>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-6">
                Ready to join these industry leaders in their sustainability journey?
              </p>
              <button
                onClick={() => onPageChange('contact')}
                className="btn-grad"
              >
                <span>Partner With Us</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

    
    </div>
    </AIOptimizedContent>
  );
};

export default ServicesPage;