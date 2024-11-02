import Image from "next/image";
import ShadowCard from "../../ui/Card/ShadowCard";
import { StaticImageData } from "next/image"; // Import for image type

interface ChallengesCardProps {
  image: StaticImageData | string; // For static or dynamic images
  title: string;
  description: string;
  width?: number;
  className?: string;
  shadowColor?: string;
  textColor?: string;
}

const ChallengesCard: React.FC<ChallengesCardProps> = ({ image, title, description, width, className,shadowColor,textColor = "text-main-red" }) => {
  return (
    <div key={title } className={` flex-shrink-0 flex-grow-0 md:basis-[40%] lg:basis-[28%]`}>
      <ShadowCard className={` ${className} ${shadowColor} pb-10 px-5 mt-28 flex flex-col items-center `}>
        <Image
          src={image}
          alt={title}
          width={width}
          height={233}
          className="mt-[-99px]"
        />
        <h1 className={`${textColor} mt-5 text-center  text-[20px] md:text-[24px] font-semibold`}>
          {title}
        </h1>
        <div className="mt-3 text-[22px] tracking-[0.1px] text-center">
          {description} Click{" "}
          <span className={`${textColor == "text-main-red" ? "text-main-blue": "text-main-red" } font-medium`}>here</span> to know more
        </div>
      </ShadowCard>
    </div>
  );
};

export default ChallengesCard;
