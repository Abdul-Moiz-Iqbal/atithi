// import Image from "next/image";
// import React from "react";

// interface PlanCardProps {
//   title: string;
//   price: number;
//   image: string;
//   width?: string;

// }
// const PlaningCard: React.FC<PlanCardProps> = ({ title, price, image, }) => {
  
//   return (
//     // <div className="w-full flex flex-col items-center basis-[20%] bg-gradient-to-b from-transparent via-[#fff1f5] to-transparent">
//     <div className="w-full py-5 md:py-10 flex flex-col items-center sm:basis-[20%] " style={{ background: 'linear-gradient(0deg, rgba(233,233,233,0) 0%, rgba(255,241,245,1) 49%, rgba(217,217,217,0) 100%)' }}>
//       <div className= {` h-[82px] sm:h-[92px]`}>
//         <Image className="w-full h-full" src={image} alt={title} />
//       </div>
 
//       <h4 className="mt-10 text-base sm:text-xl ">{title}</h4>
//       <div className="  text-main-red text-[35px] sm:text-[60px] font-semibold ">
//         ${price}<span className=" text-black text-[18px] font-normal"> <span className="px-[2px]">/</span>day</span>
        
//       </div>
//       <button className="px-[25px] py-[3px] sm:px-[50px] sm:py-[5px] text-xl sm:text-[18px] hover:bg-main-red font-medium rounded-full hover:bg-clip-border hover:text-white shadow-btn-shadow border-[3px] border-main-red bg-gradient-to-r from-main-red to-main-orange bg-transparent text-transparent bg-clip-text    ">Select</button>
//     </div>
//   );
// };

// export default PlaningCard;

"use client"
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useFormContext } from "@/context/FormContext";

interface PlanCardProps {
  title: string;
  price: number;
  image: string;
}

const PlaningCard: React.FC<PlanCardProps> = ({ title, price, image }) => {
  const pathName = usePathname()
  const router = useRouter();
  const { setSelectedPlan,selectedPlan } = useFormContext();

  const handleSelectPlan = () => {
    if (selectedPlan?.title === title) return; // If the plan is already selected, do nothing
    setSelectedPlan({title,price}); // Set the selected plan in context

    // Only navigate if not already on the "trip-form" page
    if (pathName !== "/trip-form") {
      router.push("/trip-form");
    }
  };

  return (
    <div
      className="w-full py-5 md:py-10 flex flex-col items-center sm:basis-[20%]"
      style={{
        background:
          "linear-gradient(0deg, rgba(233,233,233,0) 0%, rgba(255,241,245,1) 49%, rgba(217,217,217,0) 100%)",
      }}
    >
      <div className="h-[82px] sm:h-[92px]">
        <Image className="w-full h-full" src={image} alt={title} />
      </div>

      <h4 className="mt-10 text-base sm:text-xl">{title}</h4>
      <div className="text-main-red text-[35px] sm:text-[60px] font-semibold">
        ${price}
        <span className="text-black text-[18px] font-normal">
          <span className="px-[2px]">/</span>day
        </span>
      </div>
      <button
        onClick={handleSelectPlan}
        className={`"px-[25px] w-full sm:w-fit py-[3px] sm:px-[50px] sm:py-[5px] text-xl sm:text-[18px]  font-medium rounded-full hover:bg-clip-border hover:text-white shadow-btn-shadow border-[3px] border-main-red bg-gradient-to-r from-main-red to-main-orange ${selectedPlan?.title == title? 'text-white':'bg-transparent text-transparent bg-clip-text'}`}
      >
        {selectedPlan?.title == title?"Selected":"Select"}
        
      </button>
    </div>
  );
};

export default PlaningCard;
