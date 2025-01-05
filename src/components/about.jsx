import React, { useEffect, useRef, useState } from 'react'
import "./style.css";
import background from '../assets/images/aboutbg.svg'
import img2 from '../assets/images/img2.png'
import bg2 from '../assets/images/bg2.svg'
import coins from '../assets/images/coin.svg'
import grp1 from '../assets/images/Group1.svg'
import grp2 from '../assets/images/Group2.svg'
import grp3 from '../assets/images/Group3.svg'
import grp4 from '../assets/images/Group4.svg'
import textBg from "../assets/images/text-bg.png";
import textBg2 from "../assets/images/text-bg-2.png";
import FadeIn from '../Pages/Home/FadeIn';

const About = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [coinScrollOffset, setCoinScrollOffset] = useState(0);
  const [screenSize, setScreenSize] = useState('lg');
  const containerRef = useRef(null);
  
  useEffect(() => {
      const handleScroll = () => {
          setScrollOffset(window.scrollY * 0.1);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (containerRef.current) {
            const scrollY = window.scrollY; 
            const rotationAngle = scrollY * 0.1; 
            containerRef.current.style.transform = `rotate(${rotationAngle}deg)`;
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  useEffect(() => {
    const handleScroll = () => {
      setCoinScrollOffset(window.scrollY * 0.1);
    };

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenSize('sm');
      } else if (width < 1024) {
        setScreenSize('md');
      } else if (width < 1280) {
        setScreenSize('lg');
      } else {
        setScreenSize('xl');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Initial check for screen size

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getScrollTransform = () => {
    switch (screenSize) {
      case 'sm':
        return `translateY(calc(-200px + ${scrollOffset}px))`;
      case 'md':
        return `translateY(calc(-300px + ${scrollOffset}px))`;
      case 'lg':
        return `translateY(calc(-345px + ${scrollOffset}px))`;
      case 'xl':
        return `translateY(calc(-400px + ${scrollOffset}px))`;
      default:
        return `translateY(calc(-345px + ${scrollOffset}px))`;
    }
  };

  return (
    <>
    <div className="About bg-[#69baf9]">
      <div
        className="bg-cover bg-center mx-auto px-4 sm:px-8 lg:px-16 py-12"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="content mx-auto max-w-[1200px]">
          <FadeIn>
            {/* About Text */}
            <div className={`text-center text-[#64bbfe] text-[64px] md:text-[196px] font-normal uppercase stroke `}>About</div>
          </FadeIn>

          {/* Box Text */}
          <div className="relative mx-auto max-w-3xl mt-8">
            <div className="absolute inset-0 bg-[#f0f8ff] rounded-[50px] border-l-4 border-r-8 border-t-4 border-b-8 border-[#001446]"></div>
            <FadeIn>
              <div className={`relative p-8 md:px-[62px] md:py-[72px] h-80 md:h-[500px] text-[#1d1f2c] text-lg md:text-[32px] font-semibold font-['Inter'] leading-normal`}>
                Sui Doge is here to claim his throne as the leading dog coin on the
                Sui chain! Every blockchain needs its top dog, and with no rival in
                sight, Sui Doge is ready to take over. As a Suiave Suirfer with
                effortless style and unstoppable vibes, he’s here to dominate the Sui
                waves and unite the pack.
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <img
            className="h-auto w-3/4 sm:w-2/3 lg:w-1/2 mx-auto relative z-10 
            mt-10 xl:mt-0 motion-safe:transform motion-safe:transition-transform motion-safe:duration-300"
            style={{
              transform: `translateY(calc(-180px + ${scrollOffset}px))`,
            }}
            src={img2}
            alt=""
          />
        </div>
      </div>
      {/* Tokenomics section */}
      <div className="relative bg-cover bg-center h-[1180px] md:h-[1580px] lg:h-[1050px] xl:h-[1000px] 2xl:h-[1400px] mx-auto pt-12 md:pt-0" style={{ backgroundImage: `url(${bg2})` }}>
        <FadeIn>
          <div className="text-center text-[#0F2A6E] text-6xl md:text-9xl xl:text-[196px] font-normal uppercase xl:opacity-75">
            TOKENOMICS
          </div>
        </FadeIn>
        <img 
          src={coins} 
          className="absolute right-8 md:right-[17%] lg:right-[29.33%] top-96 md:top-[38%] lg:top-72 xl:top-[20%] w-48 lg:w-56 xl:w-1/4 z-50"
          style={{
            transform: getScrollTransform(),
            transition: 'transform 0.2s ease-out',
          }}
          alt="" 
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] md:w-4/5 lg:w-2/3">
          <div className="flex flex-col lg:flex-row justify-between gap-10 bg-[#64BBFE] rounded-[50px] border-l-4 border-r-8 border-t-4 border-b-8 border-[#001446] text-[#1d1f2c] lg:px-12 xl:px-32 py-12">
            <div className="flex justify-center items-center gap-2 " ref={containerRef}>
              <div className="flex flex-col gap-2">
                <img src={grp1} alt="Group 1" className="w-20 md:w-44 xl:w-full h-auto object-contain" />
                <img src={grp3} alt="Group 3" className="w-20 md:w-44 xl:w-full h-auto object-contain" />
              </div>
              <div className="flex flex-col gap-2">
                <img src={grp2} alt="Group 2" className="w-20 md:w-44 xl:w-full h-auto object-contain" />
                <img src={grp4} alt="Group 4" className="w-20 md:w-44 xl:w-full h-auto object-contain" />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="relative text-center">
                <img src={textBg} alt="Background" className="w-56 xl:w-full h-auto" />
                <span className="absolute inset-0 flex items-center justify-center text-[#64BBFE] font-bold text-xs md:text-xl lg:text-sm xl:text-2xl 2xl:text-4xl">
                  1,000,000,000 SUPPLY
                </span>
              </div>
              <div className="relative text-center">
                <img src={textBg2} alt="Background" className="w-56 xl:w-full h-auto" />
                <span className="absolute inset-0 flex items-center justify-center text-[#0f2a6e] font-bold text-xs md:text-xl lg:text-sm xl:text-2xl 2xl:text-4xl">
                  0/0 TAX
                </span>
              </div>
              <div className="relative text-center">
                <img src={textBg} alt="Background" className="w-56 xl:w-full h-auto" />
                <span className="absolute inset-0 flex items-center justify-center text-[#64BBFE] font-bold text-xs md:text-xl lg:text-sm xl:text-2xl 2xl:text-4xl">
                  CA RENOUNCED
                </span>
              </div>
              <div className="relative text-center">
                <img src={textBg2} alt="Background" className="w-56 xl:w-full h-auto" />
                <span className="absolute inset-0 flex items-center justify-center text-[#0f2a6e] font-bold text-xs md:text-xl lg:text-sm xl:text-2xl 2xl:text-4xl">
                  100% LP BURNT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>

  )
}

export default About