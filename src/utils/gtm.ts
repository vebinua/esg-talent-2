// Google Tag Manager utility functions

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

// Push events to GTM dataLayer
export const gtmPush = (data: any) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  gtmPush({
    event: 'page_view',
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href
  });
};

// Track custom events
export const trackEvent = (eventName: string, parameters: any = {}) => {
  gtmPush({
    event: eventName,
    ...parameters
  });
};

// ESG-specific event tracking
export const trackESGEvent = {
  // Contact form submissions
  contactForm: (method: string, formData?: any) => {
    trackEvent('contact_form_submit', {
      contact_method: method,
      form_data: formData
    });
  },

  // Service page visits
  serviceView: (serviceName: string) => {
    trackEvent('service_view', {
      service_name: serviceName,
      event_category: 'services'
    });
  },

  // Job application events
  jobApplication: (jobTitle: string, applicationData?: any) => {
    trackEvent('job_application', {
      job_title: jobTitle,
      event_category: 'careers',
      application_data: applicationData
    });
  },

  // CV/Resume uploads
  cvUpload: (fileName?: string) => {
    trackEvent('cv_upload', {
      event_category: 'careers',
      file_name: fileName
    });
  },

  // Newsletter signups
  newsletterSignup: (email?: string) => {
    trackEvent('newsletter_signup', {
      event_category: 'engagement',
      newsletter_type: 'insights'
    });
  },

  // Article reads
  articleRead: (articleTitle: string, author?: string, category?: string) => {
    trackEvent('article_read', {
      event_category: 'content',
      article_title: articleTitle,
      article_author: author,
      article_category: category
    });
  },

  // Social media clicks
  socialClick: (platform: string) => {
    trackEvent('social_click', {
      event_category: 'engagement',
      social_platform: platform
    });
  },

  // Contact method clicks
  contactClick: (type: 'phone' | 'email' | 'whatsapp', contactInfo?: string) => {
    trackEvent('contact_click', {
      event_category: 'engagement',
      contact_type: type,
      contact_info: contactInfo
    });
  },

  // Service inquiries (enhanced ecommerce)
  serviceInquiry: (serviceName: string, value?: number, inquiryData?: any) => {
    trackEvent('generate_lead', {
      event_category: 'lead_generation',
      service_name: serviceName,
      currency: 'USD',
      value: value || 0,
      inquiry_data: inquiryData
    });
  },

  // Profile views
  profileView: (profileName: string, profileType: string) => {
    trackEvent('profile_view', {
      event_category: 'engagement',
      profile_name: profileName,
      profile_type: profileType
    });
  },

  // Search actions
  search: (searchTerm: string, searchType: string, resultsCount?: number) => {
    trackEvent('search', {
      event_category: 'engagement',
      search_term: searchTerm,
      search_type: searchType,
      results_count: resultsCount
    });
  }
};