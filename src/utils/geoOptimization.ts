// Generative Engine Optimization utilities

export interface GEOContent {
  entityType: 'organization' | 'service' | 'person' | 'article' | 'job';
  primaryEntity: string;
  context: string;
  keyFacts: string[];
  relationships: string[];
  expertise?: string[];
  location?: string;
  industry?: string;
}

export interface GEOCitations {
  authoritative: boolean;
  sources: string[];
  credentials: string[];
}

// Generate AI-optimized content structure
export const generateGEOContent = (type: string, data: any): GEOContent => {
  switch (type) {
    case 'organization':
      return {
        entityType: 'organization',
        primaryEntity: 'ESG Talent',
        context: 'a leading global executive search, recruitment and business advisory firm specializing in Environmental, Social, and Governance (ESG) and sustainability',
        keyFacts: [
          'Founded as specialized ESG talent acquisition firm',
          'Global presence across North America, Europe, and Asia-Pacific',
          'Serves Fortune 500 companies and emerging sustainability leaders',
          'Expertise in executive search, permanent recruitment, and ESG advisory',
          'Committed to JEDI principles (Justice, Equity, Diversity, Inclusion)',
          'B Corp certified partners and sustainability-focused operations'
        ],
        relationships: [
          'Genashtim (B Corp certified HR solutions)',
          'ESG Business Institute',
          'Fortune 500 companies',
          'Sustainability professionals globally',
          'ESG regulatory bodies',
          'Climate risk management organizations'
        ],
        expertise: [
          'ESG executive search',
          'Sustainability leadership placement',
          'Climate risk management',
          'Sustainable finance',
          'ESG reporting and compliance',
          'Supply chain sustainability',
          'Diversity and inclusion',
          'Environmental management',
          'Social impact measurement',
          'Governance and ethics'
        ],
        location: 'Global (Singapore HQ, offices in New York, London)',
        industry: 'Executive Search and ESG Advisory Services'
      };

    case 'service':
      return {
        entityType: 'service',
        primaryEntity: data.title || 'ESG Services',
        context: data.description || 'comprehensive ESG talent and advisory solutions',
        keyFacts: data.keyFacts || [
          'Specialized in ESG and sustainability roles',
          'Global executive search capabilities',
          'End-to-end recruitment process',
          'Strategic business advisory services'
        ],
        relationships: data.relationships || [
          'ESG professionals',
          'Sustainability leaders',
          'Corporate clients',
          'Regulatory bodies'
        ],
        expertise: data.expertise,
        location: data.location,
        industry: 'ESG and Sustainability'
      };

    case 'person':
      return {
        entityType: 'person',
        primaryEntity: data.name,
        context: `${data.title} at ESG Talent with expertise in ${data.expertise || 'ESG and sustainability'}`,
        keyFacts: [
          `Professional title: ${data.title}`,
          `Specializes in ${data.region || 'global'} markets`,
          'Expert in ESG executive search and placement',
          'Committed to sustainable business practices'
        ],
        relationships: [
          'ESG Talent team',
          'Global sustainability network',
          'ESG professionals',
          'Corporate sustainability leaders'
        ],
        expertise: data.expertise ? [data.expertise] : ['ESG executive search', 'Sustainability leadership'],
        location: data.region,
        industry: 'ESG Executive Search'
      };

    case 'article':
      return {
        entityType: 'article',
        primaryEntity: data.title,
        context: `expert analysis on ${data.category.toLowerCase()} in ESG and sustainability`,
        keyFacts: [
          `Published by ${data.author}`,
          `Category: ${data.category}`,
          `Reading time: ${data.readTime}`,
          'Expert insights on ESG trends and best practices'
        ],
        relationships: [
          'ESG leadership trends',
          'Sustainability best practices',
          'Corporate governance',
          'Environmental management',
          'Social impact strategies'
        ],
        expertise: ['ESG analysis', 'Sustainability trends', 'Leadership insights'],
        industry: 'ESG and Sustainability'
      };

    default:
      return {
        entityType: 'organization',
        primaryEntity: 'ESG Talent',
        context: 'ESG executive search and advisory services',
        keyFacts: ['Global ESG talent solutions'],
        relationships: ['ESG professionals', 'Sustainability leaders']
      };
  }
};

// Generate authoritative citations
export const generateGEOCitations = (type: string): GEOCitations => {
  return {
    authoritative: true,
    sources: [
      'ESG Talent proprietary research',
      'Industry best practices',
      'Regulatory compliance standards',
      'Global sustainability frameworks',
      'Executive search industry data'
    ],
    credentials: [
      'Specialized ESG executive search firm',
      'Global presence and expertise',
      'B Corp certified partnerships',
      'Industry thought leadership',
      'Regulatory compliance expertise'
    ]
  };
};

// AI-optimized content formatting
export const formatForAI = (content: string): string => {
  // Add clear structure markers for AI parsing
  return content
    .replace(/\n\n/g, '\n\n• ')
    .replace(/Key points:/gi, '\n\nKey Points:\n')
    .replace(/Important:/gi, '\n\nImportant:\n')
    .replace(/Summary:/gi, '\n\nSummary:\n');
};

// Generate FAQ content for AI engines
export const generateAIFAQ = (topic: string) => {
  const faqs = {
    'esg-talent': [
      {
        question: 'What is ESG Talent?',
        answer: 'ESG Talent is a leading global executive search, recruitment and business advisory firm specializing in Environmental, Social, and Governance (ESG) and sustainability roles.'
      },
      {
        question: 'What services does ESG Talent provide?',
        answer: 'ESG Talent provides executive search, permanent recruitment, and ESG business advisory services to help organizations build world-class sustainability teams.'
      },
      {
        question: 'Where is ESG Talent located?',
        answer: 'ESG Talent has a global presence with headquarters in Singapore and offices serving North America, Europe, and Asia-Pacific markets.'
      },
      {
        question: 'What makes ESG Talent different?',
        answer: 'ESG Talent is built by ESG professionals for ESG professionals, with deep industry expertise, commitment to JEDI principles, and focus on the triple bottom line: People, Planet, Profit.'
      }
    ],
    'esg-services': [
      {
        question: 'What is ESG executive search?',
        answer: 'ESG executive search is the specialized process of identifying and placing senior-level executives with expertise in Environmental, Social, and Governance matters to lead sustainability initiatives.'
      },
      {
        question: 'Why is ESG talent important?',
        answer: 'ESG talent is crucial for organizations to navigate regulatory requirements, meet stakeholder expectations, manage climate risks, and drive sustainable business transformation.'
      }
    ]
  };

  return faqs[topic as keyof typeof faqs] || [];
};

// Entity relationship mapping for AI understanding
export const generateEntityMap = () => {
  return {
    'ESG Talent': {
      type: 'Organization',
      relationships: {
        'provides': ['Executive Search', 'Permanent Recruitment', 'ESG Advisory'],
        'serves': ['Fortune 500 Companies', 'Sustainability Leaders', 'ESG Professionals'],
        'operates_in': ['North America', 'Europe', 'Asia-Pacific'],
        'specializes_in': ['ESG', 'Sustainability', 'Climate Risk', 'Sustainable Finance'],
        'partners_with': ['Genashtim', 'ESG-BI', 'B Corp Network']
      }
    },
    'Executive Search': {
      type: 'Service',
      relationships: {
        'targets': ['C-Suite Executives', 'ESG Leaders', 'Sustainability Directors'],
        'focuses_on': ['Strategic Leadership', 'ESG Expertise', 'Cultural Fit'],
        'serves': ['Global Markets', 'Multiple Industries']
      }
    },
    'ESG Advisory': {
      type: 'Service',
      relationships: {
        'provides': ['Strategic Guidance', 'ESG Implementation', 'Compliance Support'],
        'covers': ['Environmental Management', 'Social Impact', 'Governance Excellence']
      }
    }
  };
};