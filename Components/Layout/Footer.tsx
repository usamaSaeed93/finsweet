"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/Images/png/Logo.svg";
import payment from '../../public/Images/svg/payment.svg'
import review from '../../public/Images/svg/Review.svg'
import { useState } from "react";
const Footer = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAccordionToggle = () => {
    setExpanded(!expanded);
  };
  const style = { fontSize: 21, color: "white" };
  return (
    <>
      <div className="lg:h-96 h-max bg-layoutBlue justify-center pb-14 items-center mt-10 ">
        <div className="max-w-[1200px] flex-col sm:flex-row flex items-center lg:items-start justify-between px-[10%] lg:justify-evenly pt-14 gap-y-10 gap-x-10 m-auto">
          <div className="flex flex-col gap-10">
            <Image src={logo} alt="logo" />
            <div className="flex flex-col  gap-9">
             <p className="font-Inter max-w-[200px]">This is a truly spectacular theme! The custom page builder is definitely</p>
             <Image 
             src={payment}
             alt='payment'
             />
            </div>
          </div>

          <div className=" hidden lg:flex flex-col gap-5 ">
            <p className="text-black font-medium font-poppins">Company</p>
            <p className="text-black font-normal font-poppins ">
              Home
            </p>
            <p className="text-black font-normal font-poppins ">
             Connect
            </p>
            <p className="text-black font-normal font-poppins ">
             Pricing
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <p className="text-black font-medium font-poppins">Connect</p>
            <p className="text-black font-normal font-poppins ">
            Home
            </p>
            <p className="text-black font-normal font-poppins ">
          Pricing
            </p>
            <p className="text-black font-normal font-poppins ">
            About
            </p>
            <p className="text-black font-normal font-poppins ">
              Aliquet et.
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <p className="text-black font-medium font-poppins">Experts</p>
            <p className="text-black font-normal font-poppins ">
             Our Community
            </p>
            <p className="text-black font-normal font-poppins ">
             Facebook
            </p>
            <p className="text-black font-normal font-poppins ">
            Blog
            </p>
            <p className="text-black font-normal font-poppins ">
             Contact us
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-5">
            <p className="text-black font-medium font-poppins">Experts</p>
            <p className="text-black font-normal font-poppins ">
             Experts
            </p>
            <p className="text-black font-normal font-poppins ">
             Apply as a Talent
            </p>
            <p className="text-black font-normal font-poppins ">
            Vetting Guidelines
            </p>
            <p className="text-black font-normal font-poppins ">
             Expert Sign in
            </p>
          </div>
          <div className="flex flex-col gap-y-10">
            <Image 
            src={review}
            alt="none"
            />
              <p className="font-Inter max-w-[200px] gap-5">4190 jobs completed successfully with 97.4% 5 star reviews</p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-y-3 lg:justify-between m-auto mt-20 max-w-[1000px] ">
            <p className="text-black font-normal font-poppins ">
            ©2021 Besnik. All rights reserved.
            </p>
          <p className="text-black font-normal font-poppins ">
         Terms   Privacy
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
