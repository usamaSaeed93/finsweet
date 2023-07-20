import React from "react";
import sales from "../../../public/Images/svg/sales.svg";
import project from "../../../public/Images/svg/project.svg";
import activity from "../../../public/Images/svg/sales.svg";
import Image from "next/image";
const Discover: React.FC = () => {
  return (
    <div className="max-w-[1200px] w-full lg:h-[344px] flex flex-col gap-y-10 lg:flex-row m-auto justify-between lg:items-center items-start pl-9 mt-20">
      <div className="max-w-[350px] sm:max-w-[574px]">
        <p className="font-roboto text-xl font-bold leading-120 gradient_text">
          Why should you work with us?
        </p>
        <p className="font-roboto text-3xl font-bold leading-120 text-light dark:text-dark max-w-[500px] pt-6 pb-8">
          To upscale your business to the next level
        </p>
        <p className="font-roboto text-base font-normal leading-6 text-light dark:text-dark max-w-[500px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua invidunt ut labore.
        </p>
      </div>
      <div className="max-w-[350px] sm:max-w-[574px] gap-y-6 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-5 justify-center items-center">
          <Image src={sales} alt="arrow" />
          <div className="flex flex-col">
<p className="font-roboto text-xl font-bold leading-140 text-light dark:text-dark">Sales Targeting</p>
          <p className="font-roboto text-base font-medium leading-150 text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <Image src={activity} alt="arrow" />
          <div className="flex flex-col">
<p className="font-roboto text-xl font-bold leading-140 text-light dark:text-dark">Sales Targeting</p>
          <p className="font-roboto text-base font-medium leading-150 text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <Image src={project} alt="arrow" />
          <div className="flex flex-col">
<p className="font-roboto text-xl font-bold leading-140 text-light dark:text-dark">Sales Targeting</p>
          <p className="font-roboto text-base font-medium leading-150 text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;
