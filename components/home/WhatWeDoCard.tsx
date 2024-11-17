import Image from "next/image";

import { StaticImageData } from "next/image"; // Import for image type

interface WhatWeDoCardProps {
  image: StaticImageData | string; // For static or dynamic images
  title: string;
  description: string;
 
}

const ChallengesCard: React.FC<WhatWeDoCardProps> = ({ image, title, description }) => {
  return (
    <div key={title} className="mt-5 flex  flex-col items-center flex-shrink-0 h-full flex-grow-0 md:basis-[40%] lg:basis-[28%] ">
      <div className="w-[213px] h-[175px]">

        <Image
          src={image}
          alt={title}
          // width={213}
          // height={175}
          className="h-full "
        />
      </div>
        <h1 className="mt-6 uppercase text-center text-black text-[20px] md:text-[28px] font-semibold">
          {title}
        </h1>
        <div className=" mt-5  text-[18px] tracking-[0.1px] text-center ">
         {description}
        </div>
      </div>
  );
};

export default ChallengesCard;
