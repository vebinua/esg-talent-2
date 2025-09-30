import React from 'react';

interface AIOptimizedContentProps {
  children: React.ReactNode;
  entityType?: string;
  keyFacts?: string[];
  summary?: string;
  className?: string;
}

const AIOptimizedContent: React.FC<AIOptimizedContentProps> = ({
  children,
  entityType,
  keyFacts = [],
  summary,
  className = ''
}) => {
  return (
    <div 
      className={className}
      data-ai-entity={entityType}
      data-ai-summary={summary}
      data-ai-facts={keyFacts.join(' | ')}
    >
      {/* Hidden AI-readable summary */}
      {summary && (
        <div 
          style={{ display: 'none' }} 
          data-ai-content="summary"
          aria-hidden="true"
        >
          {summary}
        </div>
      )}
      
      {/* Hidden key facts for AI */}
      {keyFacts.length > 0 && (
        <div 
          style={{ display: 'none' }} 
          data-ai-content="key-facts"
          aria-hidden="true"
        >
          <ul>
            {keyFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Main content */}
      <div data-ai-content="main">
        {children}
      </div>
    </div>
  );
};

export default AIOptimizedContent;