

// vectors
import IndiaSafe from "../../public/vectors/whatWedo-IndiaSafe.png";
import saves from "../../public/vectors/whatWedo-saves.png";
import support from "../../public/vectors/whatWedo-support.png";

// component
import WhatWeDoCard from "./WhatWeDoCard";
import Button from "../../ui/Button/Button";
import React from "react";
import Link from "next/link";

interface WhatWeDoProps {
  title?: string;
  showButton?: boolean;
}
const data = [
  {
    title: "Makes India easy for you",
    description:
      "We simplifies the experience at every step. From understanding culture to everyday issues in India like making payments or communicating with locals, explore India with confidence. Experience the country without the usual stress or confusion.",
    image: IndiaSafe,
    width: 102,
  },
  {
    title: "SAVES YOU FROM SCAMS",
    description:
      "We make the tourist scams rare, as staying informed and prepared can make all the difference. Whether it’s travel, shopping, or interacting with locals, feel secure knowing you’re safeguarded from the most common traps. With us, spot potential risks before they occur.",
    image: saves,
    width: 102,
    
  },
  {
    title: "SUPPORT AT EVERY STEP",
    description:
      "Traveling to India comes with uncertainties, but dedicated support is available 24/7 to assist you. Whether it’s dealing with an emergency or handling unexpected issues, rely on continuous support. The goal is to ensure that you feel supported and empowered in India.",
    image: support,
    width: 175,
  },
];
const WhatWeDo:React.FC<WhatWeDoProps> = ({title="What we do",showButton=true}) => {
  return (
    <div className="py-10 px-8 flex flex-col   ">
      <h1 className="uppercase text-[22px] md:text-[35px] tracking-wide text-center font-semibold text-main-blue">
        {title}
      </h1>
      <div className="flex flex-col  md:gap-10 lg:flex-row lg:justify-center ">
      {data.map((whatWeDo) => (
        <WhatWeDoCard
        key={whatWeDo.title}
          image={whatWeDo.image}
          description={whatWeDo.description}
          title={whatWeDo.title}
    
        />
      ))}
     
      </div>
      {showButton && (
        <Link href={"/how-we-work"} className="mx-auto">
          <Button text="How  this works" className="w-fit tracking-wider  mt-8 mx-auto font-semibold shadow-none" />
        </Link>
      
      )}
    </div>
  );
};

export default WhatWeDo;
