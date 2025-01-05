import React, { useEffect, useRef } from "react";
import "./fadein.css"; // Add the CSS for animations

const FadeIn = ({ children, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.1}
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
};

export default FadeIn;
