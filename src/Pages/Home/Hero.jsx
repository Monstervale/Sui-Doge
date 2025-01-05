import React, { useEffect, useState } from 'react';
import heroImg from "../../assets/img/navbar/hero-img.png";
import tokenBg from "../../assets/img/navbar/buy-token-bg.svg";
import "../../components/home/buy.css";
import FadeIn from './FadeIn';

const Hero = () => {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY * -0.2);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start mx-4">
        {/* Left Section */}
        <div className="mr-0 lg:mr-20 mt-8 lg:mt-12 text-center lg:text-left block">
            <FadeIn>
                <h1 className="uppercase text-[#0f2a6e] text-[120px] lg:text-[200px] leading-[7rem] lg:leading-[10.5rem]">
                Sui Doge
                </h1>
                <p className="font-inter text-sm sm:text-base lg:text-lg text-[#444956] font-bold mt-4 lg:mt-8">
                Sui Doge is here to take over!
                </p>
                {/* Buy Token Button */}
                <div className="justify-center lg:justify-start flex relative mt-6">
                    <img
                        src={tokenBg}
                        alt="Background"
                        className="absolute lg:inset-0 w-full md:w-60 h-full"
                    />
                    <a
                        href="/#"
                        className="relative lg:z-10 w-[95%] sm:w-[85%] md:w-[75%] lg:w-auto px-8 py-5 sm:px-12 sm:py-6 rounded-3xl text-center text-lg sm:text-2xl lg:text-3xl font-medium text-[#64bbfe] dark:text-white hover:text-primary bg-transparent hover:scale-110 transition-transform duration-700"
                    >
                        Buy Token
                    </a>
                </div>
            </FadeIn>
        </div>

        {/* Right Section */}
        <div 
            className="flex justify-center lg:justify-end mb-2 xl:mb-4"
            style={{
                transform: `translateX(${scrollOffset}px)`,
                transition: "transform 0.1s ease-out",
            }}
        >
            <img
            src={heroImg}
            alt="Hero"
            className="h-auto w-64 sm:w-80 md:w-[500px] lg:w-[750px] fly-bounce"
            />
        </div>
    </div>

  )
}

export default Hero