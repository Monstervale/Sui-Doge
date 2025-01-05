import { useRef, useEffect, useState } from 'react';

const FadeIn4 = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!hasAnimated) return 'fade-in';
    if (isVisible) {
      return `scroll-animate scroll-${scrollDirection}`;
    }
    return 'scroll-animate';
  };

  return (
    <>
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-animate {
          transform: translateY(10%);
          transition: transform 1s ease-out;
        }
        
        @keyframes scrollDown {
          from {
            transform: translateY(10%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        @keyframes scrollUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(7%);
          }
        }
        
        .scroll-animate.scroll-down {
          animation: scrollDown 1s ease-out forwards;
        }
        
        .scroll-animate.scroll-up {
          animation: scrollUp 1s ease-out forwards;
        }
      `}</style>
      <div 
        ref={ref}
        className={`${getAnimationClass()} ${isVisible ? 'show' : ''} ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default FadeIn4;