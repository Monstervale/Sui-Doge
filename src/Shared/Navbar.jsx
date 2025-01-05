import React, { useState } from "react";
import logo from "../assets/img/navbar/logo.png";
import tokenBg from "../assets/img/navbar/buy-token-bg.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-4 z-50 px-4 md:px-10 flex justify-between items-center relative border-[6px] border-b-[11px] border-[#001446] py-4 bg-white rounded-full">
      {/* Logo Section */}
      <div className="flex gap-[14px] items-center">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-[24px] text-[#64bbfe] lg:text-[32px]">Sui Doge</h1>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={`lg:hidden focus:outline-none ${
          open ? "navbarTogglerActive" : ""
        }`}
      >
        <div className="space-y-1 px-3 py-4 bg-[#0f2a6e] rounded-full">
          <span className="block w-6 h-[2px] bg-[#64bbfe]"></span>
          <span className="block w-6 h-[2px] bg-[#64bbfe]"></span>
          <span className="block w-6 h-[2px] bg-[#64bbfe]"></span>
        </div>
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          open ? "block mt-2 animate-dropdown" : "hidden"
        } absolute top-full left-0 w-full bg-white shadow-lg lg:static lg:flex lg:items-center lg:justify-between lg:w-auto lg:shadow-none rounded-3xl`}
      >
        <ul className="flex flex-col lg:flex-row xl:gap-8">
          <ListItem NavLink="/#">About</ListItem>
          <ListItem NavLink="/#">Tokenomics</ListItem>
          <ListItem NavLink="/#">How to buy</ListItem>
          <ListItem NavLink="/#">Community</ListItem>
        </ul>
        <div className="my-4 flex justify-center lg:hidden">
          <a
            href="/#"
            className="px-6 py-2 bg-[#0f2a6e] rounded-3xl text-lg font-medium text-[#64bbfe] border border-[#64bbfe] hover:bg-[#64bbfe] hover:text-white"
          >
            Buy Token
          </a>
        </div>
      </nav>

      {/* Buy Token Button for Large Screens */}
      <div className="hidden justify-end pr-16 lg:flex lg:pr-0 relative hover:scale-105 transition-transform duration-700">
            {/* Background Image */}
            <img src={tokenBg} alt="Background" className="absolute inset-0 w-full h-full" />

            {/* Text Content */}
            <a
                href="/#"
                className="relative z-10 px-8 py-2 rounded-3xl 2xl:text-2xl font-normal text-dark hover:text-primary text-[#64bbfe] dark:text-white flex items-center justify-center"
                style={{
                    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional semi-transparent background for better contrast
                    maxWidth: '300px', // Optional width to center-align text
                    margin: 'auto', // Center text horizontally in the container
                }}
            >
                Buy Token
            </a>
        </div>
    </div>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="block px-4 py-2 text-center 2xl:text-xl font-medium text-[#64bbfe] hover:text-[#5da1d4] lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};
