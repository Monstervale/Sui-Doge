import React, { useRef, useState, useEffect } from "react";
// import "./fadein.css";
 

const FadeIn2 = ({ children }) => {
    const elementRef = useRef(null);
    const [translateY, setTranslateY] = useState(50);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!elementRef.current) return;
        
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        const triggerPoint = elementHeight * 1.10;
        
        // Calculate how far the element is from the trigger point
        // Trigger point is when the element enters the viewport
        const distanceFromTrigger = windowHeight - rect.top;
        
        // Start animation when element comes into view
        if (distanceFromTrigger > 0) {
          // Calculate progress (0 to 1)
          const progress = Math.min(Math.max(distanceFromTrigger / triggerPoint, 0), 1);
          
          // Calculate new translateY value (50% to 0%)
          const newTranslateY = 60 * ( 1 - progress);
          setTranslateY(newTranslateY);
        } else {
          setTranslateY(50);
        }
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial check
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  //   const elementRef = useRef(null);
  // const [translateY, setTranslateY] = useState(50);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!elementRef.current) return;
      
  //     const rect = elementRef.current.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;
  //     const elementHeight = rect.height;
      
  //     // Calculate the trigger point (90% of the element's height)
  //     const triggerPoint = elementHeight * 0.9;
      
  //     // Calculate how far we've scrolled into the element
  //     const scrolledDistance = windowHeight - rect.top;
      
  //     // Start animation when element comes into view
  //     if (scrolledDistance > 0) {
  //       // Calculate progress based on the 90% trigger point
  //       const progress = Math.min(Math.max(scrolledDistance / triggerPoint, 0), 1);
        
  //       // Calculate new translateY value (50% to 0%)
  //       const newTranslateY = 50 * (1 - progress);
  //       setTranslateY(newTranslateY);
  //     } else {
  //       setTranslateY(50);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   handleScroll(); // Initial check
    
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
    return (
      <div
        ref={elementRef}
        style={{
          transform: `translateY(${translateY}%)`,
          transition: 'transform .4s ease-out',
          willChange: 'transform'
        }}
      >
          
        {children}
      </div>
    );
  };
  

export default FadeIn2;
