import ShadowCard from "../ui/Card/ShadowCard";
import H4 from "../ui/heading/H4";

import P from "../ui/Paragraph/P";
import PlanCard from "./PlanCard";
import solo from "../public/images/plan-solo.png";
import couple from "../public/images/plan-couple.png";
import group from "../public/images/plan-group.png";


interface PricingCardProps {
  className?: string;
}

const data = [
    { image: solo, title: "Solo", price: 5 ,},
    { image: couple, title: "couple", price: 9, },
    { image: group, title: "Group(up to 4)", price: 15 ,},
];

const PricingCard: React.FC<PricingCardProps> = ({
  className = "lg:w-[80%] mt-4",
}) => {
  return (
    <ShadowCard
      className={` ${className}  sm:block  mx-auto pb-10 px-2 sm:px-5 py-5  shadow-card-red`}
    >
      <div className="hidden md:flex flex-col md:flex-row justify-center gap-10 ">
        <div className="basis-[30%]">
          <H4
            title="Select your plan"
            className=" text-start normal-case text-[30px]"
          />
          <P
            className="text-start mt-5 text-[18px] tracking-wide leading-2"
            text="This plan offers you the ultimate solution for a stress-free and safe journey throughout India. "
          />
          <P
            className=" text-start text-main-red text-[18px]"
            text="Pay only for your trip days in India"
          />
        </div>
        {data.map((plan) => (
                <PlanCard key={plan.price} image={plan.image} title={plan.title} price={plan.price}  />
            ))}
      </div>
      {/* mobile view  */}
      <div className=" flex flex-col sm:hidden  justify-center gap-10 ">
        <div className="basis-[30%]">
          <H4
            title="Select your plan"
            className=" text-start normal-case text-[30px]"
          />
          <P
            className="text-start mt-5 text-[18px] tracking-wide leading-2"
            text="This plan offers you the ultimate solution for a stress-free and safe journey throughout India. "
          />
          <P
            className=" text-start text-main-red text-[18px]"
            text="Pay only for your trip days in India"
          />
        </div>
        <div className="flex gap-2">
            {data.map((plan) => (
                <PlanCard key={plan.price} image={plan.image} title={plan.title} price={plan.price} width={plan.width} />
            ))}
      
        </div>
      </div>
    </ShadowCard>
  );
};

export default PricingCard;
