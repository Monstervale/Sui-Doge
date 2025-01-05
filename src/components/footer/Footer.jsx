import { useRef,useState,useEffect } from "react";

import { SiDiscord } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import anime3 from "../../assets/howToBuy/SUIDOG77.png"
import anime4 from "../../assets/howToBuy/SUIDOG7.png"
import footerBg from "../../assets/howToBuy/Wireframe - 3.png"
import FadeIn from "../../Pages/Home/FadeIn";

const Footer = () => {

    const footerRef = useRef(null); // Reference for the element
    const [isVisible, setIsVisible] = useState(false); // Track visibility
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation
            observer.unobserve(entry.target); // Stop observing after animation
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      );
  
      if (footerRef.current) {
        observer.observe(footerRef.current); // Observe the element
      }
  
      return () => {
        if (footerRef.current) observer.unobserve(footerRef.current); // Cleanup
      };
    }, []);

    return (
        <div className="bg-[#64BBFE] overflow-hidden">
            <div className=" " style={{ backgroundImage: `url(${footerBg})` }}>
                <div className=" max-w-[1200px] mx-auto px-6 lg:px-4 xl:px-0 ">
                    <div className="md:h-[340px] md:flex justify-between ">
                        <div className="md:py-[48px] pt-[48px] flex flex-col h-full justify-between ">
                            <div>
                                <FadeIn>
                                    <h1 className="xl:text-[64px] lg:text-[56px] md:text-[50px] text-[40px] text-[#64BBFE] leading-none" >JOIN THE COMMUNITY</h1>
                                </FadeIn>
                                <FadeIn>
                                <div className="flex gap-3 mt-[32px] items-center">
                                    <a href="" className="lg:w-[32px] lg:h-[32px] md:h-[28px] md:w-[28px] w-[24px] h-[24px] ">
                                        <SiDiscord className="text-[#64BBFE] w-full h-full" />
                                    </a>
                                    <a href="" className="lg:w-[32px] lg:h-[32px] md:h-[28px] md:w-[28px] w-[24px] h-[24px] ">
                                        <FaTelegramPlane className="text-[#64BBFE] w-full h-full" />
                                    </a>
                                    <a href="" className="mr-[16px] lg:w-[32px] lg:h-[32px] md:h-[28px] md:w-[28px] w-[24px] h-[24px] ">
                                        <BsTwitterX className="text-[#64BBFE] w-full h-full" />
                                    </a>
                                    <div className="">
                                        <h2 className="text-[24px] text-[#64BBFE]">@SuiDOGE</h2>
                                    </div>
                                </div>
                                </FadeIn>
                            </div>
                            <div>
                                <p className="text-[16px] text-[#64BBFE] mt-[32px] md:mt-0">© 2024 all RIGHTS RESERVED | Sui DOGE</p>
                            </div>
                        </div>
                        <div ref={footerRef}
                  className={`  flex justify-center relative top-[30px] footerMagic footerMagic ${isVisible ? "animate" : ""}`}>
                            <img src={anime4} alt="" className="md:h-[446px] hidden md:block -mt-[60px] animate-bounces" />
                            <img src={anime3} alt="" className="md:h-[446px] block md:hidden -mt-[60px] animate-bounces" />
                        </div>
                    </div>

                </div>
                <div className="h-[60px] bg-[#001446]">
                </div>
            </div>
        </div>
    )
}
export default Footer;