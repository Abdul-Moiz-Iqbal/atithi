"use client";
import Image from "next/image";
import ShadowCard from "../../ui/Card/ShadowCard";
import { StaticImageData } from "next/image"; // Import for image type
import Link from "next/link";


interface ChallengesCardProps {
  image: StaticImageData | string; // For static or dynamic images
  title: string;
  description: string;
  width?: number;
  className?: string;
  shadowColor?: string;
  textColor?: string;
 
}

const ChallengesCard: React.FC<ChallengesCardProps> = ({
  image,
  title,
  description,
  width,
  className,
  shadowColor,
  textColor = "text-main-red",
  
}) => {



  return (
    <div
      key={title}
      className={` flex-shrink-0 flex-grow-0 md:basis-[40%] lg:basis-[28%] lg:max-w-[348px]`}
    >
      <ShadowCard
        className={` ${className} ${shadowColor} pb-10 px-4 mt-28 flex flex-col items-center `}
      >
        <Image
          src={image}
          alt={title}
          width={width}
          height={233}
          className="mt-[-99px]"
        />
        <h1
          className={`${textColor} mt-5 text-center  text-[18px]  tracking-[0.2px] sm:text-xl sm:tracking-[0.4px]   font-semibold`}
        >
          {title}
        </h1>
        <div className="mt-3 text-[18px] tracking-[0.2px] text-center">
        {description} 
        </div>
        <div className=" text-[18px] tracking-[0.1px] text-center">
          Click{" "}
          <span
            className={`${
              textColor == "text-main-red" ? "text-main-blue" : "text-main-red"
            } font-medium`}
          >
            <Link href={'/blog'}>here</Link>
            
          </span>{" "}
          to know more
        </div>
      </ShadowCard>

    </div>
  );
};

export default ChallengesCard;
