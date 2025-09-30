import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'fade-in' | 'scale-up';
  delay?: number;
  className?: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-500 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-4`;
        case 'slide-left':
          return `${baseClasses} opacity-0 -translate-x-4`;
        case 'slide-right':
          return `${baseClasses} opacity-0 translate-x-4`;
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'scale-up':
          return `${baseClasses} opacity-0 scale-98`;
        default:
          return `${baseClasses} opacity-0 translate-y-4`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;