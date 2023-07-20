import React from "react";
import Image from "next/image";
import icon from "../../public/Images/svg/logoispam.svg";
import logo2 from "../../public/Images/svg/🧿inspirations/Logo2.svg"
import logo3 from "../../public/Images/svg/Logo 3.svg"
import logo4 from "../../public/Images/svg/Logo 4.svg"
import logo5 from "../../public/Images/svg/Logo 5.svg"
const LogoIpsum: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 max-w-[1200px] m-auto mt-4 gap-y-10 sm:mt-32 justify-evenly items-center">
      <Image
        src={icon}
        alt="icon"
        className=" sm:max-w-[100px] md:max-w-[150px] lg:w-full"
      />
      <Image
        src={logo2}
        alt="icon"
        className=" sm:max-w-[100px] md:max-w-[150px] lg:w-full"
      />
      <Image
        src={logo3}
        alt="icon"
        className=" sm:max-w-[100px] md:max-w-[150px] lg:w-full"
      />
      <Image
        src={logo4}
        alt="icon"
        className=" sm:max-w-[100px] md:max-w-[150px] lg:w-full"
      />
      <Image
        src={logo5}
        alt="icon"
        className=" sm:max-w-[100px] md:max-w-[150px] lg:w-full"
      />
    </div>
  );
};
export default LogoIpsum;
