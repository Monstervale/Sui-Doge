import React, { useRef, useState } from 'react';
import anime from "../../assets/howToBuy/SUIDOG5.png"
import anime2 from "../../assets/howToBuy/SUIDOG2.png"
import anime3 from "../../assets/howToBuy/SUIDOG3.png"
import anime4 from "../../assets/howToBuy/SUIDOG4.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./buy.css"
import FadeIn2 from "../../Pages/Home/FadeIn2"
import FadeIn from "../../Pages/Home/FadeIn"
import FadeIn4 from '../../Pages/Home/Fadein4';

// import required modules
import { Pagination } from 'swiper/modules';

export default function HowToBuySlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        modules={[Pagination]}
        className="mySwiper "
      >

           
        <SwiperSlide>
            <div className="box-shadow-style bg-[#F0F8FF] flex flex-col xl:pt-[54px] pt-[40px] xl:pl-[54px] pl-[40px] h-[384px] sm:h-[430px] lg:h-[600px] xl:h-[640px] md:max-w-[590px] relative overflow-hidden">
                                 <FadeIn4>
                                 <p className="text-[#64BBFE] xl:text-[32px] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] ">STEP 1:</p>
                                 <h1 className="text-[#0F2A6E] xl:text-[3.43rem] text-[32px] sm:text-[36px] md:text-[30px] lg:text-[44px] uppercase suiText">create a sui wallet</h1>
                                 <p className="max-w-[353px] font-inter xl:text-[24px] text-[16px] md:text-[16px] lg:text-[20px] font-[400] text-[#2A4F6B] lg:leading-[40px] leading-[24px] " >Download Sui Wallet, Surf wallet, or ANY wallet of your choice.</p>
                                 </FadeIn4>
                                 <div className=" absolute bottom-0 -right-0  ">
                                     <FadeIn2>
                                     <div className="flex h-[252px] sm:h-[400px] md:h-[280px] lg:h-[420px] suiImg ">
                                     <img src={anime}  alt="" />
                                     </div>
                                     </FadeIn2>
                                 </div>
                             </div>
                             </SwiperSlide>
        <SwiperSlide>
            <div className="box-shadow-style bg-[#F0F8FF] flex flex-col xl:pt-[54px] pt-[40px] xl:pl-[54px] pl-[40px] h-[384px] sm:h-[430px] lg:h-[600px] xl:h-[640px] md:max-w-[590px] relative overflow-hidden">
                                 <FadeIn4>
                                 <p className="text-[#64BBFE] xl:text-[32px] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] ">STEP 2:</p>
                                 <h1 className="text-[#0F2A6E] xl:text-[3.43rem] text-[32px] sm:text-[36px] md:text-[30px] lg:text-[44px] uppercase suiText">GET some sui</h1>
                                 <p className="max-w-[296px] font-inter xl:text-[24px] text-[16px] md:text-[16px] lg:text-[20px] font-[400] text-[#2A4F6B]  lg:leading-[40px] leading-[24px]" >Have $SUI in your wallet to switch to $SDOGE.</p>
                                 </FadeIn4>
                                 <div className=" absolute bottom-0 right-2   ">
                                 <FadeIn2>
                                     <div className="flex h-[252px] sm:h-[400px] md:h-[280px] lg:h-[420px] suiImg">
                                     <img src={anime2}  alt="" />
                                     </div>
                                     </FadeIn2>
                                 </div>
                             </div>
                             </SwiperSlide>
        <SwiperSlide>
            <div className="box-shadow-style bg-[#F0F8FF] flex flex-col xl:pt-[54px] pt-[40px] xl:pl-[54px] pl-[40px] h-[384px] sm:h-[430px] lg:h-[600px] xl:h-[640px] md:max-w-[590px] relative overflow-hidden">
                                <FadeIn4>
                                 <p className="text-[#64BBFE] xl:text-[32px] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] ">STEP 3:</p>
                                 <h1 className="text-[#0F2A6E] xl:text-[3.43rem] text-[32px] sm:text-[36px] md:text-[30px] lg:text-[44px] uppercase suiText">GO TO CETUS</h1>
                                 <p className="max-w-[409PX] font-inter xl:text-[24px] text-[16px] md:text-[16px] lg:text-[20px] font-[400] text-[#2A4F6B] lg:leading-[40px] leading-[24px] md:leading-[32px]" >Connect to www.cetus.zone with your $SUI Wallet app. Then paste the $SDOGE token address in or search for the token using the <br /> $SDOGE ticker.</p>
                                 </FadeIn4>
                                 <div className=" absolute bottom-0 -right-[40PX] sm:-right-[50px]  md:-right-[40px] overflow-hidden">
                                     <FadeIn2>
                                     <div className="flex h-[224px] sm:h-[320px] md:h-[240px] lg:h-[327px] suiImg">
                                     <img src={anime3}  alt="" />
                                     </div>
                                     </FadeIn2>
                                 </div>
                             </div>
                             </SwiperSlide>
        <SwiperSlide>



        <div className="box-shadow-style bg-[#F0F8FF] flex flex-col xl:pt-[54px] pt-[40px] xl:pl-[54px] pl-[40px] h-[384px] sm:h-[430px] lg:h-[600px] xl:h-[640px] md:max-w-[590px] relative overflow-hidden">
                                <FadeIn4>
                                 <p className="text-[#64BBFE] xl:text-[32px] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]">STEP 4:</p>
                                 <h1 className="text-[#0F2A6E] xl:text-[3.43rem] text-[32px] sm:text-[36px] md:text-[30px] lg:text-[44px] uppercase suiText">SWITCH $SUI FOR $SDOGE</h1>
                                 <p className="max-w-[250px] sm:max-w-[270px] font-inter xl:text-[24px] text-[16px] md:text-[16px] lg:text-[20px] font-[400] text-[#2A4F6B] lg:leading-[40px] leading-[24px]">Switch your $SUI for $SDOGE and don't forget to adjust slippage if you need to.</p>
                                 </FadeIn4>
                                 <div className="flex">
                                     <div className="absolute bottom-0 right-2 ">
                                     <FadeIn2>
                                     <div className="flex h-[210px] sm:h-[400px] md:h-[225px] lg:h-[340px] suiImg">
                                     <img src={anime4}  alt="" />
                                     </div>
                                     </FadeIn2>
                                     </div>
                                 </div>
                             </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


