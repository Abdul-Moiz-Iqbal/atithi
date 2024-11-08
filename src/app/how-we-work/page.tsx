import Image from "next/image";


import HowWeWorkComponent from "../../../components/HowWeWork";
// image
import lakeImage from "../../../public/images/mobile-blog.png";
import Pricing from "../../../components/sections/pricing";
import WhatWeDo from "../../../components/home/WhatWeDo";
import Link from "next/link";
import Button from "../../../ui/Button/Button";

const HowWeWork = () => {
  return (
    <div className="font-author">

      <div className="">
        <Image src={lakeImage} alt="Servies" />
      </div>
    
      <HowWeWorkComponent />
      <Pricing />
      <WhatWeDo title="why us" showButton={false} />
      <div className="flex justify-center">
        <Link href={"/trip-form"} className="">
          <Button
            text="Start My Journey"
            className="w-fit tracking-wider  my-8  font-semibold shadow-none"
          />
        </Link>
      </div>
        
    </div>
  );
};

export default HowWeWork;
