'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 1.5, 
  className = "" 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let started = false;

    // extract digits only
    const digitsOnly = parseInt(value.replace(/\D/g, ""), 10) || 0;

    const el = ref.current;
    if (el) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * digitsOnly));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      }, { threshold: 0.1 });
      observer.observe(el);
    }

    return () => {
      if (observer && el) {
        observer.unobserve(el);
      }
    };
  }, [value, duration]);

  // extract suffix (like '+' or any non-digit chars)
  const suffix = value.replace(/\d/g, "");

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};
