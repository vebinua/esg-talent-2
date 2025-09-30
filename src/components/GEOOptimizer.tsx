import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  content: {
    entityType: 'organization' | 'service' | 'person' | 'article' | 'job';
    primaryEntity: string;
    context: string;
    keyFacts: string[];
    relationships: string[];
    expertise?: string[];
    location?: string;
    industry?: string;
  };
  citations?: {
    authoritative: boolean;
    sources: string[];
    credentials: string[];
  };
}

const GEOOptimizer: React.FC<GEOOptimizerProps> = ({
  title,
  description,
  keywords,
  content,
  citations
}) => {
  // Generate AI-optimized content structure
  const generateGEOMetadata = () => {
    const geoData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "keywords": keywords.join(", "),
      "mainEntity": {
        "@type": content.entityType === 'organization' ? 'Organization' : 
               content.entityType === 'person' ? 'Person' :
               content.entityType === 'service' ? 'Service' :
               content.entityType === 'article' ? 'Article' : 'JobPosting',
        "name": content.primaryEntity,
        "description": content.context,
        "expertise": content.expertise || [],
        "location": content.location,
        "industry": content.industry
      },
      "keyFacts": content.keyFacts,
      "relatedEntities": content.relationships,
      "authoritative": citations?.authoritative || false,
      "sources": citations?.sources || [],
      "credentials": citations?.credentials || []
    };

    return geoData;
  };

  // Generate natural language summary for AI consumption
  const generateAISummary = () => {
    const summary = `${content.primaryEntity} is ${content.context}. Key facts: ${content.keyFacts.join('; ')}. ${content.relationships.length > 0 ? `Related to: ${content.relationships.join(', ')}.` : ''} ${content.expertise ? `Expertise includes: ${content.expertise.join(', ')}.` : ''} ${content.location ? `Located in: ${content.location}.` : ''} ${content.industry ? `Industry: ${content.industry}.` : ''}`;
    
    return summary;
  };

  const geoMetadata = generateGEOMetadata();
  const aiSummary = generateAISummary();

  return (
    <Helmet>
      {/* AI-Optimized Meta Tags */}
      <meta name="ai-summary" content={aiSummary} />
      <meta name="entity-type" content={content.entityType} />
      <meta name="primary-entity" content={content.primaryEntity} />
      <meta name="key-facts" content={content.keyFacts.join(' | ')} />
      <meta name="expertise-areas" content={content.expertise?.join(', ') || ''} />
      <meta name="industry-focus" content={content.industry || ''} />
      <meta name="geographic-scope" content={content.location || ''} />
      
      {/* Authoritative Source Indicators */}
      {citations?.authoritative && (
        <>
          <meta name="authoritative-source" content="true" />
          <meta name="source-credentials" content={citations.credentials.join(', ')} />
          <meta name="reference-sources" content={citations.sources.join(', ')} />
        </>
      )}
      
      {/* Enhanced Structured Data for AI */}
      <script type="application/ld+json">
        {JSON.stringify(geoMetadata, null, 2)}
      </script>
      
      {/* AI-Readable Content Markers */}
      <meta name="content-freshness" content={new Date().toISOString()} />
      <meta name="content-completeness" content="comprehensive" />
      <meta name="fact-checked" content={citations?.authoritative ? "true" : "false"} />
    </Helmet>
  );
};

export default GEOOptimizer;