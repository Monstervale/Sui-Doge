import { useState, useEffect } from 'react';

const useIntersectionObserver = (options) => {
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observerInstance.disconnect(); // Stop observing after the first intersection
        }
      },
      options
    );

    const element = document.querySelector(options.target);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, [options]);

  return hasIntersected;
};

export default useIntersectionObserver;
