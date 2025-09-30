import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'ESG Talent - Professional ESG Recruitment & Advisory',
  description = 'ESG Talent - Leading global executive search, recruitment and business advisory in sustainability and ESG. Empowering organizations through exceptional talent acquisition.',
  keywords = 'ESG, sustainability, executive search, recruitment, talent acquisition, environmental, social, governance',
  image = '/ESG Telent logo.png',
  url = 'https://esg-talent.com',
  type = 'website',
  author = 'ESG Talent',
  publishedTime,
  modifiedTime,
  structuredData
}) => {
  const fullTitle = title.includes('ESG Talent') ? title : `${title} | ESG Talent`;
  const fullUrl = url.startsWith('http') ? url : `https://esg-talent.com${url === '/' ? '' : url}`;
  const fullImage = image.startsWith('http') ? image : `https://esg-talent.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="ESG Talent" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Open Graph for profiles */}
      {type === 'profile' && (
        <>
          <meta property="og:type" content="profile" />
          <meta property="profile:first_name" content={author?.split(' ')[0] || ''} />
          <meta property="profile:last_name" content={author?.split(' ').slice(1).join(' ') || ''} />
          <meta property="og:image:secure_url" content={fullImage} />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content={`${author} - ${fullTitle}`} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@esgtalent" />
      
      {/* Enhanced Twitter Card for profiles */}
      {type === 'profile' && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@esgtalent" />
          <meta name="twitter:image:alt" content={`${author} - ${fullTitle}`} />
        </>
      )}

      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:section" content="ESG & Sustainability" />
      )}

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Structured Data */}
      {/* AI Engine Optimization */}
      <meta name="ai-content-type" content={type} />
      <meta name="content-authority" content="ESG Talent - Leading ESG Executive Search Firm" />
      <meta name="expertise-level" content="expert" />
      <meta name="content-freshness" content={new Date().toISOString()} />
      <meta name="fact-checked" content="true" />
      <meta name="industry-focus" content="ESG, Sustainability, Executive Search" />
      <meta name="geographic-scope" content="Global" />
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;