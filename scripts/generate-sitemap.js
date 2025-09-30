const fs = require('fs');
const path = require('path');

// Dynamic sitemap generation script
const generateSitemap = () => {
  const baseUrl = 'https://esg-talent.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/sustainability', priority: '0.8', changefreq: 'monthly' },
    { url: '/insights', priority: '0.8', changefreq: 'weekly' },
    { url: '/careers', priority: '0.7', changefreq: 'daily' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' }
  ];

  const articles = [
    { id: '1', slug: 'future-esg-leadership-trends-2024', date: '2024-12-15' },
    { id: '2', slug: 'building-diverse-esg-teams', date: '2024-12-10' },
    { id: '3', slug: 'climate-risk-management-executive-perspectives', date: '2024-12-05' },
    { id: '4', slug: 'rise-sustainable-finance-professionals', date: '2024-11-28' },
    { id: '5', slug: 'esg-reporting-navigating-new-regulations', date: '2024-11-20' },
    { id: '6', slug: 'supply-chain-sustainability-executive-insights', date: '2024-11-15' }
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>

`;
  });

  // Add articles
  articles.forEach(article => {
    sitemap += `  <url>
    <loc>${baseUrl}/insights/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

`;
  });

  sitemap += `</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

// Run the script
generateSitemap();