import man from "../../../public/Images/svg/bearded-man-in-black-leather-jacket-3775534.png";
import Image from "next/image";
const Reviews: React.FC = () => {
  return (
    <div>
      <p className="text-center font-roboto text-3xl font-bold leading-120 text-light pb-12 max-w-[500px] m-auto">
        The stunning results our customers have experienced
      </p>
      <div>
        <p className="max-w-[280px] text-center m-auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <Image src={man} alt="man" />
        <p>David</p>
        <p>CEO</p>
      </div>
    </div>
  );
};
export default Reviews;
