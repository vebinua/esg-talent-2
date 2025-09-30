import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Filter, Clock, Tag, Eye } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

interface InsightsPageProps {
  onPageChange: (page: string) => void;
  onArticleChange: (articleId: string) => void;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  views?: string;
}

const InsightsPage: React.FC<InsightsPageProps> = ({ onPageChange, onArticleChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles: Article[] = [
    {
      id: '1',
      title: 'The Future of ESG Leadership: Trends Shaping 2024',
      excerpt: 'Explore the emerging trends in ESG leadership and how organizations are adapting their strategies for sustainable growth in an evolving regulatory landscape.',
      author: 'Nur Ashikeen Iqbal',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      views: '2.4k'
    },
    {
      id: '2',
      title: 'Building Diverse ESG Teams: A Strategic Imperative',
      excerpt: 'Discover why diversity in ESG teams drives better outcomes and learn practical strategies for building inclusive sustainability leadership.',
      author: 'Alma Vazquez',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Diversity & Inclusion',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      views: '1.8k'
    },
    {
      id: '3',
      title: 'Climate Risk Management: Executive Perspectives',
      excerpt: 'Insights from C-suite executives on managing climate risks and opportunities in today\'s business environment.',
      author: 'Red Pioquinto',
      date: 'December 5, 2024',
      readTime: '10 min read',
      category: 'Climate',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      views: '3.1k'
    },
    {
      id: '4',
      title: 'The Rise of Sustainable Finance Professionals',
      excerpt: 'How the sustainable finance sector is creating new career opportunities and what skills are in highest demand.',
      author: 'Nur Ashikeen Iqbal',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Finance',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      views: '2.7k'
    },
    {
      id: '5',
      title: 'ESG Reporting: Navigating New Regulations',
      excerpt: 'A comprehensive guide to the latest ESG reporting requirements and how organizations can ensure compliance.',
      author: 'Alma Vazquez',
      date: 'November 20, 2024',
      readTime: '9 min read',
      category: 'Regulation',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      views: '1.9k'
    },
    {
      id: '6',
      title: 'Supply Chain Sustainability: Executive Insights',
      excerpt: 'Learn how leading companies are transforming their supply chains for sustainability and the leadership skills required.',
      author: 'Red Pioquinto',
      date: 'November 15, 2024',
      readTime: '8 min read',
      category: 'Supply Chain',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      views: '2.2k'
    }
  ];

  const categories = ['All', 'Leadership', 'Diversity & Inclusion', 'Climate', 'Finance', 'Regulation', 'Supply Chain'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const handleArticleClick = (articleId: string) => {
    onArticleChange(articleId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="ESG Insights - Expert Perspectives on Sustainability Leadership"
        description="Expert insights on ESG leadership, sustainability trends, and best practices from our global team of ESG professionals and consultants."
        keywords="ESG insights, sustainability leadership, ESG trends, climate risk, sustainable finance, ESG reporting, supply chain sustainability"
        url="/insights"
        structuredData={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'ESG Insights', url: 'https://esg-talent.com/insights' }
          ])
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#04548c] via-[#023d67] to-[#04548c] pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/Insights.png" 
            alt="ESG Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04548c]/80 via-[#023d67]/70 to-[#04548c]/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">ESG Insights</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest ESG insights and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-3xl shadow-sm mb-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-0 rounded-2xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 shadow-lg bg-white"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 border-0 rounded-2xl focus:ring-2 focus:ring-[#04548c] focus:border-transparent transition-all duration-200 shadow-lg bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-10">
              <ScrollAnimationWrapper animation="fade-up">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold text-[#04548c]">Featured Articles</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#04548c] to-transparent ml-8 rounded-full"></div>
                </div>
              </ScrollAnimationWrapper>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.map((article, index) => (
                  <ScrollAnimationWrapper 
                    key={article.id}
                    animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                    delay={index * 100}
                  >
                    <article className="group bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100 relative">
                      {/* Featured Badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="bg-gradient-to-r from-[#43ab04] to-[#369003] text-white px-4 py-2 rounded-full text-sm font-semibold">
                          ⭐ Featured
                        </span>
                      </div>
                      
                      {/* Image */}
                      <div 
                        className="relative h-72 overflow-hidden cursor-pointer"
                        onClick={() => handleArticleClick(article.id)}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        
                        {/* Views counter */}
                        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {article.views}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        {/* Category and Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <span className="bg-[#04548c]/10 text-[#04548c] px-3 py-1 rounded-full font-medium">
                              {article.category}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 
                          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#04548c] transition-colors duration-300 cursor-pointer leading-tight"
                          onClick={() => handleArticleClick(article.id)}
                        >
                          {article.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                        
                        {/* Author and CTA */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#04548c] to-[#023d67] rounded-full flex items-center justify-center mr-2">
                              <User className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <span className="text-gray-900 font-semibold text-sm">{article.author}</span>
                              <p className="text-gray-500 text-sm">ESG Consultant</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleArticleClick(article.id)}
                            className="bg-gradient-to-r from-[#04548c] to-[#023d67] text-white px-4 py-2 rounded-2xl font-semibold hover:shadow-sm transition-all duration-200 transform hover:scale-102 flex items-center text-sm"
                          >
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </article>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles */}
          {regularArticles.length > 0 && (
            <div>
              <ScrollAnimationWrapper animation="fade-up">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold text-[#04548c]">Latest Insights</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#04548c] to-transparent ml-8 rounded-full"></div>
                </div>
              </ScrollAnimationWrapper>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles.map((article, index) => (
                  <ScrollAnimationWrapper 
                    key={article.id}
                    animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                    delay={index * 100}
                  >
                    <article className="group bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100 h-full flex flex-col">
                      {/* Image */}
                      <div 
                        className="relative h-56 overflow-hidden cursor-pointer"
                        onClick={() => handleArticleClick(article.id)}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        
                        {/* Views counter */}
                        <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {article.views}
                        </div>
                      </div>
                      
                      <div className="p-5 flex flex-col flex-grow">
                        {/* Category */}
                        <div className="mb-2">
                          <span className="bg-[#04548c]/10 text-[#04548c] px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 
                          className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#04548c] transition-colors duration-300 cursor-pointer leading-tight"
                          onClick={() => handleArticleClick(article.id)}
                        >
                          {article.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-3 leading-relaxed flex-grow text-sm">{article.excerpt}</p>
                        
                        {/* Meta info */}
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="mr-4">{article.readTime}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        
                        {/* Author and CTA */}
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#04548c] to-[#023d67] rounded-full flex items-center justify-center mr-2">
                              <User className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-gray-900 font-medium text-sm">{article.author}</span>
                          </div>
                          <button
                            onClick={() => handleArticleClick(article.id)}
                            className="text-[#04548c] font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300 text-sm"
                          >
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </article>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-10">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">No articles found</p>
                <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-10 bg-gradient-to-r from-[#04548c] to-[#023d67]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-3">Stay Updated</h2>
              <p className="text-lg text-blue-200 mb-6">
                Subscribe to our newsletter for the latest ESG insights and industry trends
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-2xl border-0 focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="bg-[#43ab04] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#369003] transition-all duration-200 transform hover:scale-102">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;