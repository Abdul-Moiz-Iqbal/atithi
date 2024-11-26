

"use client"
import Image from "next/image";
import React from "react";



interface PlanCardProps {
  title: string;
  price: number;
  image: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, image }) => {




  return (
    <div>

    <div
      className="w-fit hidden  px-14 py-5 md:flex flex-col items-center "
      style={{
        background:
          "linear-gradient(0deg, rgba(233,233,233,0) 0%, rgba(255,241,245,1) 49%, rgba(217,217,217,0) 100%)",
      }}
    >
      <div className=" h-[55px]  sm:h-[92px]">
        <Image className="w-full h-full" src={image} alt={title} />
      </div>

      <h4 className="mt-5 text-base sm:text-xl font-medium">{title}</h4>
      <div className="text-main-red text-[35px] sm:text-[60px] font-semibold">
        ${price}
        <span className="text-black text-[18px] font-normal">
          <span className="px-[2px]">/</span>day
        </span>
      </div>
 
    </div>

    
    <div
      className="w-fit md:hidden py-5 flex flex-col items-center "
     
    >
      <div className="w-[22px] h-[55px]  sm:h-[92px]">
        <Image className="w-full h-full" src={image} alt={title} />
      </div>

      <h4 className="mt-4 sm:mt-5 text-base sm:text-xl font-medium">{title}</h4>
      <div className="text-main-red text-[35px] sm:text-[60px] font-semibold">
        ${price}
        <span className="text-black text-[18px] font-normal">
          <span className="px-[2px]">/</span>day
        </span>
      </div>
 
    </div>
    </div>
  );
};

export default PlanCard;
