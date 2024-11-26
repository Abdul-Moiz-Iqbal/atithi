"use client"
import ShadowCard from "../../ui/Card/ShadowCard";
import H4 from "../../ui/heading/H4";
import PlanCard from "./PlanCard";
import P from "../../ui/Paragraph/P";

import solo from "../../public/images/plan-solo.png";
import couple from "../../public/images/plan-couple.png";
import group from "../../public/images/plan-group.png";
import { useFormContext } from "@/src/context/FormContext";



interface SelectedPlanCardProps {
  className?: string;
}

const data = [
    { image: solo, title: "Solo", price: 5 ,},
    { image: couple, title: "Couple", price: 9, },
    { image: group, title: "Group (up to 4)", price: 15 ,},
];

const SelectedPlanCard: React.FC<SelectedPlanCardProps> = ({
  className = "lg:w-[80%] mt-4",
}) => {
  const { selectedPlan } = useFormContext();
  
  return (
    <ShadowCard
      className={` ${className} h-fit mt-18 px-3 md:px-5  border border-main-red `}
    >
      <div className="w-fit  flex  flex-row  justify-between ">
        <div className="w-[72%] sm:w-[50%] ">
          <H4
            title="Selected Plan"
            className=" text-start  normal-case text-xl  sm:text-[30px]"
          />
          <P
            className="text-start mt-2 sm:mt-5 text-base font-light sm:text-[18px] tracking-wide "
            text="This plan offers you the ultimate solution for a stress-free and unforgettable journey throughout India. "
          />
   
        </div>
        {data.map((plan) => (
            selectedPlan?.title === plan.title && <PlanCard key={plan.price} image={plan.image} title={plan.title} price={plan.price} isSelected={plan.title === selectedPlan} />
            ))}
            
      </div>
      {/* mobile view  */}
      {/* <div className=" flex flex-col md:hidden  justify-center  ">
        <div className="basis-[30%]">
          <H4
            title="Select your plan"
            className=" text-start normal-case font-semibold text-[20px]"
          />
          <P
            className="text-start mt-5 text-[16px] font-light tracking-wide leading-2"
            text="This plan offers you the ultimate. "
          />
          <P
            className="text-start  text-[16px] font-light tracking-wide leading-2"
            text=" solution for a stress-free and safe journey throughout India "
          />
          <P
            className="text-start  text-[16px] font-light tracking-wide leading-2"
            text="  and safe journey throughout India "
          />
          <P
            className=" text-start text-main-red text-[16px] font-light"
            text="Pay only for your trip days in India"
          />
        </div>
        <div className="flex gap-3 items-center justify-evenly">
            {data.map((plan) => (
                <PlanCard key={plan.price} image={plan.image} title={plan.title} price={plan.price} width={plan.width} isSelected={plan.title === selectedPlan}/>
            ))}
      
        </div>
      </div> */}
    </ShadowCard>
  );
};

export default SelectedPlanCard;
