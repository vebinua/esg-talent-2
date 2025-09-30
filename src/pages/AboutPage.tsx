import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Scale, Heart, CaseSensitive as Diversity3, Activity as Inclusivity, Eye, Target, Mail, Phone, Linkedin, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { X, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import GEOOptimizer from '../components/GEOOptimizer';
import AIOptimizedContent from '../components/AIOptimizedContent';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import { TeamMember } from '../types';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { generateGEOContent, generateGEOCitations } from '../utils/geoOptimization';

interface AboutPageProps {
  onPageChange: (page: string) => void;
  onProfileChange: (profileId: string, section: string) => void;
}

interface ExtendedTeamMember extends TeamMember {
  bio?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  region?: string;
  country?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange, onProfileChange }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const boardMembers: TeamMember[] = [
    { 
      name: 'Thomas Ng', 
      title: 'Board Member', 
      image: '/thomas ng.jpg',
      bio: `Born and raised in a lower middle-class family in Penang, Thomas worked to support himself through university in Auckland, New Zealand. Recruited on campus by PwC, he worked there for a year before returning to Malaysia to help Swiss company Brown Boveri to start up their operations there. With the merger that formed Asea Brown Boveri in 1988, Thomas was transferred to Hong Kong as an expatriate Chief Financial Officer for ABB's operations in China and Hong Kong.

In 1991, he was assigned to ABB Power Ventures in Zurich to join a team to restructure ABB's acquisitions in Eastern Europe. Ironic that ABB would get a Chinaman from their HK/China operations to help "westernise" their Eastern European operations. For more than a year, Thomas spent most of his time in Wroclaw, Poland, and moved his young family there.

Upon returning to Hong Kong, Thomas was assigned to start-up ABB's first few joint ventures in China. He set up ABB China Investments Ltd and was its first Managing Director.`
    },
    { 
      name: 'Stella Wong', 
      title: 'Board Member', 
      image: '/stella wong.jpg', 
      bio: `Stella currently serves on the board of Genashtim, a B Corp certified organization and has done so for over a decade. She has been instrumental in helping co-create and expand the company's HR suite of services for effective deployment towards organizational and people development.

With 30 years of experience in HR management, Stella has driven HR transformation for over two decades. She has led local and regional teams in top 100 corporations, including Sumitomo Banking Corporation, Hongkong and Shanghai Bank, AIA, and American Express, primarily based in Singapore.

Stella holds a bachelor's degree in Business Administration from the National University of Singapore.`
    },
    { 
      name: 'Dr. Peter Brace', 
      title: 'Board Member', 
      image: '/peter brace.jpeg',
      bio: `Dr. Brace is an experienced consultant and trainer specializing in people systems, processes, psychological safety, and organizational change. With a PhD in sustainability ethics and behavior, he possesses a strong foundation in solution development, influence, persuasion, and strategic thinking.

As the Co-founder and CEO of Human Capital Realisation since 2007, Dr. Brace excels as a Psychological Safety and ESG consultant, driving strategic planning solutions for human capital management. His career highlights include demonstrating leadership in CRM solutions and financial services verticals at IBM Australia and developing and implementing Telstra's customer service systems strategy as a Consultant to the CIO for Telstra. Dr. Brace's proactive and consultative style delivers solid results, as reflected in his successful tenure as the President of the School Council at Yarra Primary School.

Dr. Brace has a PhD in Philosophy taken at Swineburne University of Technology.`
    },
    { 
      name: 'Markus Dietrich', 
      title: 'Board Member', 
      image: '/markus dietrich.jpeg',
      bio: `Markus has several decades of experience in European IT entrepreneurship before he transitioned to sustainability and social entrepreneurship in Southeast Asia and is currently aiding governments worldwide in guiding private sector development towards achieving social impact.

After advising governments across Asia and Africa through the Inclusive Business Action Network and co-founding social enterprises in aiding the development of solar energy and inclusive business markets, Markus now leverages his expertise in catalyzing private sector development towards meaningful social change on a global scale to support governments and organizations in their pursuit of sustainable, inclusive, and impactful solutions.

Markus has a wealth of continuing education including a Masters of Science in International Community Economic Development taken at Southern New Hampshire University, coupled with a BSc in Business Studies at Bayes Business School.`
    },
  ];

  const executiveTeam: ExtendedTeamMember[] = [
    { 
      name: 'Sasho Boshevski', 
      title: 'Managing Director',
      image: '/Sasho-1.png',
      region: 'North America',
      country: 'United States',
      email: 'sasho@esg-talent.com', 
      phone: '+ 389 78 436 551',
      linkedin: 'https://www.linkedin.com/in/sasho-boshevski-437912103/',
      bio: 'Sasho brings over 15 years of executive search experience in the ESG and sustainability sector. He has successfully placed C-suite executives across renewable energy, sustainable finance, and environmental consulting firms. His deep understanding of ESG frameworks and regulatory landscapes makes him a trusted advisor to Fortune 500 companies.'
    },
    { 
      name: 'Giordano Morello', 
      title: 'Executive Search Consultant',
      image: '/Giordano.png',
      region: 'Europe',
      email: 'giordano@esg-talent.com',
      phone: '+55 17 981098838',
      linkedin: 'https://www.linkedin.com/in/giordano-morello/',
      bio: 'Giordano specializes in ESG executive search across Europe and Latin America. With expertise in sustainable finance and regulatory compliance, he has successfully placed ESG leaders in financial services, consulting, and multinational corporations. His background in legal compliance and ESG frameworks makes him a trusted advisor to organizations navigating complex sustainability requirements.'
    },
    { 
      name: 'Alma Vazquez', 
      title: 'Executive Search Consultant', 
      image: '/Alma Square 1.png',
      region: 'Europe',
      email: 'alma@esg-talent.com',
      phone: '+52 686 210 2188',
      linkedin: 'https://www.linkedin.com/in/alma-vazquez-jimenez-0b0963b0/',
      bio: 'Alma is an Independent Verification Analyst with a global B Lab partner, where she helps companies strengthen their social and environmental practices. With over 8 years of professional experience across impact assessment, recruitment support, customer relations, and international logistics, she brings a strong foundation in both operational and sustainability-focused roles. Alma holds degrees in International Business and Accounting and values collaboration, continuous learning, and positive impact.'
    },
    { 
      name: 'Robin Low', 
      title: 'Executive Search Consultant', 
      image: '/Robin (1).png',
      region: 'Asia-Pacific',
      email: 'robin@esg-talent.com',
      phone: '+1 857 919 9700',
      linkedin: 'https://www.linkedin.com/in/robinlow88/',
      bio: 'Robin is a seasoned veteran in the ESG space, having experience with NGOs, MNCs and governments in Europe, Latin America, USA and Asia. Robin started Co-founded Relief 2.0 and Civil Innovation Lab and has worked with refugees and internally displaced survivors from disasters and wars and proposed a white paper for rebranding of the term refugees as many refugees have skills and advanced degrees, and can contribute to the current local community. Robin has worked with Nestle, Essilor, Menarini on impactful design solutions and brand purpose. Working with B Lab certified companies and B Lab for the past 5 years, Robin is familiar with impact and certification.',
    },
    { 
      name: 'Bernard Nathan', 
      title: 'Executive Search Consultant', 
      image: '/Nathan-1.png',
      region: 'Asia-Pacific',
      email: 'bernard@esg-talent.com',
      phone: '+60 112 317 9002',
      linkedin: 'https://www.linkedin.com/in/bernard-nathan-744b28197/',
      bio: 'With over three years of experience reviewing ESG assessments and related data to ensure accuracy and efficiency in the highly sought-after B Corp certification, Bernard guides companies through legal frameworks and provides actionable recommendations to improve their ESG performance across governance, workers, community, environment, and customers. With a background in marketing and as the founder of two ESG-focused startups, he has worked with major clients generating over RM50 million in revenue and employing more than 200 staff to enhance their ESG practices. Bernard holds a Bachelor\'s degree in Business Management (General Management), a TESOL/TEFL certificate, and has served as a mentor to new ESG team members within his organization. Known for his efficiency, strong customer service, and client management skills, he is committed to fostering a greener, more equitable world while supporting marginalized communities. Outside of work, Bernard enjoys reading philosophy and self-improvement books.',
    },
    { 
      name: 'Red Pioquinto', 
      title: 'Executive Search Consultant', 
      image: '/Red Square.png',
      region: 'Asia-Pacific',
      email: 'red@esg-talent.com',
      phone: '+63 997 947 3762',
      linkedin: 'https://www.linkedin.com/in/red-pioquinto-692402183/',
      bio: 'With over three years of experience reviewing ESG assessments and related data to ensure accuracy and efficiency in the highly sought-after B Corp certification, Red guides companies through legal frameworks and provides actionable recommendations to improve their ESG performance across governance, workers, community, environment, and customers. With a background in marketing and as the founder of two ESG-focused startups, he has worked with major clients generating over RM50 million in revenue and employing more than 200 staff to enhance their ESG practices. Red holds a Bachelor\'s degree in Business Management (General Management), a TESOL/TEFL certificate, and has served as a mentor to new ESG team members within his organization. Known for his efficiency, strong customer service, and client management skills, he is committed to fostering a greener, more equitable world while supporting marginalized communities. Outside of work, Red enjoys reading philosophy and self-improvement books.',
    },
    { 
      name: 'Nur Ashikeen Iqbal', 
      title: 'Executive Search Consultant', 
      image: '/Kimi Sqaure.png',
      region: 'Asia-Pacific',
      email: 'kimi@esg-talent.com',
      phone: '+60 12 482 1734',
      linkedin: 'https://www.linkedin.com/in/kimi-nur-ashikeen/',
      bio: 'With nearly 10 years of experience with multiple roles at Genashtim, a social enterprise and Certified B Corporation, Kimi specializes in ESG (Environmental, Social, and Governance) verification for companies seeking B Corp Certification. She brings deep expertise in assessing environmental impact, social responsibility, and governance practices across diverse industries, ensuring alignment with B Lab standards. Her global portfolio includes verification work for small enterprises (SEA) in R1 and R2 recertifications, small-medium enterprises (SMEA) and R3 recertifications, medium enterprises and R4 recertifications, and finance Addenda companies. Seventeen years ago, Kimi was involved in an accident that left her paralyzed from the waist down. As a full-time wheelchair user, she has become a strong advocate for accessibility, inclusion, and empowering underserved communities. Kimi holds an MBA specializing in Marketing from the National University of Malaysia and a BA (Hons) in Psychology, along with multiple ESG and sustainability certifications from UNITAR and HRD Corp. She has contributed to the successful certification of numerous companies worldwide and proudly represented Malaysia at Miss Wheelchair World 2023. Likes: advocacy work, travelling, singing'
    }
  ];
      bio: 'Committed to sustainability and mental well-being, I am an experienced administrative and research professional skilled in recruitment support, membership sourcing, and stakeholder engagement. I have coordinated international trade shows, written successful grant and bid proposals for government and development agencies, and produced industry reports. With experience across diverse sectors, including financial services and environmental conservation, I bring strong database management and cross-functional support skills to drive organizational success.'
  const sourcingTeam: ExtendedTeamMember[] = [
    { 
      name: 'Jane Pereña', 
      title: 'Sourcing Specialist', 
      image: '/Melicia Jane - updated.png',
      region: 'Asia-Pacific',
      email: 'jane@esg-talent.com',
      phone: '+63 916 932 9954',
      linkedin: 'https://www.linkedin.com/in/mjnperena/',
      bio: 'Committed to sustainability and mental well-being, Mary Jane is an experienced administrative and research professional skilled in recruitment support, membership sourcing, and stakeholder engagement. She has coordinated international trade shows, written successful grant and bid proposals for government and development agencies, and produced industry reports. With experience across diverse sectors, including financial services and environmental conservation, she brings strong database management and cross-functional support skills to drive organizational success.',
    },
    { 
      name: 'Vicky Suarez', 
      title: 'Sourcing Specialist', 
      image: '/Vicky Square updated.png',
      region: 'North America',
      email: 'vicky@esg-talent.com',
      phone: '+63 923 501 0432',
      linkedin: 'https://www.linkedin.com/in/maria-victoria-suarez-36a74121/',
      bio: 'Committed to sustainability and mental well-being, Vicky is an experienced administrative and research professional skilled in recruitment support, membership sourcing, and stakeholder engagement. She has coordinated international trade shows, written successful grant and bid proposals for government and development agencies, and produced industry reports. With experience across diverse sectors, including financial services and environmental conservation, she brings strong database management and cross-functional support skills to drive organizational success.',
    }
  ];

  // Get unique regions and countries
  const allTeamMembers = [...executiveTeam, ...sourcingTeam];
  const regions = ['All', ...Array.from(new Set(allTeamMembers.map(member => member.region)))];

  // Filter functions
  const filterTeam = (team: ExtendedTeamMember[]) => {
    return team.filter(member => {
      const regionMatch = selectedRegion === 'All' || member.region === selectedRegion;
      return regionMatch;
    });
  };

  const filteredExecutiveTeam = filterTeam(executiveTeam);
  const filteredSourcingTeam = filterTeam(sourcingTeam);

  // Heidrick-style team member card component
  const HeidrickTeamCard: React.FC<{ member: ExtendedTeamMember; profileId: string; section: string }> = ({ member, profileId, section }) => (
    <div 
      className="bg-white p-8 pt-12 hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-gray-200 rounded-lg shadow-sm relative overflow-hidden min-h-[280px]" 
      onClick={() => onProfileChange(profileId, section)}
    >
      <div className="flex items-start justify-between h-full">
        <div className="flex-1 min-w-0 pr-4 z-10 relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
          <p className="text-lg text-gray-600 mb-3 font-medium">{member.title}</p>
          <div className="flex space-x-3">
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-[#04548c] transition-colors duration-200"
                aria-label={`Call ${member.name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Phone className="h-4 w-4 text-white" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-[#04548c] transition-colors duration-200"
                aria-label={`Email ${member.name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="h-4 w-4 text-white" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-colors duration-200"
                aria-label={`${member.name} on LinkedIn`}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            )}
          </div>
        </div>
        <img
          src={member.image}
          alt={`${member.name}, ${member.title}`}
          className="object-cover"
          style={{ position: 'absolute', bottom: '0px', right: '0px', width: '40%', height: '88%' }}
        />
      </div>
    </div>
  );

  // Modern Board member card
  const BoardMemberCard: React.FC<{ member: TeamMember; profileId: string; section: string }> = ({ member, profileId, section }) => (
    <div 
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 overflow-hidden relative h-full flex flex-col"
      onClick={() => onProfileChange(profileId, section)}
    >
      <div className="p-8 flex-1 flex flex-col">
        {/* Header Section */}
        <div className="flex items-start space-x-6 mb-6">
          {/* Professional Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <img
                src={member.image}
                alt={`${member.name}, ${member.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#43ab04] rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#04548c] transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-gray-600 font-medium mb-2">
              {member.title}
            </p>
          </div>
        </div>

        {/* Bio Preview */}
        <div className="mb-6 flex-1">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {member.bio ? member.bio.substring(0, 120) + '...' : 'Experienced leader driving strategic vision and sustainable growth initiatives.'}
          </p>
        </div>

        {/* Action Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#04548c] to-[#023d67] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">
                {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </span>
            </div>
            <span className="text-xs text-gray-500 font-medium">ESG Talent</span>
          </div>
          
          <button className="text-[#04548c] hover:text-[#023d67] font-semibold text-sm flex items-center group-hover:translate-x-1 transition-all duration-300">
            View Profile
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Subtle hover accent */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#04548c] to-[#43ab04] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
  const jediPrinciples = [
    {
      icon: Scale,
      title: 'Justice',
      description: 'Ensuring fair and equitable treatment for all stakeholders in our recruitment and advisory processes.'
    },
    {
      icon: Heart,
      title: 'Equity',
      description: 'Creating equal opportunities and removing barriers to advancement for underrepresented communities.'
    },
    {
      icon: Diversity3,
      title: 'Diversity',
      description: 'Celebrating and leveraging diverse perspectives, backgrounds, and experiences to drive innovation.'
    },
    {
      icon: Inclusivity,
      title: 'Inclusion',
      description: 'Fostering environments where everyone feels valued, respected, and empowered to contribute their best.'
    }
  ];

  return (
    <AIOptimizedContent
      entityType="organization"
      summary="ESG Talent is a global team of ESG professionals committed to building sustainable organizations through exceptional talent. Our team includes board members, executive search consultants, and sourcing specialists with expertise across environmental, social, and governance domains."
      keyFacts={[
        "Global team of ESG and sustainability experts",
        "Board includes experienced sustainability and business leaders",
        "Executive search consultants across North America, Europe, Asia-Pacific",
        "Specialized sourcing team for ESG Talent identification",
        "Committed to JEDI principles: Justice, Equity, Diversity, Inclusion",
        "Deep expertise in climate risk, sustainable finance, ESG reporting"
      ]}
      className="min-h-screen"
    >
    <div className="min-h-screen">
      <SEOHead
        title="About ESG Talent - Global ESG Leadership Network & Sustainability Experts"
        description="Meet our global ESG leadership network. Best ESG recruitment agency with sustainability experts across APAC, Europe, and Middle East. Learn how we find sustainability talent for Fortune 500 companies."
        keywords="global ESG leadership network, ESG talent network, sustainability experts, best ESG recruitment agencies, where to find sustainability talent, ESG leadership hiring, diversity and inclusion in ESG"
        url="/about"
        structuredData={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'About Us', url: 'https://esg-talent.com/about-us' }
          ])
        ]}
      />
      
      <GEOOptimizer
        title="About ESG Talent - Global ESG Executive Search Team"
        description="Meet our global team of ESG professionals. Learn about our mission, values, and commitment to building sustainable organizations through exceptional talent."
        keywords={['ESG team', 'sustainability experts', 'executive search consultants', 'ESG advisory board', 'JEDI principles', 'diversity equity inclusion']}
        content={generateGEOContent('organization', { focus: 'team' })}
        citations={generateGEOCitations('organization')}
      />
      
      {/* Hero Section */}
<section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c]">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/About Us.png" 
            alt="About ESG Talent"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04548c]/80 via-[#023d67]/70 to-[#04548c]/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl font-bold mb-6 leading-tight">About ESG Talent</h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                We set the standard for global executive search, recruitment and business advisory in sustainability and ESG
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">Our Vision and Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Shaping the future of sustainability through exceptional talent and strategic leadership
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <ScrollAnimationWrapper animation="slide-left">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <div className="space-y-3 text-base text-gray-600 leading-relaxed">
                  <p className="mb-4">We help shape organizations by providing world-class ESG Talent to lead the future of sustainability.</p>
                  <p className="mb-4">We empower organizations to thrive in a sustainable future by strategically placing world-class ESG Talent at their core.</p>
                  <p>We are the catalyst that transforms businesses, equipping them with the leadership and expertise needed to drive impactful environmental, social, and governance initiatives that shape a better tomorrow.</p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Mission */}
            <ScrollAnimationWrapper animation="slide-right">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <div className="space-y-3 text-base text-gray-600 leading-relaxed">
                  <p className="font-semibold text-[#04548c] mb-4">Our ESG Talent: Empowering Organizations, Transforming Futures, Through People.</p>
                  <p className="mb-4">At ESG Talent, we are driven by a singular mission: to cultivate visionary leaders who propel sustainability, innovation, and impact to organizations that need them. We connect organizations with exceptional ESG professionals who redefine industries, champion ethical governance, and accelerate the transition to a more resilient world.</p>
                  <p className="mb-4">Through strategic talent hiring, leadership empowerment, and global collaboration, we bridge the gap between ambition and action, ensuring that every hire becomes a catalyst for meaningful change.</p>
                  <p className="font-semibold text-[#04548c]">Together, we shape a future where sustainability isn't just a goal—but a standard.</p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Values - JEDI Principles */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">Our Values: The JEDI Principles</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Justice, Equity, Diversity, and Inclusion form the foundation of everything we do at ESG Talent
              </p>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jediPrinciples.map((principle, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 50}
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 text-center h-full border border-gray-100">
                  <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section 
        className="py-10 transition-colors duration-300"
        style={{
          backgroundColor: scrollY > 100 ? '#f8f9fa' : '#e5e7eb'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">Meet the people who drive performance.</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our exceptional professionals driving sustainable transformation across global organizations
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Board Members */}
          <div id="board-members" className="mb-10">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Board of Directors</h4>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our distinguished board members bring decades of experience in sustainability, business strategy, and organizational leadership
                </p>
              </div>
            </ScrollAnimationWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {boardMembers.map((member, index) => (
                <ScrollAnimationWrapper 
                  key={index}
                  animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                  delay={index * 50}
                >
                  <BoardMemberCard
                    member={member}
                    profileId={member.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}
                    section="board-members"
                  />
                </ScrollAnimationWrapper>
              ))}
            </div>

            {/* Executive Team */}
            {filteredExecutiveTeam.length > 0 && (
              <div id="executive-search" className="mb-10">
                <ScrollAnimationWrapper animation="fade-up">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Executive Search Consultants</h4>
                </ScrollAnimationWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredExecutiveTeam.map((member, index) => (
                    <ScrollAnimationWrapper 
                      key={index}
                      animation="fade-up"
                      delay={index * 50}
                    >
                      <HeidrickTeamCard
                        member={member}
                        profileId={member.name.toLowerCase().replace(/\s+/g, '-')}
                        section="executive-search"
                      />
                    </ScrollAnimationWrapper>
                  ))}
                </div>
              </div>
            )}

            {/* Sourcing Team */}
            {filteredSourcingTeam.length > 0 && (
              <div id="sourcing-team" className="mb-8">
                <ScrollAnimationWrapper animation="fade-up">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sourcing Team</h4>
                </ScrollAnimationWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredSourcingTeam.map((member, index) => (
                    <ScrollAnimationWrapper 
                      key={index}
                      animation="fade-up"
                      delay={index * 50}
                    >
                      <HeidrickTeamCard
                        member={member}
                        profileId={member.name.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n')}
                        section="sourcing-team"
                      />
                    </ScrollAnimationWrapper>
                  ))}
                </div>
              </div>
            )}

            {/* No Results Message */}
            {filteredExecutiveTeam.length === 0 && filteredSourcingTeam.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No consultants found for the selected filters.</p>
                <button
                  onClick={() => {
                    setSelectedRegion('All');
                  }}
                  className="mt-4 text-[#04548c] font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Executive Search ESG Pledge */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">Our Executive Search ESG Pledge</h2>
              <h3 className="text-xl text-[#04548c] font-semibold mb-6">Shaping a Sustainable Future, One Leader at a Time</h3>
            </div>
          </ScrollAnimationWrapper>
          
          <div className="max-w-5xl mx-auto">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="bg-gray-50 p-6 rounded-2xl mb-6 border border-gray-100">
                <p className="text-base text-gray-700 leading-relaxed">
                  At ESG Talent, we recognize that the future of business is inextricably linked to the future of our planet and society. As a leading executive search firm dedicated to ESG, we don't just find leaders; we champion the very principles they embody. Our pledge to ESG is deeply woven into the fabric of our operations, our methodologies, and our unwavering commitment to our clients and the world.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="space-y-4">
              <ScrollAnimationWrapper animation="fade-up">
                <h4 className="text-2xl font-bold text-[#04548c] text-center mb-6">We pledge to:</h4>
              </ScrollAnimationWrapper>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollAnimationWrapper animation="slide-left" delay={0}>
                  <div className="bg-gradient-to-br from-[#04548c] to-[#023d67] text-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <span className="text-[#04548c] font-bold text-2xl">1</span>
                    </div>
                    <h5 className="text-lg font-semibold mb-3 text-center">Champion ESG in Our Own Operations</h5>
                    <p className="text-blue-100 leading-relaxed">
                      We commit to embedding Environmental, Social, and Governance principles within our own firm. This means striving for operational excellence that minimizes our environmental footprint, fostering an inclusive and equitable workplace that prioritizes the well-being and development of our employees, and upholding the highest standards of integrity and governance in all our business practices. Our actions will reflect the values we seek in the leaders we place.
                    </p>
                  </div>
                </ScrollAnimationWrapper>
                
                <ScrollAnimationWrapper animation="fade-up" delay={100}>
                  <div className="bg-gradient-to-br from-[#04548c] to-[#023d67] text-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <span className="text-[#04548c] font-bold text-2xl">2</span>
                    </div>
                    <h5 className="text-lg font-semibold mb-3 text-center">Advance ESG Leadership with Purpose</h5>
                    <p className="text-blue-100 leading-relaxed">
                      Our core mission is to strategically identify, attract, and secure world-class executive talent who are not only experts in their fields but are also genuine champions of sustainability and responsible business practices. We pledge to rigorously assess candidates not just on their technical prowess, but on their demonstrated commitment to ESG, their capacity to drive impactful change, and their vision for a more sustainable future. We will actively seek out diverse leaders who bring varied perspectives to the ESG landscape.
                    </p>
                  </div>
                </ScrollAnimationWrapper>
                
                <ScrollAnimationWrapper animation="slide-right" delay={200}>
                  <div className="bg-gradient-to-br from-[#04548c] to-[#023d67] text-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <span className="text-[#04548c] font-bold text-2xl">3</span>
                    </div>
                    <h5 className="text-lg font-semibold mb-3 text-center">Be Catalysts for Sustainable Transformation</h5>
                    <p className="text-blue-100 leading-relaxed">
                      We understand that the leaders we place are pivotal in shaping organizational culture and strategy. We pledge to act as true partners to our clients, guiding them in understanding the critical importance of robust ESG leadership. By connecting visionary companies with transformative ESG executives, we commit to accelerating the global transition towards a more sustainable, equitable, and resilient economy. Our work is a direct investment in the future of responsible business.
                    </p>
                  </div>
                </ScrollAnimationWrapper>
              </div>
              
              <ScrollAnimationWrapper animation="fade-up" delay={300}>
                <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 mt-6 shadow-sm">
                  <p className="text-base text-gray-700 font-semibold leading-relaxed">
                    This is more than a statement; it is our operational philosophy and our promise. We are dedicated to building a future where impactful ESG leadership is not just an aspiration, but a standard, ensuring that every executive we place contributes meaningfully to a better world.
                  </p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

    </div>
    </AIOptimizedContent>
  );
};

export default AboutPage;