import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Eye, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { articleSchema, breadcrumbSchema } from '../utils/structuredData';
import GEOOptimizer from '../components/GEOOptimizer';
import AIOptimizedContent from '../components/AIOptimizedContent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { generateGEOContent, generateGEOCitations } from '../utils/geoOptimization';

interface ArticlePageProps {
  articleId: string;
  onPageChange: (page: string) => void;
  onArticleChange: (articleId: string) => void;
}

interface ArticleContent {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  views: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
}

const ArticlePage: React.FC<ArticlePageProps> = ({ articleId, onPageChange, onArticleChange }) => {
  const articles: { [key: string]: ArticleContent } = {
    '1': {
      id: '1',
      title: 'The Future of ESG Leadership: Trends Shaping 2024',
      author: 'Nur Ashikeen Iqbal',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Leadership',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      views: '2.4k',
      content: {
        introduction: 'As we navigate through 2024, the landscape of Environmental, Social, and Governance (ESG) leadership continues to evolve at an unprecedented pace. Organizations worldwide are recognizing that sustainable business practices are no longer optional but essential for long-term success and stakeholder trust.',
        sections: [
          {
            title: 'The Rise of Purpose-Driven Leadership',
            content: 'Modern ESG leaders are characterized by their ability to align business objectives with societal impact. They understand that profitability and sustainability are not mutually exclusive but rather complementary forces that drive innovation and growth. These leaders are skilled at communicating the business case for ESG initiatives, securing buy-in from stakeholders, and implementing strategies that deliver measurable results.'
          },
          {
            title: 'Technology Integration in ESG Strategy',
            content: 'The integration of advanced technologies such as AI, blockchain, and IoT in ESG reporting and management has become a defining characteristic of forward-thinking organizations. Leaders who can leverage these technologies to enhance transparency, improve data accuracy, and streamline sustainability processes are in high demand.'
          },
          {
            title: 'Regulatory Compliance and Beyond',
            content: 'With increasing regulatory requirements across different jurisdictions, ESG leaders must navigate complex compliance landscapes while driving meaningful change. The most effective leaders go beyond mere compliance, using regulations as a foundation to build comprehensive sustainability strategies that create competitive advantages.'
          },
          {
            title: 'Stakeholder Engagement Excellence',
            content: 'Successful ESG leaders excel at engaging diverse stakeholder groups, from investors and employees to customers and communities. They understand that authentic engagement requires transparency, active listening, and a commitment to addressing concerns and incorporating feedback into strategic decisions.'
          }
        ],
        conclusion: 'The future of ESG leadership lies in the hands of professionals who can balance strategic thinking with operational excellence, combine technical expertise with emotional intelligence, and drive sustainable change while delivering business results. As we move forward, organizations that invest in developing and attracting such leaders will be best positioned to thrive in an increasingly sustainability-focused business environment.'
      }
    },
    '2': {
      id: '2',
      title: 'Building Diverse ESG Teams: A Strategic Imperative',
      author: 'Alma Vazquez',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Diversity & Inclusion',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      views: '1.8k',
      content: {
        introduction: 'Diversity in ESG teams is not just about meeting inclusion targets—it\'s about leveraging different perspectives, experiences, and expertise to create more effective and innovative sustainability solutions. Research consistently shows that diverse teams make better decisions and drive superior performance.',
        sections: [
          {
            title: 'The Business Case for Diversity in ESG',
            content: 'Diverse ESG teams bring varied perspectives that are crucial for understanding and addressing complex sustainability challenges. Different backgrounds, cultures, and experiences enable teams to identify risks and opportunities that homogeneous groups might overlook. This diversity of thought leads to more comprehensive strategies and better stakeholder engagement.'
          },
          {
            title: 'Key Dimensions of ESG Team Diversity',
            content: 'Effective ESG team diversity encompasses multiple dimensions: gender, ethnicity, age, educational background, professional experience, and geographic representation. Each dimension contributes unique insights that enhance the team\'s ability to develop inclusive and globally relevant sustainability strategies.'
          },
          {
            title: 'Strategies for Building Inclusive ESG Teams',
            content: 'Organizations should implement structured approaches to building diverse ESG teams, including inclusive recruitment practices, mentorship programs, and creating psychological safety where all team members feel valued and heard. Leadership commitment and accountability are essential for success.'
          },
          {
            title: 'Overcoming Common Challenges',
            content: 'Common challenges in building diverse ESG teams include unconscious bias in hiring, lack of diverse talent pipelines, and resistance to change. Addressing these challenges requires systematic approaches, including bias training, partnerships with diverse professional organizations, and clear diversity metrics and accountability.'
          }
        ],
        conclusion: 'Building diverse ESG teams is a strategic imperative that requires intentional effort, sustained commitment, and systematic approaches. Organizations that successfully create inclusive ESG teams will be better positioned to navigate complex sustainability challenges and create value for all stakeholders.'
      }
    },
    '3': {
      id: '3',
      title: 'Climate Risk Management: Executive Perspectives',
      author: 'Red Pioquinto',
      date: 'December 5, 2024',
      readTime: '10 min read',
      category: 'Climate',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      views: '3.1k',
      content: {
        introduction: 'Climate risk has emerged as one of the most significant challenges facing businesses today. From physical risks like extreme weather events to transition risks associated with the shift to a low-carbon economy, executives must develop comprehensive strategies to identify, assess, and manage climate-related risks.',
        sections: [
          {
            title: 'Understanding Physical and Transition Risks',
            content: 'Physical climate risks include acute risks from extreme weather events and chronic risks from long-term climate changes. Transition risks arise from policy changes, technological developments, market shifts, and reputational concerns related to climate change. Executives must understand both categories to develop effective risk management strategies.'
          },
          {
            title: 'Climate Risk Assessment Frameworks',
            content: 'Leading organizations are adopting sophisticated climate risk assessment frameworks that incorporate scenario analysis, stress testing, and quantitative modeling. These frameworks help executives understand potential impacts across different time horizons and climate scenarios, enabling more informed strategic decision-making.'
          },
          {
            title: 'Integration with Business Strategy',
            content: 'Effective climate risk management requires integration with core business strategy and operations. This includes incorporating climate considerations into capital allocation decisions, supply chain management, product development, and market expansion strategies. Executives must ensure that climate risk management is not siloed but embedded throughout the organization.'
          },
          {
            title: 'Disclosure and Stakeholder Communication',
            content: 'Transparent disclosure of climate risks and management strategies is increasingly expected by investors, regulators, and other stakeholders. Executives must balance the need for transparency with competitive considerations, ensuring that disclosures are accurate, comprehensive, and aligned with emerging standards and frameworks.'
          }
        ],
        conclusion: 'Climate risk management is no longer optional for executives—it\'s a business imperative. Organizations that proactively identify, assess, and manage climate risks will be better positioned to protect value, capture opportunities, and build resilience in an uncertain climate future.'
      }
    },
    '4': {
      id: '4',
      title: 'The Rise of Sustainable Finance Professionals',
      author: 'Nur Ashikeen Iqbal',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Finance',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      views: '2.7k',
      content: {
        introduction: 'The sustainable finance sector is experiencing unprecedented growth, creating new career opportunities and demanding specialized skills. As capital increasingly flows toward sustainable investments, financial professionals must adapt to new frameworks, regulations, and investor expectations.',
        sections: [
          {
            title: 'The Growing Sustainable Finance Market',
            content: 'The sustainable finance market has grown exponentially, with ESG assets under management reaching new heights globally. This growth is driven by regulatory requirements, investor demand, and recognition that sustainable investments can deliver competitive returns while creating positive impact.'
          },
          {
            title: 'Key Skills in High Demand',
            content: 'Sustainable finance professionals need a unique combination of traditional financial expertise and sustainability knowledge. Key skills include ESG analysis, impact measurement, regulatory compliance, stakeholder engagement, and the ability to integrate sustainability factors into investment decisions and risk assessments.'
          },
          {
            title: 'Career Pathways and Opportunities',
            content: 'Career opportunities in sustainable finance span multiple sectors, including asset management, banking, insurance, and corporate finance. Roles range from ESG analysts and sustainable investment managers to climate risk specialists and impact measurement professionals.'
          },
          {
            title: 'Professional Development and Certification',
            content: 'The field offers numerous professional development opportunities, including specialized certifications, training programs, and academic courses. Continuous learning is essential as the field evolves rapidly with new regulations, standards, and best practices emerging regularly.'
          }
        ],
        conclusion: 'The rise of sustainable finance represents a fundamental shift in how financial markets operate. Professionals who develop expertise in this area will find themselves at the forefront of a transformation that is reshaping the global financial system and creating new opportunities for positive impact.'
      }
    },
    '5': {
      id: '5',
      title: 'ESG Reporting: Navigating New Regulations',
      author: 'Alma Vazquez',
      date: 'November 20, 2024',
      readTime: '9 min read',
      category: 'Regulation',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      views: '1.9k',
      content: {
        introduction: 'The regulatory landscape for ESG reporting is evolving rapidly, with new requirements emerging across different jurisdictions. Organizations must navigate this complex environment while ensuring their reporting is accurate, comprehensive, and aligned with stakeholder expectations.',
        sections: [
          {
            title: 'Global Regulatory Developments',
            content: 'Major jurisdictions are implementing new ESG reporting requirements, including the EU\'s Corporate Sustainability Reporting Directive (CSRD), the SEC\'s climate disclosure rules, and various national sustainability reporting standards. These regulations are creating a more standardized and mandatory approach to ESG disclosure.'
          },
          {
            title: 'Key Reporting Frameworks and Standards',
            content: 'Organizations must understand and navigate multiple reporting frameworks, including GRI, SASB, TCFD, and emerging standards like ISSB. Each framework has specific requirements and focuses, and organizations often need to report according to multiple standards to meet different stakeholder needs.'
          },
          {
            title: 'Data Collection and Management Challenges',
            content: 'Effective ESG reporting requires robust data collection and management systems. Organizations face challenges in gathering accurate, consistent, and timely data across different business units and geographies. Investing in data infrastructure and governance is essential for compliance and credibility.'
          },
          {
            title: 'Assurance and Verification',
            content: 'As ESG reporting becomes more regulated, the need for external assurance and verification is increasing. Organizations must understand different levels of assurance, select appropriate assurance providers, and prepare for the scrutiny that comes with verified ESG disclosures.'
          }
        ],
        conclusion: 'Navigating the evolving ESG reporting landscape requires strategic planning, investment in systems and capabilities, and ongoing monitoring of regulatory developments. Organizations that proactively address these requirements will be better positioned to meet stakeholder expectations and regulatory compliance.'
      }
    },
    '6': {
      id: '6',
      title: 'Supply Chain Sustainability: Executive Insights',
      author: 'Red Pioquinto',
      date: 'November 15, 2024',
      readTime: '8 min read',
      category: 'Supply Chain',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      views: '2.2k',
      content: {
        introduction: 'Supply chain sustainability has become a critical focus for organizations seeking to reduce their environmental impact, ensure ethical practices, and build resilient operations. Executives must balance sustainability goals with operational efficiency and cost considerations.',
        sections: [
          {
            title: 'The Business Case for Sustainable Supply Chains',
            content: 'Sustainable supply chains offer multiple benefits, including risk reduction, cost savings, improved brand reputation, and enhanced stakeholder relationships. Organizations with sustainable supply chains are often more resilient to disruptions and better positioned for long-term success.'
          },
          {
            title: 'Key Sustainability Challenges in Supply Chains',
            content: 'Common challenges include lack of visibility into supplier practices, complex multi-tier supply networks, varying sustainability standards across regions, and balancing sustainability goals with cost and quality requirements. Addressing these challenges requires systematic approaches and strong supplier relationships.'
          },
          {
            title: 'Strategies for Supply Chain Transformation',
            content: 'Effective strategies include supplier assessment and engagement programs, sustainability criteria in procurement decisions, collaborative improvement initiatives, and investment in supply chain transparency technologies. Success requires commitment from leadership and integration with business strategy.'
          },
          {
            title: 'Measuring and Reporting Supply Chain Impact',
            content: 'Organizations must develop robust systems for measuring and reporting supply chain sustainability performance. This includes establishing key performance indicators, implementing monitoring systems, and ensuring accurate and transparent reporting to stakeholders.'
          }
        ],
        conclusion: 'Supply chain sustainability is a complex but essential component of corporate sustainability strategy. Organizations that successfully transform their supply chains will create competitive advantages while contributing to positive environmental and social outcomes.'
      }
    }
  };

  const article = articles[articleId];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button
            onClick={() => onPageChange('insights')}
            className="text-[#04548c] hover:text-blue-700 font-semibold"
          >
            ← Back to Insights
          </button>
        </div>
      </div>
    );
  }

  const relatedArticles = Object.values(articles)
    .filter(a => a.id !== articleId && a.category === article.category)
    .slice(0, 2);

  return (
    <AIOptimizedContent
      entityType="article"
      summary={`${article.title} - Expert analysis by ${article.author} on ${article.category.toLowerCase()} in ESG and sustainability. ${article.content.introduction}`}
      keyFacts={[
        `Article: ${article.title}`,
        `Author: ${article.author}, ESG Consultant at ESG Talent`,
        `Category: ${article.category}`,
        `Reading time: ${article.readTime}`,
        `Views: ${article.views}`,
        `Published: ${article.date}`,
        "Expert insights on ESG trends and best practices",
        "Authoritative content from ESG industry professionals"
      ]}
      className="min-h-screen bg-gray-50"
    >
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={article.title}
        description={article.content.introduction}
        keywords={`ESG, sustainability, ${article.category.toLowerCase()}, ${article.author.toLowerCase().replace(' ', '-')}, ESG leadership`}
        url={`/insights/${articleId}`}
        type="article"
        author={article.author}
        publishedTime={new Date(article.date).toISOString()}
        image={article.image}
        structuredData={[
          articleSchema({
            title: article.title,
            description: article.content.introduction,
            author: article.author,
            publishedDate: new Date(article.date).toISOString(),
            image: article.image,
            url: `https://esg-talent.com/insights/${articleId}`,
            category: article.category
          }),
          breadcrumbSchema([
            { name: 'Home', url: 'https://esg-talent.com/' },
            { name: 'ESG Insights', url: 'https://esg-talent.com/insights' },
            { name: article.title, url: `https://esg-talent.com/insights/${articleId}` }
          ])
        ]}
      />
      
      <GEOOptimizer
        title={article.title}
        description={article.content.introduction}
        keywords={[article.category.toLowerCase(), 'ESG', 'sustainability', article.author.toLowerCase().replace(' ', '-'), 'ESG leadership']}
        content={generateGEOContent('article', article)}
        citations={generateGEOCitations('article')}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#013155] to-[#04548c] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <button
              onClick={() => onPageChange('insights')}
              className="text-blue-200 hover:text-white font-semibold mb-8 flex items-center transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Insights
            </button>
            
            <div className="text-white">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mr-4">
                  {article.category}
                </span>
                <div className="flex items-center text-blue-200 text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {article.views} views
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{article.author}</p>
                    <p className="text-blue-200">ESG Consultant</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-blue-200">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Article Image */}
      <section className="relative -mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-sm">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            <ScrollAnimationWrapper animation="fade-up">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  {article.content.introduction}
                </p>
              </div>
            </ScrollAnimationWrapper>

            {/* Article Sections */}
            {article.content.sections.map((section, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-[#04548c] mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}

            {/* Conclusion */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="bg-gradient-to-r from-[#04548c]/5 to-blue-50 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-[#04548c] mb-6">
                  Conclusion
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {article.content.conclusion}
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Share and Actions */}
            <ScrollAnimationWrapper animation="fade-up">
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-[#04548c] transition-colors duration-200">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share Article
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-[#04548c] transition-colors duration-200">
                    <Bookmark className="h-5 w-5 mr-2" />
                    Save for Later
                  </button>
                </div>
                
                <div className="text-sm text-gray-500">
                  Published on {article.date}
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper animation="fade-up">
              <h2 className="text-3xl font-bold text-[#04548c] mb-12 text-center">
                Related Articles
              </h2>
            </ScrollAnimationWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <ScrollAnimationWrapper 
                  key={relatedArticle.id}
                  animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                  delay={index * 100}
                >
                  <article 
                    className="group bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                    onClick={() => onArticleChange(relatedArticle.id)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-[#04548c]/10 text-[#04548c] px-3 py-1 rounded-full text-sm font-medium">
                          {relatedArticle.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#04548c] transition-colors duration-300">
                        {relatedArticle.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{relatedArticle.author}</span>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </article>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#04548c] to-[#023d67]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fade-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your ESG Strategy?
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Connect with our experts to discuss your sustainability leadership needs.
              </p>
              <button
                onClick={() => onPageChange('contact')}
                className="bg-[#43ab04] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#369003] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
    </AIOptimizedContent>
  );
};

export default ArticlePage;