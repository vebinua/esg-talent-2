import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface AccessibilityContextType {
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  toggleHighContrast: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');

  useEffect(() => {
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedFontSize = localStorage.getItem('accessibility-font-size') as 'normal' | 'large' | 'extra-large' || 'normal';
    
    setHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
  }, []);

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('accessibility-high-contrast', highContrast.toString());
  }, [highContrast]);

  useEffect(() => {
    // Apply font size
    document.documentElement.classList.remove('font-large', 'font-extra-large');
    if (fontSize === 'large') {
      document.documentElement.classList.add('font-large');
    } else if (fontSize === 'extra-large') {
      document.documentElement.classList.add('font-extra-large');
    }
    localStorage.setItem('accessibility-font-size', fontSize);
  }, [fontSize]);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const increaseFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('extra-large');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'extra-large') setFontSize('large');
    else if (fontSize === 'large') setFontSize('normal');
  };

  const resetFontSize = () => {
    setFontSize('normal');
  };

  return (
    <AccessibilityContext.Provider value={{
      highContrast,
      fontSize,
      toggleHighContrast,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};