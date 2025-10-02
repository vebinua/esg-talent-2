// profile page code

import React from 'react';
import { ArrowLeft, ArrowRight, Mail, Phone, Linkedin, MapPin, Building, Quote, Award, Calendar, Users, Star, Briefcase, Globe, Target, Share2, Facebook, Twitter } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { personSchema, breadcrumbSchema } from '../utils/structuredData';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { trackESGEvent } from '../utils/gtm';

interface ProfilePageProps {
  profileId: string;
  onPageChange: (page: string) => void;
}

interface ProfileData {
  id: string;
  name: string;
  title: string;
  image: string;
  region?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  bio: string;
  type: 'board' | 'executive' | 'sourcing';
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profileId, onPageChange }) => {
  const profiles: { [key: string]: ProfileData } = {
    'thomas-ng': {
      id: 'thomas-ng',
      name: 'Thomas Ng',
      title: 'Board Member',
      image: '/thomas ng.jpg',
      bio: `Born and raised in a lower middle-class family in Penang, Thomas worked to support himself through university in Auckland, New Zealand. Recruited on campus by PwC, he worked there for a year before returning to Malaysia to help Swiss company Brown Boveri start up their operations there. With the merger that formed Asea Brown Boveri (ABB) in 1988, Thomas was transferred to Hong Kong as an expatriate Chief Financial Officer for ABB's operations in China and Hong Kong.

In 1991, he was assigned to ABB Power Ventures in Zurich to join a team to restructure ABB's acquisitions in Eastern Europe. Ironic that ABB would get a Chinaman from their HK/China operations to help "westernize" their Eastern European operations.  Thomas lived in Wroclaw, Poland for more than a year,  and moved his young family there.

Upon returning to Hong Kong, Thomas was assigned to start up ABB's first few joint ventures in China. He set up ABB China Investments Ltd and was its first Managing Director.
`,
      type: 'board'
    },
    'stella-wong': {
      id: 'stella-wong',
      name: 'Stella Wong',
      title: 'Board Member',
      image: '/stella wong.jpg',
      bio: `For over a decade, Stella has served on the board of Genashtim, a B Corp certified organization. She has been instrumental in helping co-create and expand the company's HR suite of services for effective deployment toward organizational and people development.

With 30 years of experience in HR management, Stella has driven HR transformation for over two decades. She has led local and regional teams in top 100 corporations, including Sumitomo Banking Corporation, Hongkong and Shanghai Bank, AIA, and American Express, primarily based in Singapore.

Stella holds a bachelor's degree in Business Administration from the National University of Singapore.
`,
      type: 'board'
    },
    'peter-brace': {
      id: 'peter-brace',
      name: 'Dr. Peter Brace',
      title: 'Board Member',
      image: '/peter brace.jpeg',
      bio: `Dr. Brace is an experienced consultant and trainer specializing in people systems, processes, psychological safety, and organizational change. With a PhD in sustainability ethics and behavior, he possesses a strong foundation in solution development, influence, persuasion, and strategic thinking.

As the Co-founder and CEO of Human Capital Realisation since 2007, Dr. Brace excels as a Psychological Safety and ESG consultant, driving strategic planning solutions for human capital management. His career highlights include demonstrating leadership in CRM solutions and financial services verticals at IBM Australia, developing and implementing Telstra's customer service systems strategy as a Consultant to the CIO for Telstra. Dr. Brace's proactive and consultative style delivers solid results, as reflected in his successful tenure as the President of the School Council at Yarra Primary School.

Dr. Brace has a PhD in Philosophy from the Swinburne University of Technology.`,
      type: 'board'
    },
    'markus-dietrich': {
      id: 'markus-dietrich',
      name: 'Markus Dietrich',
      title: 'Board Member',
      image: '/markus dietrich.jpeg',
      bio: `Markus has several decades of experience in European IT entrepreneurship before he transitioned to sustainability and social entrepreneurship in Southeast Asia. Currently, he aids governments worldwide in guiding private sector development toward achieving social impact.

After advising governments across Asia and Africa through the Inclusive Business Action Network, Markus co-founded social enterprises that support solar energy and inclusive business markets. Today, he uses his expertise to drive private sector development towards meaningful social change. He works on a global scale to help governments and organizations create sustainable, inclusive, and impactful solutions.

Markus holds a Master of Science in International Community Economic Development from Southern New Hampshire University and a Bachelor of Science in Business Studies from Bayes Business School.
`,
      type: 'board'
    },
    'dr-peter-brace': {
      id: 'dr-peter-brace',
      name: 'Dr. Peter Brace',
      title: 'Board Member',
      image: '/peter brace.jpeg',
      bio: `Dr. Brace is an experienced consultant and trainer specializing in people systems, processes, psychological safety, and organizational change. With a PhD in sustainability ethics and behavior, he possesses a strong foundation in solution development, influence, persuasion, and strategic thinking.

As the Co-founder and CEO of Human Capital Realisation since 2007, Dr. Brace excels as a Psychological Safety and ESG consultant, driving strategic planning solutions for human capital management. His career highlights include demonstrating leadership in CRM solutions and financial services verticals at IBM Australia, developing and implementing Telstra's customer service systems strategy as a Consultant to the CIO for Telstra. Dr. Brace's proactive and consultative style delivers solid results, as reflected in his successful tenure as the President of the School Council at Yarra Primary School.

Dr. Brace has a PhD in Philosophy from the Swinburne University of Technology.`,
      type: 'board'
    },
    'sasho-boshevski': {
      id: 'sasho-boshevski',
      name: 'Sasho Boshevski',
      title: 'Managing Director',
      image: '/Sasho-1.png',
      region: 'North America',
      email: 'sasho@esg-talent.com',
      phone: '+389 78 436 551',
      linkedin: 'https://www.linkedin.com/in/sasho-boshevski-437912103  ',
      bio: 'Sasho brings over 15 years of executive search experience in the ESG and sustainability sector. He has successfully placed C-suite executives across renewable energy, sustainable finance, and environmental consulting firms. His deep understanding of ESG frameworks and regulatory landscapes makes him a trusted advisor to Fortune 500 companies.',
      type: 'executive'
    },
    'giordano-morello': {
      id: 'giordano-morello',
      name: 'Giordano Morello',
      title: 'Executive Search Consultant',
      image: '/Giordano.png',
      region: 'Europe',
      email: 'giordano@esg-talent.com',
      phone: '+55 17 981098838',
      linkedin: 'https://www.linkedin.com/in/giordano-morello/  ',
      bio: `Giordano specializes in ESG executive search across Europe and Latin America, bringing a unique combination of legal expertise and sustainability knowledge to talent acquisition. With a strong background in regulatory compliance and ESG frameworks, he has successfully placed senior ESG leaders in financial services, consulting firms, and multinational corporations.`,
      type: 'executive'
    },
    'alma-vazquez': {
      id: 'alma-vazquez',
      name: 'Alma Vazquez',
      title: 'Executive Search Consultant',
      image: '/Alma Square 1.png',
      region: 'Europe',
      email: 'alma@esg-talent.com',
      phone: '+52 686 210 2188',
      linkedin: 'https://www.linkedin.com/in/alma-vazquez-jimenez-0b0963b0/  ',
      bio: 'Alma is an Independent Verification Analyst with a global B Lab partner, where she helps companies strengthen their social and environmental practices. With over eight years of professional experience across impact assessment, recruitment support, customer relations, and international logistics, she brings a strong foundation in both operational and sustainability-focused roles. Alma holds degrees in International Business and Accounting and values collaboration, continuous learning, and positive impact.',
      type: 'executive'
    },
    'robin-low': {
      id: 'robin-low',
      name: 'Robin Low',
      title: 'Executive Search Consultant',
      image: '/Robin (1).png',
      region: 'Asia-Pacific',
      email: 'robin@esg-talent.com',
      phone: '+1 857 919 9700',
      linkedin: 'https://www.linkedin.com/in/robinlow88/  ',
      bio: `Robin is a seasoned veteran in the ESG space, with extensive experience across Europe, Latin America, the USA, and Asia. He has collaborated with NGOs, multinational corporations, and government agencies to drive sustainable and socially responsible initiatives.

He co-founded Relief 2.0 and the Civil Innovation Lab, where he worked directly with refugees and internally displaced survivors of disasters and wars. He also authored a white paper proposing a rebranding of the term "refugees," highlighting the skills, education, and potential contributions of displaced individuals to their host communities. 

Robin has worked with Nestle, Essilor, and Menarini on impactful design solutions and brand purpose. Over the past five years, he has worked closely with B Lab and B Lab certified companies, deepening his expertise in impact measurement and certification.

`,
      type: 'executive'
    },
    'bernard-nathan': {
      id: 'bernard-nathan',
      name: 'Bernard Nathan',
      title: 'Executive Search Consultant',
      image: '/Nathan-1.png',
      region: 'Asia-Pacific',
      email: 'bernard@esg-talent.com',
      phone: '+60 112 317 9002',
      linkedin: 'https://www.linkedin.com/in/bernard-nathan-744b28197/  ',
      bio: `With over three years of experience reviewing ESG assessments and related data to ensure accuracy and efficiency in the highly sought-after B Corp certification, Bernard guides companies through legal frameworks, providing actionable recommendations to improve their ESG performance across governance, workers, community, environment, and customers. He has a marketing background and is the founder of two ESG-focused startups. 

Having worked with major clients, Bernard generated over RM50 million in revenue and employs more than 200 staff to enhance their ESG practices. Known for his efficiency, strong customer service, and client management skills, he is committed to fostering a greener, more equitable world while supporting marginalized communities. Outside of work, he enjoys reading philosophy and self-improvement books.

Bernard has a bachelor's degree in Business Management (General Management), a TESOL/TEFL certificate, and has served as a mentor to new ESG team members within his organization. 
`,
      type: 'executive'
    },
    'red-pioquinto': {
      id: 'red-pioquinto',
      name: 'Red Pioquinto',
      title: 'Executive Search Consultant',
      image: '/Red Square.png',
      region: 'Asia-Pacific',
      email: 'red@esg-talent.com',
      phone: '+63 997 947 3762',
      linkedin: 'https://www.linkedin.com/in/red-pioquinto-692402183/  ',
      bio: `With close to six years of experience rooted in the Behavioral Sciences, Red specializes in evaluating businesses on responsible and sustainable entrepreneurship. She's skilled in conducting interviews, reviews, and screenings to assess social and environmental practices. She previously supported raiSE Singapore in the onboarding of social enterprise aspirants and currently serves as an independent verification analyst with B Lab, reviewing companies pursuing B Corp Certification. Beyond her professional work, Red is deeply passionate about JEDI (Justice, Equity, Diversity, and Inclusion), human rights, coffee, and cats.`,
      type: 'executive'
    },
    
    'nur-ashikeen-iqbal': {
  id: 'nur-ashikeen-iqbal',
  name: 'Nur Ashikeen Iqbal',
  title: 'Executive Search Consultant',
  image: '/Kimi Sqaure.png',
  region: 'Asia-Pacific',
  email: 'kimi@esg-talent.com',
  phone: '+60 12 482 1734',
  linkedin: 'https://www.linkedin.com/in/kimi-nur-ashikeen/  ',
  bio: `Kimi has assumed multiple roles at Genashtim, a social enterprise and Certified B Corporation for nearly a decade. She specializes in ESG (Environmental, Social, and Governance) verification for companies seeking B Corp Certification. Her expertise lies in assessing environmental impact, social responsibility, and governance practices across diverse industries, ensuring alignment with B Lab standards. Kimi's global portfolio includes verification work for small enterprises (SEA) in R1 and R2 recertifications, small-medium enterprises (SMEA) and R3 recertifications, medium enterprises and R4 recertifications, and finance Addenda companies.`,
  type: 'executive'
},
    'jane-perena': {
      id: 'jane-perena',
      name: 'Jane Pereña',
      title: 'Sourcing Specialist',
      image: '/Melicia Jane - updated.png',
      region: 'Asia-Pacific',
      email: 'jane@esg-talent.com',
      phone: '+63 916 932 9954',
      linkedin: 'https://www.linkedin.com/in/mjnperena/  ',
      bio: 'Committed to sustainability and mental well-being, Jane is an experienced administrative and research professional skilled in recruitment support, membership sourcing, and stakeholder engagement.  She has coordinated international trade shows, written successful grants,  bid proposals for government and development agencies, and produced industry reports. With experience across diverse sectors, including financial services and environmental conservation, Jane brings strong database management and cross-functional support skills to drive organizational success.',
      type: 'sourcing'
    },
    'vicky-suarez': {
      id: 'vicky-suarez',
      name: 'Vicky Suarez',
      title: 'Sourcing Specialist',
      image: '/Vicky Square updated.png',
      region: 'North America',
      email: 'vicky@esg-talent.com',
      phone: '+63 923 501 0432',
      linkedin: 'https://www.linkedin.com/in/maria-victoria-suarez-36a74121/  ',
      bio: 'With extensive experience in ESG research and sustainability engagement, Vicky currently serves as an ESG Research Specialist at the ESG Business Institute, where she connects with professionals and organizations committed to responsible business practices. Her work focuses on sourcing and engaging ESG practitioners worldwide, fostering collaboration, and expanding networks that drive sustainable impact. Leveraging over a decade of expertise in recruitment, communication, and stakeholder engagement, Vicky brings a holistic approach that integrates diversity, equity, and inclusion into every interaction. Passionate about advancing ESG principles, she actively contributes to building strong, values-driven communities that support long-term change.',
      type: 'sourcing'
    }
  };

  const profile = profiles[profileId];

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
          <button
            onClick={() => onPageChange('about')}
            className="text-[#04548c] hover:text-blue-700 font-semibold"
          >
            ← Back to About
          </button>
        </div>
      </div>
    );
  }

  // Track profile view
  React.useEffect(() => {
    trackESGEvent.profileView(profile.name, profile.type);
  }, [profile.name, profile.type]);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${profile.name} - ${profile.title} at ESG Talent`}
        description={profile.bio.substring(0, 160) + '...'}
        keywords={`${profile.name.toLowerCase()}, ${profile.title.toLowerCase()}, ESG consultant, sustainability expert, executive search`}
        url={`/profile/${profileId}`}
        type="profile"
        author={profile.name}
        image={profile.image}
        structuredData={[
          personSchema({
            name: profile.name,
            title: profile.title,
            bio: profile.bio,
            image: `https://esg-talent.com${profile.image}`,
            email: profile.email,
            linkedin: profile.linkedin
          }),
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'About Us', url: 'https://esg-talent.com/about' },
            { name: profile.name, url: `https://esg-talent.com/profile/${profileId}` }
          ])
        ]}
      />
      
      {/* Clean Hero Section */}
      <section className="bg-gradient-to-br from-[#04548c] to-[#023d67] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <button
              onClick={() => onPageChange('about')}
              className="text-blue-200 hover:text-white font-medium mb-8 flex items-center transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Team
            </button>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <ScrollAnimationWrapper animation="fade-up">
              <div>
                <div className="relative w-80 h-80 mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
                  <img
                    src={profile.image}
                    alt={`${profile.name}, ${profile.title}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </ScrollAnimationWrapper>
            
            {/* Profile Info */}
            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{profile.name}</h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-6 leading-relaxed">{profile.title}</p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  {profile.email && (
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-blue-300" />
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-blue-200 hover:text-white transition-colors duration-200"
                      >
                        {profile.email}
                      </a>
                    </div>
                  )}
                  {profile.phone && (
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-blue-300" />
                      <a
                        href={`tel:${profile.phone}`}
                        className="text-blue-200 hover:text-white transition-colors duration-200"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  )}
                  {profile.linkedin && (
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 mr-3 text-blue-300" />
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-white transition-colors duration-200"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Social Media Sharing */}
                <div className="mt-6 pt-6 border-t border-blue-300/30">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200 text-sm font-medium">Share Profile:</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          const title = `${profile.name} - ${profile.title} at ESG Talent`;
                          const summary = `Meet ${profile.name}, ${profile.title} at ESG Talent. ${profile.bio.substring(0, 150)}...`;
                          
                          // Use LinkedIn's simpler sharing URL format
                          const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                          window.open(linkedinUrl, '_blank', 'width=600,height=400');
                        }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-all duration-200 group"
                        aria-label="Share on LinkedIn"
                        title="Share on LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-200" />
                      </button>
                      
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          const title = `${profile.name} - ${profile.title} at ESG Talent`;
                          const quote = `${profile.bio.substring(0, 200)}...`;
                          const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(quote)}&hashtag=${encodeURIComponent('#ESGTalent')}`;
                          window.open(facebookUrl, '_blank', 'width=600,height=400');
                        }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#1877f2] transition-all duration-200 group"
                        aria-label="Share on Facebook"
                        title="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-200" />
                      </button>
                      
                      <button
                        onClick={() => {
                          const url = window.location.href;
                          const title = `${profile.name} - ${profile.title} at ESG Talent`;
                          const summary = `${profile.bio.substring(0, 200)}...`;
                          const text = `${title}\n\n${summary}\n\n${url}`;
                          const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                          window.open(twitterUrl, '_blank', 'width=600,height=400');
                        }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#1da1f2] transition-all duration-200 group"
                        aria-label="Share on Twitter"
                        title="Share on Twitter"
                      >
                        <Twitter className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-200" />
                      </button>
                      
                      <button
                        onClick={() => {
                          if (navigator.share) {
                            const title = `${profile.name} - ${profile.title} at ESG Talent`;
                            const text = `${profile.bio.substring(0, 200)}...`;
                            navigator.share({
                              title: title,
                              text: text,
                              url: window.location.href,
                            });
                          } else {
                            const title = `${profile.name} - ${profile.title} at ESG Talent`;
                            const summary = `${profile.bio.substring(0, 200)}...`;
                            const shareText = `${title}\n\n${summary}\n\n${window.location.href}`;
                            navigator.clipboard.writeText(shareText);
                            alert('Profile information copied to clipboard!');
                          }
                        }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 group"
                        aria-label="Share profile"
                        title="Share or copy link"
                      >
                        <Share2 className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
              <div className="prose prose-lg max-w-none">
                {profile.bio.split('\n\n').map((paragraph, index) => (
                  <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

    </div>
  );
};

export default ProfilePage;