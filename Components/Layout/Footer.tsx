"use client";
import React from "react";
import Image from "next/image";
import logo from '../../public/Images/png/LogoWhite.svg';
import { useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAccordionToggle = () => {
    setExpanded(!expanded);
  };
  const style = { fontSize:"20px", color: "#9E9E9E" };
  return (
    <>
    <div className="bg-[#1D2130] dark:bg-[#bdeee9]">

 
      <div className="lg:h-96 h-max bg-layoutBlue justify-center pb-14 items-center mt-10 max-w-[1200px] w-full ">
        <div className="max-w-[1400px] w-full flex-col sm:flex-row flex items-center lg:items-start justify-between px-[10%]  pt-14 gap-y-10 gap-x-10 m-auto">
          <div className=" hidden lg:flex flex-col gap-5 ">
            <p className="text-white dark:text-light  font-medium font-roboto">Company</p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
              Home
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Connect
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Pricing
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <p className="text-white dark:text-light  font-medium font-roboto">Connect</p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
            Home
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
          Pricing
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
            About
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
              Aliquet et.
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <p className="text-white dark:text-light  font-medium font-roboto">Experts</p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Our Community
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Facebook
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
            Blog
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Contact us
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <p className="text-white dark:text-light  font-medium font-roboto">Experts</p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Experts
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Apply as a Talent
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
            Vetting Guidelines
            </p>
            <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
             Expert Sign in
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <Image src={logo} alt="logo" />
            <p className="text-white dark:text-light  font-medium font-roboto">Subscrbe to our NewsLetter </p>
            <div className='max-w-[275px] h-14  justify-between items-center w-full flex flex-row px-4  rounded-lg bg-[#2B2E3C]'>
            <input type="text" placeholder='Search' className='max-w-[150px]  text-white dark:text-light  font-medium outline-none border-none  bg-[#2B2E3C] ' />
            <button className="w-36 h-max rounded-md bg-white  font-normal text-light text-base p-4 flex justify-center items-center ">
       Subscribe
          </button>
        </div>
          </div>
        </div>
<div className="relative  mt-10 m-auto justify-center items-center max-w-[1200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">


        <div className="flex md:flex-row flex-col justify-center items-center gap-y-3 gap-x-3 m-auto mt-20 max-w-[1000px]   ">
        <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
        © Copyright Finsweet 2022
            </p>
            <div className="flex flex-row gap-3  text-gray-500 dark:text-light">
              <FacebookIcon className="text-xl text-gray-500 dark:text-light" />
              <TwitterIcon  className=" text-gray-500 dark:text-light"/>
              <InstagramIcon  className="text-gray-500 dark:text-light"/>
              <LinkedInIcon  className="text-gray-500 dark:text-light"/>
            </div>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Footer;
