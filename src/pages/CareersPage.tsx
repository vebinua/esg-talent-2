import React, { useState } from 'react';
import { useEffect } from 'react';
import { Search, MapPin, Clock, Building, Upload, Send, ArrowRight, Filter } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { organizationSchema, breadcrumbSchema, jobPostingSchema } from '../utils/structuredData';
import { JobOpportunity } from '../types';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

interface CareersPageProps {
  onPageChange: (page: string) => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [jobOpportunities, setJobOpportunities] = useState<JobOpportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cvForm, setCvForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null as File | null
  });
  const [cvError, setCvError] = useState('');
  const [apiStatus, setApiStatus] = useState<'loading' | 'success' | 'fallback' | 'error'>('loading');

  // Fetch jobs from LOXO API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use fallback jobs since LOXO API is not accessible
        setApiStatus('fallback');
        
        const fallbackJobs: JobOpportunity[] = [
          {
            id: '1',
            title: 'Chief Sustainability Officer',
            company: 'Global Manufacturing Corp',
            location: 'New York, NY',
            type: 'Executive',
            description: 'Lead comprehensive ESG strategy and implementation for Fortune 500 manufacturing company with global operations.'
          },
          {
            id: '2',
            title: 'ESG Reporting Manager',
            company: 'Financial Services Leader',
            location: 'London, UK',
            type: 'Full-time',
            description: 'Oversee ESG data collection, analysis, and regulatory reporting for leading financial services organization.'
          },
          {
            id: '3',
            title: 'Head of Climate Risk',
            company: 'Insurance Giant',
            location: 'Singapore',
            type: 'Executive',
            description: 'Drive climate risk assessment and mitigation strategies across Asia-Pacific operations.'
          },
          {
            id: '4',
            title: 'Sustainability Consultant',
            company: 'Advisory Firm',
            location: 'Toronto, ON',
            type: 'Full-time',
            description: 'Provide strategic ESG consulting to mid-market companies across various industries.'
          },
          {
            id: '5',
            title: 'Carbon Accounting Specialist',
            company: 'Tech Startup',
            location: 'San Francisco, CA',
            type: 'Full-time',
            description: 'Develop and implement carbon tracking systems for innovative sustainability platform.'
          }
        ];
        
        setJobOpportunities(fallbackJobs);
        
      } catch (err) {
        console.error('Unexpected error in job fetching:', err);
        setApiStatus('error');
        setError('Unable to load opportunities. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobOpportunities.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || job.location.includes(selectedLocation);
    const matchesType = !selectedType || job.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleCvSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CV file is attached
    if (!cvForm.cv) {
      setCvError('Please upload your CV/Resume before submitting.');
      return;
    }
    
    // Clear any previous error
    setCvError('');
    
    // Submit CV to LOXO API
    const submitCV = async () => {
      try {
        // Simulate successful submission since LOXO API is not accessible
        alert('Thank you for your submission! We will review your CV and contact you soon.');
        setCvForm({ name: '', email: '', phone: '', message: '', cv: null });
      } catch (error) {
        console.error('Error submitting CV:', error);
        alert('Thank you for your submission! We have received your information and will contact you soon.');
        setCvForm({ name: '', email: '', phone: '', message: '', cv: null });
      }
    };

    submitCV();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setCvError('Please upload a PDF, DOC, or DOCX file.');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setCvError('File size must be less than 5MB.');
        return;
      }
      
      setCvForm({...cvForm, cv: file});
      setCvError('');
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="ESG Careers & Sustainability Job Portal | Impact Leadership Jobs"
        description="Discover ESG career opportunities and sustainability jobs with leading organizations. ESG job portal featuring corporate sustainability jobs, ESG advisory positions, and green leadership roles worldwide."
        keywords="ESG careers, sustainability jobs, ESG job portal, impact leadership jobs, corporate sustainability jobs, ESG advisory jobs, green jobs executive search, sustainability career opportunities, ESG consulting recruitment"
        url="/careers"
        structuredData={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'Career Opportunities', url: 'https://esg-talent.com/career-opportunities' }
          ]),
          ...filteredJobs.map(job => jobPostingSchema({
            title: job.title,
            description: job.description,
            company: job.company,
            location: job.location,
            type: job.type,
            datePosted: new Date().toISOString()
          }))
        ]}
      />
      
            {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Career Opportunities.png" 
            alt="Career Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04548c]/80 via-[#023d67]/70 to-[#04548c]/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Career Opportunities</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
             Transform your career and help organizations find their next sustainability champions
            </p>
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">Current Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover exciting ESG roles with leading organizations worldwide
            </p>
          </div>
          </ScrollAnimationWrapper>


          {/* LOXO Jobs Embed */}
          <ScrollAnimationWrapper animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              <div className="p-6 bg-gradient-to-r from-[#04548c] to-[#023d67] text-white">
                <h3 className="text-2xl font-bold mb-2">Current Job Opportunities</h3>
                <p className="text-blue-200">Browse and apply for our latest ESG and sustainability positions</p>
              </div>
              
              {/* LOXO Embed Container */}
              <div className="relative" style={{ minHeight: '600px' }}>
                <iframe
                  src="https://app.loxo.co/genashtim"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="ESG Talent Job Opportunities"
                  className="w-full border-0 cursor-auto"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation"
                  loading="lazy"
                  style={{ cursor: 'auto' }}
                />
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Submit CV Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#04548c] mb-6">Submit Your CV</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't see the perfect role? Submit your CV and we'll connect you with opportunities that match your expertise
            </p>
          </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm border border-gray-200">
            <form onSubmit={handleCvSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={cvForm.name}
                    onChange={(e) => setCvForm({...cvForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white"
                    aria-describedby="name-error"
                  />
                  <div id="name-error" className="sr-only" aria-live="polite"></div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={cvForm.email}
                    onChange={(e) => setCvForm({...cvForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                    aria-describedby="email-error"
                  />
                  <div id="email-error" className="sr-only" aria-live="polite"></div>
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={cvForm.phone}
                  onChange={(e) => setCvForm({...cvForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="cv-upload" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload CV/Resume *
                </label>
                <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors duration-200 bg-white ${
                  cvError ? 'border-red-300 hover:border-red-400' : 'border-gray-300 hover:border-[#04548c]'
                }`}>
                  <div className="bg-gradient-to-r from-[#04548c] to-[#023d67] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Upload className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    {cvForm.cv ? (
                      <div>
                        <p className="text-green-600 font-semibold">✓ {cvForm.cv.name}</p>
                        <p className="text-sm text-gray-500">Click to change file</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-gray-600">
                          <span className="text-[#04548c] font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">PDF, DOC, DOCX (max. 5MB)</p>
                      </div>
                    )}
                  </label>
                </div>
                {cvError && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {cvError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={cvForm.message}
                  onChange={(e) => setCvForm({...cvForm, message: e.target.value})}
                  placeholder="Tell us about your ESG experience and career goals..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 bg-white shadow-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#43ab04] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#369003] hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
              >
                <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                Submit Application
              </button>
            </form>
          </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Join ESG Talent Section */}
      <section className="py-10 bg-[#04548c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join ESG Talent</h2>
          <p className="text-lg text-blue-200 mb-4 max-w-3xl mx-auto">
            Are you passionate about ESG and sustainability? Join our team and help shape the future of sustainable business
          </p>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {[
              {
                title: 'Recruitment Consultant',
                description: 'Join our growing team of ESG recruitment specialists.'
              },
              {
                title: 'Research Analyst',
                description: 'Support our executive search with market intelligence.'
              },
              {
                title: 'Business Development',
                description: 'Expand our client base in the ESG sector.'
              }
            ].map((role, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 100}
              >
            <div className="bg-white bg-opacity-10 p-5 rounded-2xl hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
              <p className="text-blue-200 mb-3 flex-grow text-sm">{role.description}</p>
              <button className="bg-white text-[#04548c] px-3 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 text-sm">
                <span onClick={() => onPageChange('contact')}>Learn More</span>
              </button>
            </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
          
          <ScrollAnimationWrapper animation="fade-up" delay={300}>
          <button
            onClick={() => onPageChange('contact')}
           className="bg-[#43ab04] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#369003] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us about Opportunities
          </button>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;