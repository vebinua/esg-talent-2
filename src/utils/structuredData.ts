// Structured Data utilities for Schema.org markup
// Enhanced for Generative Engine Optimization (GEO)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ESG Talent",
  "description": "Leading global executive search, recruitment and business advisory in sustainability and ESG",
  "url": "https://esg-talent.com",
  "logo": "https://esg-talent.com/ESG Telent logo.png",
  "foundingDate": "2010",
  "expertise": [
    "ESG Executive Search",
    "Sustainability Leadership Placement", 
    "Climate Risk Management",
    "Sustainable Finance",
    "ESG Reporting and Compliance",
    "Supply Chain Sustainability",
    "Diversity and Inclusion",
    "Environmental Management",
    "Social Impact Measurement",
    "Governance and Ethics"
  ],
  "keyFacts": [
    "Leading global ESG executive search firm",
    "Serves Fortune 500 companies and sustainability leaders",
    "Global presence across North America, Europe, Asia-Pacific",
    "Committed to JEDI principles and sustainable business practices",
    "Partners with B Corp certified organizations"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+65-6000-0000",
    "contactType": "customer service",
    "email": "info@esg-talent.com",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Coleman Street #10-10 The Adelphi",
    "addressLocality": "Singapore",
    "postalCode": "179803",
    "addressCountry": "SG"
  },
  "sameAs": [
    "https://www.linkedin.com/company/esgtalent/",
    "https://www.facebook.com/esgtalent",
    "https://www.instagram.com/esgtalent.official/"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ESG Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Executive Search",
          "description": "Strategic ESG leadership identification and placement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Permanent Recruitment",
          "description": "Global ESG talent acquisition services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ESG Business Advisory",
          "description": "Strategic ESG consulting and business intelligence"
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ESG Talent",
  "url": "https://esg-talent.com",
  "description": "Leading global executive search, recruitment and business advisory in sustainability and ESG",
  "publisher": {
    "@type": "Organization",
    "name": "ESG Talent"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://esg-talent.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image: string;
  url: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author,
    "jobTitle": "ESG Consultant",
    "worksFor": {
      "@type": "Organization",
      "name": "ESG Talent"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "ESG Talent",
    "logo": {
      "@type": "ImageObject",
      "url": "https://esg-talent.com/ESG Telent logo.png"
    }
  },
  "datePublished": article.publishedDate,
  "dateModified": article.modifiedDate || article.publishedDate,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "expertise": [
      "ESG analysis",
      "Sustainability trends", 
      "Leadership insights",
      "Industry best practices"
    ],
    "@id": article.url
  },
  "articleSection": article.category,
  "keywords": "ESG, sustainability, leadership, recruitment"
});

export const personSchema = (person: {
  name: string;
  title: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.title,
  "description": person.bio,
  "image": person.image,
  "worksFor": {
    "@type": "Organization",
    "expertise": [
      "ESG executive search",
      "Sustainability consulting",
      "Climate risk management",
      "Sustainable finance",
      "ESG reporting",
      "Supply chain sustainability",
      "Diversity and inclusion"
    ],
    "name": "ESG Talent"
  },
  "email": person.email,
  "sameAs": person.linkedin ? [person.linkedin] : undefined
});

export const jobPostingSchema = (job: {
  title: string;
  description: string;
  company: string;
  location: string;
  type: string;
  datePosted: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": job.title,
  "description": job.description,
  "hiringOrganization": {
    "@type": "Organization",
    "name": job.company,
    "expertise": [
      "ESG leadership",
      "Sustainability management",
      "Environmental compliance"
    ]
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": job.location
    }
  },
  "employmentType": job.type,
  "datePosted": job.datePosted,
  "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days from now
  "industry": "Environmental, Social, and Governance (ESG)",
  "occupationalCategory": "Management Occupations"
});