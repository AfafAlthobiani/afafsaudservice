'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LazyPortMockProps {
  children: React.ReactNode;
  mockType: string;
  wide?: boolean;
}

export const LazyPortMock: React.FC<LazyPortMockProps> = ({ 
  children, 
  mockType, 
  wide 
}) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px' }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`port-mock mock-${mockType} transition-all duration-[750ms] ease-out ${
        isInView ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-6 scale-[0.98] blur-[2px]'
      }`}
      style={wide ? { aspectRatio: '16/7' } : {}}
    >
      {isInView ? children : null}
    </div>
  );
};
