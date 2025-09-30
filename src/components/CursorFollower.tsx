import React, { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  delay: number;
}

const CursorFollower: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch or is mobile
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent);
      
      return hasTouch || isMobile || isTablet;
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    // Initialize floating elements
    const initialElements: FloatingElement[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      size: 4 + Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.4,
      delay: i * 0.1,
    }));

    setElements(initialElements);
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const animateElements = () => {
      setElements(prev => prev.map((element, index) => {
        const delay = index * 50; // Stagger the following effect
        const targetX = mousePosition.x + (Math.random() - 0.5) * 100;
        const targetY = mousePosition.y + (Math.random() - 0.5) * 100;
        
        // Smooth following with easing
        const easing = 0.05 + index * 0.01;
        const newX = element.x + (targetX - element.x) * easing;
        const newY = element.y + (targetY - element.y) * easing;

        return {
          ...element,
          x: newX,
          y: newY,
          targetX,
          targetY,
        };
      }));
    };

    const intervalId = setInterval(animateElements, 16); // ~60fps
    return () => clearInterval(intervalId);
  }, [mousePosition, isTouchDevice]);

  // Don't render cursor follower on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-[#04548c] to-[#023d67] transition-all duration-300 ease-out"
          style={{
            left: element.x - element.size / 2,
            top: element.y - element.size / 2,
            width: element.size,
            height: element.size,
            opacity: element.opacity,
            transform: `scale(${0.8 + Math.sin(Date.now() * 0.001 + element.id) * 0.2})`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorFollower;