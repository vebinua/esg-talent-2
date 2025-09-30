import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const TemporaryChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent: "${message}"\n\nNote: This is a demo chat. Please integrate with your actual Tawk.to account for live chat functionality.`);
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#44aa00] text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label={isOpen ? "Close chat" : "Open live chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white border border-gray-300 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="bg-[#44aa00] text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">ESG Talent Support</h3>
                <p className="text-sm text-green-100">We're here to help!</p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-700">
                  👋 Hello! Welcome to ESG Talent. How can we help you today?
                </p>
                <span className="text-xs text-gray-500">Support Team</span>
              </div>
              <div className="bg-green-100 p-3 rounded-lg ml-8">
                <p className="text-xs text-green-700">
                  <strong>Demo Mode:</strong> This is a temporary chat interface. 
                  Connect your Tawk.to account for live chat functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#44aa00] focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#44aa00] text-white p-2 rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TemporaryChatButton;
