import React from "react";
import safe from "../../../public/Images/svg/🧿inspirations/safe.svg";
import head from "../../../public/Images/svg/headphone.svg";
import thumb from "../../../public/Images/svg/thumb.svg";
import Image from "next/image";
const Quality: React.FC = () => {
  return (
    <div className="mt-3 md:mt-32 px-4 flex flex-col justify-center items-center py-16">
      <p className="gradient_text text-center font-roboto text-xl font-bold leading-120 max-w-[570px] pb-7 ">
        High Quality
      </p>
      <p className="text-center font-roboto text-3xl font-bold leading-120  text-light dark:text-dark pb-12">
        We have the Best Solution for your Business
      </p>

      <div className="flex flex-col gap-x-4 md:flex-row max-w-[1200px] md:h-[344px] bg-[#E0E4FC] dark:bg-[#1D2130] w-full justify-evenly items-center mt-auto pt-2 md:pt-20">
        <div className="max-w-[332px] h-[344px] justify-start items-center ">
          <Image src={safe} alt="icon" />
          <p className="font-roboto text-2xl font-bold leading-120 text-light dark:text-dark py-6">High security to protect from piracy</p>
          <p className="font-roboto text-base font-normal leading-150  text-light dark:text-dark">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className="max-w-[332px] h-[344px] justify-start items-center gap-y-6">
          <Image src={head} alt="icon" />
          <p className="font-roboto text-2xl font-bold leading-120 text-light dark:text-dark py-6">Premium quality performance</p>
          <p className="font-roboto text-base font-normal leading-150  text-light dark:text-dark">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
        <div className="max-w-[332px] h-[344px] justify-start items-center gap-y-6">
          <Image src={thumb} alt="icon" />
          <p className="font-roboto text-2xl font-bold leading-120 text-light dark:text-dark py-6">Full time customer support - 24/7</p>
          <p className="font-roboto text-base font-normal leading-150  text-light dark:text-dark">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </div>
      </div>
    </div>
  );
};
export default Quality;
