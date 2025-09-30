import React, { useEffect } from 'react';

const TawkToChat: React.FC = () => {
  useEffect(() => {
    // Tawk.to script injection
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Add script to document head
    document.head.appendChild(script);

    // Initialize Tawk_API if it doesn't exist
    if (!window.Tawk_API) {
      window.Tawk_API = {};
      window.Tawk_LoadStart = new Date();
    }

    // Optional: Configure Tawk.to settings
    window.Tawk_API.onLoad = function() {
      console.log('Tawk.to chat widget loaded');
    };

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      const existingScript = document.querySelector('script[src*="embed.tawk.to"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Clean up Tawk widget
      if (window.Tawk_API && window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export default TawkToChat;