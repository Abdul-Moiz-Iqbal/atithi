import Image from "next/image";
import React from "react";

interface PlanCardProps {
  title: string;
  price: number;
  image: string;
  width?: boolean;

}
const PlaningCard: React.FC<PlanCardProps> = ({ title, price, image,width = false}) => {
  return (
    // <div className="w-full flex flex-col items-center basis-[20%] bg-gradient-to-b from-transparent via-[#fff1f5] to-transparent">
    <div className="w-full py-10 flex flex-col items-center sm:basis-[20%] " style={{ background: 'linear-gradient(0deg, rgba(233,233,233,0) 0%, rgba(255,241,245,1) 49%, rgba(217,217,217,0) 100%)' }}>
      <div className= {`${width? "sm:px-5" : "w-[45px]"}  h-[82px] sm:h-[92px]`}>
        <Image className="h-full" src={image} alt={title} />
      </div>
 
      <h4 className="mt-10 text-base sm:text-lg font-medium">{title}</h4>
      <div className="  text-main-red text-[50px] sm:text-[60px] font-semibold ">
        ${price}<span className=" text-black text-[18px] font-normal"> <span className="px-[2px]">/</span>day</span>
        
      </div>
      <button className="px-[25px] py-[6px] sm:px-[50px] sm:py-[7px] text-sm sm:text-[18px] hover:bg-main-red font-medium rounded-full shadow-btn-shadow border-[3px] border-main-red bg-gradient-to-r from-main-red to-main-orange bg-transparent text-transparent bg-clip-text    ">Select</button>
    </div>
  );
};

export default PlaningCard;
