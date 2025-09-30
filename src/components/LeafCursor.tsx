import React, { useEffect, useState } from 'react';

const ESGCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const interactive =
        ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) ||
        !!target.closest('button, a, input, textarea, select') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(interactive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTouchDevice]);

  // Don't render cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className={`esg-cursor${isClicking ? ' clicking' : ''}${isHovering ? ' hovering' : ''}`}
      style={{
        top: position.y,
        left: position.x,
      }}
    />
  );
};

export default ESGCursor;
