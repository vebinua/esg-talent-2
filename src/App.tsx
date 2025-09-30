import React, { useState } from 'react';
import { useEffect } from 'react';
import { AccessibilityProvider } from './components/AccessibilityProvider';
import CookieConsent from './components/CookieConsent';
import PremiumHeader from './components/PremiumHeader';
import Footer from './components/Footer';
import PremiumHomePage from './pages/PremiumHomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SustainabilityPage from './pages/SustainabilityPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import InsightsPage from './pages/InsightsPage';
import ArticlePage from './pages/ArticlePage';
import ProfilePage from './pages/ProfilePage';
import TawkToChat from './components/TawkToChat';
import TemporaryChatButton from './components/TemporaryChatButton';
import ESGCursor from './components/LeafCursor';
import BackToTopButton from './components/BackToTopButton';

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const [currentArticleId, setCurrentArticleId] = useState<string>('');
  const [currentProfileId, setCurrentProfileId] = useState<string>('');
  const [profileSection, setProfileSection] = useState<string>('');

  // Initialize page from URL
  useEffect(() => {
    const path = window.location.pathname;
    const pathSegments = path.split('/').filter(segment => segment);
    
    if (pathSegments.length === 0) {
      setCurrentPage('home');
    } else if (pathSegments[0] === 'insights' && pathSegments[1]) {
      setCurrentPage('article');
      setCurrentArticleId(pathSegments[1]);
    } else if (pathSegments[0] === 'profile' && pathSegments[1]) {
      setCurrentPage('profile');
      setCurrentProfileId(pathSegments[1]);
    } else {
      setCurrentPage(pathSegments[0]);
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(segment => segment);
      
      if (pathSegments.length === 0) {
        setCurrentPage('home');
      } else if (pathSegments[0] === 'insights' && pathSegments[1]) {
        setCurrentPage('article');
        setCurrentArticleId(pathSegments[1]);
      } else if (pathSegments[0] === 'profile' && pathSegments[1]) {
        setCurrentPage('profile');
        setCurrentProfileId(pathSegments[1]);
      } else {
        setCurrentPage(pathSegments[0]);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Also handle page refresh by checking URL on mount
    handlePopState();
    
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle browser refresh - ensure URL matches current page
  useEffect(() => {
    const path = window.location.pathname;
    const expectedPath = currentPage === 'home' ? '/' : `/${currentPage}`;
    
    // If URL doesn't match current page, update the page state
    if (path !== expectedPath && currentPage) {
      const pathSegments = path.split('/').filter(segment => segment);
      
      if (pathSegments.length === 0) {
        setCurrentPage('home');
      } else if (pathSegments[0] === 'insights' && pathSegments[1]) {
        setCurrentPage('article');
        setCurrentArticleId(pathSegments[1]);
      } else if (pathSegments[0] === 'profile' && pathSegments[1]) {
        setCurrentPage('profile');
        setCurrentProfileId(pathSegments[1]);
      } else if (['about', 'services', 'sustainability', 'insights', 'careers', 'contact', 'privacy-policy'].includes(pathSegments[0])) {
        setCurrentPage(pathSegments[0]);
      } else {
        // Invalid route, redirect to home
        setCurrentPage('home');
        window.history.replaceState(null, '', '/');
      }
    }
  }, [currentPage]);
  useEffect(() => {
    const handleNavigateToPrivacyCookies = () => {
      setCurrentPage('privacy-policy');
      window.history.pushState(null, '', '/privacy-policy');
      // Small delay to allow page to load, then scroll to cookies section
      setTimeout(() => {
        const element = document.getElementById('cookies-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    };

    window.addEventListener('navigate-to-privacy-cookies', handleNavigateToPrivacyCookies);
    return () => window.removeEventListener('navigate-to-privacy-cookies', handleNavigateToPrivacyCookies);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Update URL
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', url);
    // Immediately scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleArticleChange = (articleId: string) => {
    setCurrentArticleId(articleId);
    setCurrentPage('article');
    window.history.pushState(null, '', `/insights/${articleId}`);
  };

  const handleProfileChange = (profileId: string) => {
    setCurrentProfileId(profileId);
    setCurrentPage('profile');
    window.history.pushState(null, '', `/profile/${profileId}`);
    // Immediately scroll to top when opening profile
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleProfileChangeWithSection = (profileId: string, section: string) => {
    setCurrentProfileId(profileId);
    setProfileSection(section);
    setCurrentPage('profile');
    window.history.pushState(null, '', `/profile/${profileId}`);
    // Immediately scroll to top when opening profile
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handlePageChangeFromProfile = (page: string) => {
    setCurrentPage(page);
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', url);
    if (page === 'about' && profileSection) {
      // Small delay to allow page to load, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(profileSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setProfileSection(''); // Clear the section after scrolling
      }, 100);
    } else {
      // Immediately scroll to top for other pages
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PremiumHomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} onProfileChange={handleProfileChangeWithSection} />;
      case 'services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case 'sustainability':
        return <SustainabilityPage onPageChange={handlePageChange} />;
      case 'insights':
        return <InsightsPage onPageChange={handlePageChange} onArticleChange={handleArticleChange} />;
      case 'article':
        return <ArticlePage articleId={currentArticleId} onPageChange={handlePageChange} onArticleChange={handleArticleChange} />;
      case 'profile':
        return <ProfilePage profileId={currentProfileId} onPageChange={handlePageChangeFromProfile} />;
      case 'careers':
        return <CareersPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage onPageChange={handlePageChange} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onPageChange={handlePageChange} />;
      default:
        return <PremiumHomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <AccessibilityProvider>
      <div className="min-h-screen flex flex-col">
        <ESGCursor />

        {/* Skip Links */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="#main-navigation" className="skip-link">
          Skip to navigation
        </a>

        <PremiumHeader currentPage={currentPage} onPageChange={handlePageChange} />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {renderPage()}
        </main>
        <Footer onPageChange={handlePageChange} />
        <CookieConsent />
        <TawkToChat />
        <TemporaryChatButton />
        <BackToTopButton />
      </div>
    </AccessibilityProvider>
  );
}

export default App;