import man from "../../../public/Images/svg/bearded-man-in-black-leather-jacket-3775534.png";
import Image from "next/image";
const Reviews: React.FC = () => {
  return (
    <div className="">
      <p className="text-center font-roboto text-3xl font-bold leading-120 text-light pb-12 max-w-[500px] m-auto">
        The stunning results our customers have experienced
      </p>
      <div className="flex flex-col md:flex-row gap-4  justify-evenly items-center mx-5">

   
      <div className="max-w-[300px] w-full border border-solid border-[6199ED] border-opacity-50 rounded-3xl justify-center items-center flex flex-col h-[400px] bg-white dark:bg-[#bdeee9]">
        <p className="max-w-[280px] text-center pb-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <Image src={man} alt="man"  className="pb-3"/>
        <p className="pb-1 font-roboto font-semibold text-xl">David</p>
        <p>CEO</p>
      </div>
      <div className="max-w-[300px] w-full border border-solid border-[6199ED] border-opacity-50 rounded-3xl justify-center items-center flex flex-col h-[400px]  bg-white dark:bg-[#bdeee9]">
        <p className="max-w-[280px] text-center pb-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <Image src={man} alt="man"  className="pb-3"/>
        <p className="pb-1 font-roboto font-semibold text-xl">David</p>
        <p>CEO</p>
      </div>
      <div className="max-w-[300px] w-full border border-solid border-[6199ED] border-opacity-50 rounded-3xl justify-center items-center flex flex-col h-[400px]  bg-white dark:bg-[#bdeee9]">
        <p className="max-w-[280px] text-center pb-6">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <Image src={man} alt="man"  className="pb-3"/>
        <p className="pb-1 font-roboto font-semibold text-xl">David</p>
        <p>CEO</p>
      </div>
      </div>
    </div>

  );
};
export default Reviews;
