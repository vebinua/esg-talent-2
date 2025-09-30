import React from 'react';
import { Leaf, Users, Globe, Target, Award, ArrowRight, CheckCircle, Heart, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

interface SustainabilityPageProps {
  onPageChange: (page: string) => void;
}

const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onPageChange }) => {
  const impactPledges = [
    {
      icon: Users,
      title: 'Diversity, Equity & Inclusion',
      description: 'Inclusive hiring is embedded in our search methodology. We proactively promote diverse and under-represented ESG talent and work closely with clients to build inclusive leadership teams.',
      gradient: 'from-[#04548c] to-[#023d67]'
    },
    {
      icon: Shield,
      title: 'Ethical Operations',
      description: 'We uphold fair and responsible business practices across all our activities — from privacy and data protection to low-carbon digital tools and ethical sourcing.',
      gradient: 'from-[#023d67] to-[#04548c]'
    }
  ];

  const integrationMethods = [
    {
      icon: Target,
      title: 'Values-based Candidate Assessment',
      description: 'We evaluate candidates not only on technical competencies, but also on their purpose, ESG mindset, and leadership values.'
    },
    {
      icon: Globe,
      title: 'Sustainable Hiring Advisory',
      description: 'We actively advise clients on how to build impact-driven teams for long-term value creation.'
    },
    {
      icon: Heart,
      title: 'Partnership Network',
      description: 'We collaborate with ESG advocacy bodies and impact organizations to amplify collective progress.'
    }
  ];

  const partners = [
     {
      name: 'Genashtim',
      description: 'B Corp social enterprise empowering marginalised communitie through eLearning & remote work.',
      logo: '/Genashtim.png',
      link: 'https://genashtim.com'
    },
      {
      name: 'ESG Business Institute',
      description: 'Global institute advancing ESG learning, community, and professional development.',
      logo: '/esg-bi org.png',
      link: 'https://esg-bi.org/'
    },
    {
      name: 'Lestari Advisory',
      description: 'Leading ESG research and advisory organization.',
      logo: '/lestari-advisory-logo.png',
      link: 'https://lestari-advisory.com/'
    }
  
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Sustainability at ESG Talent - Our Impact Pledges"
        description="Discover how sustainability is woven into the core of ESG Talent. Learn about our impact pledges, diversity initiatives, and commitment to building a sustainable future."
        keywords="ESG sustainability, diversity equity inclusion, ethical operations, sustainable hiring, impact pledges, JEDI principles"
        url="/sustainability"
        structuredData={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'Sustainability', url: 'https://esg-talent.com/sustainability' }
          ])
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Sustainability.png" 
            alt="Sustainability at ESG Talent"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04548c]/80 via-[#023d67]/70 to-[#04548c]/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Transform Your Sustainable Future</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Sustainability at ESG Talent
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At ESG Talent, sustainability is woven into the very core of who we are and what we do.
                We believe that talent has the power to accelerate the transition to a fairer, more sustainable world – 
                and every search we deliver is an opportunity to create positive impact for people, planet and profit
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Our Impact Pledges */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">
                Our Impact Pledges
              </h2>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactPledges.map((pledge, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 200}
              >
                <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:bg-[#04548c] h-full flex flex-col">
                  <div className="bg-[#04548c] group-hover:bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <pledge.icon className="h-8 w-8 text-white group-hover:text-[#04548c]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {pledge.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed transition-colors duration-300 flex-grow">
                    {pledge.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* How We Integrate Sustainability */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">
                How We Integrate Sustainability into Our Work
              </h2>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrationMethods.map((method, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 150}
              >
                <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{method.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">
                Partnerships
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with a range of sustainability and impact-focused organizations, such as
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 200}
              >
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 block group h-full flex flex-col"
                >
                  <div className="text-center flex flex-col h-full">
                    <div className="mb-4 flex justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-grow">{partner.description}</p>
                   
                  </div>
                </a>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-[#04548c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future Together?
            </h2>
            <p className="text-lg text-blue-200 mb-6 max-w-3xl mx-auto">
              Partner with us to create positive impact through exceptional ESG talent and sustainable business practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange('contact')}
                className="bg-[#43ab04] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#369003] transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Connect With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onPageChange('services')}
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#04548c] transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;