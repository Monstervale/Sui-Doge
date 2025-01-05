import { useState,useEffect } from "react"

import bgImg from "../../assets/howToBuy/Section - 6.png"
import anime from "../../assets/howToBuy/SUIDOG5.png"
import "./buy.css"
import HowToBuySlide from "./HowToBuySlide"
import Footer from '../../components/footer/Footer';
import bgImg2 from "../../assets/howToBuy/Ellipse 8.png"
import FadeIn from "../../Pages/Home/FadeIn"
import FadeIn2 from "../../Pages/Home/FadeIn2"
import useIntersectionObserver from '../../Hooks/useIntersectionObserver';
import FadeIn3 from "../../Pages/Home/FadeIn3"


const HowToBuy = () => {
    
  const options = {
    target: '.fade-up',  // Target the element with the fade-up class
    threshold: 0.5,      // Trigger when 50% of the element is in view
  };

  const isInView = useIntersectionObserver(options);

    return (
        <div className="bg-img overflow-hidden relative " style={{ backgroundImage: `url(${bgImg})` }} >
            <div className="max-w-[1200px] mx-auto pt-[64px] px-6 lg:px-4 xl:px-0">
                <div className="h-[64px] md:h-[120px] lg:h-[150px] xl:h-[197px] box-shadow-style bg-[#0F2A6E] flex items-center justify-center ">
                    {/* <FadeIn> */}
                    <h2 className={`xl:text-[128px] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] text-[#64BBFE] text-shadow-style  text-center uppercase  flex items-center justify-center  fade-up ${isInView ? 'animate-fade-up-2' : ''}`}>How To Buy?</h2>
                    {/* </FadeIn> */}
                </div>
                <div className="md:grid grid-cols-2 gap-6 mt-6 pb-[120px]">
                    {<HowToBuySlide></HowToBuySlide>}
                    <div className="md:max-w-[586px] flex flex-col h-full mt-4 md:mt-0 relative z-20">
                    <div className="box-shadow-style bg-[#0F2A6E] flex flex-col xl:pt-[54px] pt-[40px] xl:pl-[54px] pl-[40px] h-full relative overflow-hidden">
                       <div className="flex md:flex-col justify-between">
                       <div>
                        <div>
                       <FadeIn>
                       <h1 className="text-[#64BBFE] xl:text-[48px] text-[32px] md:text-[40px] uppercase text-shadow-style2">CEX’s</h1>
                       </FadeIn> 
    
                       <p className="xl:max-w-[328px]  md:max-w-[180px] lg:max-w-[250px] max-w-[209px] sm:max-w-[300px] mt-2  font-inter xl:text-[24px] text-[16px] sm:text-[18px] md:text-[16px]    lg:text-[20px]  font-[400] text-[#CFEAFF] lg:mt-6  lg:leading-[40px] leading-[28px] sm:leading-[32px] md:leading-[28px] suiText2 pb-12 md:pb-0" >
                        <FadeIn3>
                        <span>
                       We have yet to list on any centralised exchanges, but when we do you’ll find them here. Follow the guide set by the exchange to purchase $SUIDOGE</span>
                        </FadeIn3>
                       </p> 
                        </div>
                       </div>
                        <div className="md:absolute bottom-0 -right-0">
                            <FadeIn2>
                            <div className="flex  md:max-w-[200px] sm:max-w-[250px] lg:max-w-[253px]  animeStyle2  ">
                            <img src={anime} alt="" className="max-h-[252px]  sm:max-h-[400px] md:max-h-[280px] lg:max-h-[370px] " />
                            </div>
                            </FadeIn2>
                        </div>
                       </div>
                    </div>
                    <div className="mt-6 box-shadow-style bg-[#0F2A6E] xl:h-[140px] h-[96px] flex hover:scale-105 transition-transform duration-700">
                        <button className="mx-auto text-[#64BBFE] xl:text-[48px] text-[32px]  ">
                        BUY $SuiDOGE
                        </button>
                       </div>
                    </div>
                </div>


            </div>
            <div className="w-[158%] h-[53%] 2xl:w-[113%] 2xl:h-[70%] xl:w-[117%] xl:h-[68%] lg:w-[118%] lg:h-[70%] md:w-[125%] md:h-[82%] sm:w-[134%] mx-auto bg-[#64bbfe] absolute -bottom-[28rem] -left-[122px] lg:-left-[92px] xl:-left-[122px] md:-left-[96px] rounded-l-[50%] rounded-b-[50%] rounded-r-[50%] colorDiv"></div>
            {/* Footer Start */}

            {/* <Footer></Footer> */}
        </div>
    )
}

export default HowToBuy;