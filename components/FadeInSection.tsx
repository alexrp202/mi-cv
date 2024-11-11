// src/components/FadeInSection.tsx
import React, { useRef, useEffect, useState, ReactNode } from "react";
import "./FadeInSection.css";

interface FadeInSectionProps {
  children: ReactNode; // Tipo explícito para 'children'
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Detiene la observación al ser visible
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
