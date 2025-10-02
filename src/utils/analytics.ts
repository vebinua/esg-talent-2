// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track ESG-specific events
export const trackESGEvent = {
  // Contact form submissions
  contactForm: (method: string) => {
    trackEvent('contact_form_submit', 'engagement', method);
  },

  // Service page visits
  serviceView: (serviceName: string) => {
    trackEvent('service_view', 'services', serviceName);
  },

  // Job application events
  jobApplication: (jobTitle: string) => {
    trackEvent('job_application', 'careers', jobTitle);
  },

  // CV/Resume uploads
  cvUpload: () => {
    trackEvent('cv_upload', 'careers', 'resume_submission');
  },

  // Newsletter signups
  newsletterSignup: () => {
    trackEvent('newsletter_signup', 'engagement', 'insights_newsletter');
  },

  // Article reads
  articleRead: (articleTitle: string) => {
    trackEvent('article_read', 'content', articleTitle);
  },

  // Social media clicks
  socialClick: (platform: string) => {
    trackEvent('social_click', 'engagement', platform);
  },

  // Phone/Email clicks
  contactClick: (type: 'phone' | 'email' | 'whatsapp') => {
    trackEvent('contact_click', 'engagement', type);
  }
};

// Enhanced ecommerce tracking for recruitment services
export const trackServiceInquiry = (serviceName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: value || 0,
      service_name: serviceName,
      event_category: 'lead_generation'
    });
  }
};