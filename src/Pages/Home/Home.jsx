import React from 'react';
import Navbar from '../../Shared/Navbar';
import HowToBuy from '../../components/home/HowToBuy';
import Footer from '../../components/footer/Footer';


import Hero from './Hero';
import Marquetext from '../../components/marquetext';
import About from '../../components/about';
import bgImage from '../../assets/img/navbar/bg-design.png';


const Home = () => {




    return (
        <div className="relative">
            {/* Full-Page Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full -z-10"
                style={{
                backgroundImage: `url(${bgImage})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                opacity: 0.2,
                }}
            ></div>

            <div className="relative">
                {/* Gradient Background */}
                <div className="absolute top-0 left-0 w-full h-96 md:h-[714px] overflow-hidden -z-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 715"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    <path
                    d="M1644 -34.5C1644 340.225 1164.33 715 652.638 715C140.946 715 -209 340.225 -209 -34.5C-209 -409.225 205.808 -713 717.5 -713C1229.19 -713 1644 -409.225 1644 -34.5Z"
                    fill="url(#paint0_linear_5224_671)"
                    />
                    <defs>
                    <linearGradient
                        id="paint0_linear_5224_671"
                        x1="717.5"
                        y1="-157.5"
                        x2="717.5"
                        y2="715"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#64BBFE" />
                        <stop offset="1" stopColor="#64BBFE" stopOpacity="0" />
                    </linearGradient>
                    </defs>
                </svg>
                </div>

                {/* Navbar */}
                <div className="container mx-auto relative top-4 xl:top-8 z-10">
                    <Navbar />
                </div>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto mb-4 lg:mb-0 lg:my-20">
                <Hero />
            </div>

            {/* Additional Content */}
            <div className="relative z-10">
                <Marquetext />
                  <About />
                <Marquetext />
            </div>
        <div>
            <HowToBuy></HowToBuy>
            <Footer/>
        </div>
        </div>

    );
};

export default Home;