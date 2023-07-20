import React from "react";
import gear from "../../../public/Images/svg/gear.svg";
import A from "../../../public/Images/svg/A.svg";
import robo from "../../../public/Images/svg/robo.svg";
import Image from "next/image";
const Features: React.FC = () => {
  return (
    <div className="mt-32 px-4 flex flex-col justify-center items-center py-16">
      <p className="text-center font-roboto text-3xl font-bold leading-120 text-light pb-12">
        Features
      </p>

      <div className="flex flex-col gap-x-4 md:flex-row max-w-[1200px] md:h-[344px] bg-[rgba(215_152_225_0.15)]   dark:bg-[#1D2130] w-full justify-evenly items-center mt-auto pt-20">
        <div className="max-w-[332px] h-[344px] justify-start items-center ">
          <Image src={gear} alt="icon" />
          <p className="font-roboto text-2xl font-bold leading-120 text-light dark:text-dark py-6">
            High security to protect from piracy
          </p>
          <p className="font-roboto text-base font-normal leading-150  text-light dark:text-dark">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
        <div className="max-w-[332px] h-[344px] justify-start items-center gap-y-6">
          <Image src={A} alt="icon" />
          <p className="font-roboto text-2xl font-bold leading-120 text-light dark:text-dark py-6">
            Premium quality performance
          </p>
          <p className="font-roboto text-base font-normal leading-150  text-light dark:text-dark">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
        <div className="max-w-[332px] h-[344px] justify-start items-center gap-y-6">
          <Image src={robo} alt="icon" />
          <p className="font-roboto text-2xl font-bold leading-120 text-light dark:text-dark py-6">
            Full time customer support - 24/7
          </p>
          <p className="font-roboto text-base font-normal leading-150  text-light dark:text-dark">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
