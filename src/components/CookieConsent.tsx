import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check, Shield, BarChart3, Target } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cookies enable basic functionality like page navigation and access to secure areas.',
      required: true,
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      required: false,
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
      required: false,
    },
    {
      key: 'preferences' as keyof CookiePreferences,
      icon: Settings,
      title: 'Preference Cookies',
      description: 'Remember your choices and preferences to provide a more personalized experience on future visits.',
      required: false,
    },
  ];

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner - Invertase Style */}
      <div 
        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 bg-white rounded-2xl shadow-sm border border-gray-200"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-[#04548c] p-2 rounded-lg">
              <Cookie className="h-5 w-5 text-white" />
            </div>
            <button
              onClick={handleRejectAll}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 p-1"
              aria-label="Close cookie banner and reject non-essential cookies"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="mb-6">
            <h2 id="cookie-banner-title" className="text-lg font-semibold text-gray-900 mb-2">
              We use cookies
            </h2>
            <p id="cookie-banner-description" className="text-gray-600 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="bg-[#43ab04] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#369003] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#43ab04] text-sm"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 text-sm"
              aria-label="Customize cookie preferences"
            >
              Customize
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
        >
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 id="cookie-settings-title" className="text-2xl font-bold text-gray-900 flex items-center">
                  <Settings className="h-6 w-6 mr-2 text-[#04548c]" />
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="Close cookie settings"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  We respect your privacy and give you control over your data. Choose which types of cookies you want to allow. 
                  By clicking "Accept All", you consent to our use of cookies. Learn more in our{' '}
                  <button
                    onClick={() => {
                      // Navigate to privacy policy and scroll to cookies section
                      window.location.href = '#';
                      setTimeout(() => {
                        const event = new CustomEvent('navigate-to-privacy-cookies');
                        window.dispatchEvent(event);
                      }, 100);
                    }}
                    className="text-[#43ab04] hover:text-[#369003] underline font-medium focus:outline-none focus:ring-2 focus:ring-[#43ab04] focus:ring-offset-2"
                  >
                    Privacy Policy
                  </button>.
                </p>
              </div>

              <div className="space-y-6">
                {cookieTypes.map((type) => (
                  <div key={type.key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="bg-[#04548c] p-2 rounded-lg">
                          <type.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {type.title}
                            {type.required && (
                              <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                                Required
                              </span>
                            )}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => handlePreferenceChange(type.key)}
                          disabled={type.required}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            preferences[type.key] ? 'bg-[#43ab04]' : 'bg-gray-200'
                          } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                          role="switch"
                          aria-checked={preferences[type.key]}
                          aria-labelledby={`${type.key}-label`}
                          aria-describedby={`${type.key}-description`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[type.key] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-end">
                <button
                  onClick={handleRejectAll}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
                >
                  Accept All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="bg-[#43ab04] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#369003] transition-colors duration-200 flex items-center focus:outline-none focus:ring-4 focus:ring-[#43ab04]"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;