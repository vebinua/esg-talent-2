import React, { useState } from 'react';
import { Type, Contrast, Settings, X, Plus, Minus, RotateCcw } from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

const AccessibilityToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { highContrast, fontSize, toggleHighContrast, increaseFontSize, decreaseFontSize, resetFontSize } = useAccessibility();

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[9999] bg-[#04548c] text-white p-3 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-200"
        aria-label={isOpen ? "Close accessibility options" : "Open accessibility options"}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Settings className="h-5 w-5" />}
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          id="accessibility-panel"
          className="fixed top-16 right-4 z-[9998] bg-white border border-gray-300 rounded-lg shadow-xl p-6 w-80"
          role="dialog"
          aria-labelledby="accessibility-title"
          aria-describedby="accessibility-description"
        >
          <div className="mb-4">
            <h2 id="accessibility-title" className="text-lg font-semibold text-gray-900 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Accessibility Options
            </h2>
            <p id="accessibility-description" className="text-sm text-gray-600 mt-1">
              Customize your viewing experience
            </p>
          </div>

          <div className="space-y-4">
            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast-toggle" className="flex items-center text-sm font-medium text-gray-700">
                <Contrast className="h-4 w-4 mr-2" />
                High Contrast
              </label>
              <button
                id="high-contrast-toggle"
                onClick={toggleHighContrast}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  highContrast ? 'bg-[#04548c]' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={highContrast}
                aria-labelledby="high-contrast-toggle"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Font Size Controls */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Type className="h-4 w-4 mr-2" />
                Font Size: {fontSize}
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize === 'normal'}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Decrease font size"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize === 'extra-large'}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Increase font size"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  onClick={resetFontSize}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Reset font size to normal"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Skip Links */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Navigation</h3>
            <div className="space-y-1">
              <button
                onClick={() => {
                  const mainContent = document.getElementById('main-content');
                  mainContent?.focus();
                  setIsOpen(false);
                }}
                className="block w-full text-left text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
              >
                Skip to main content
              </button>
              <button
                onClick={() => {
                  const navigation = document.getElementById('main-navigation');
                  navigation?.focus();
                  setIsOpen(false);
                }}
                className="block w-full text-left text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
              >
                Skip to navigation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityToolbar;