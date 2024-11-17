import Image from "next/image";


import HowWeWorkComponent from "../../../components/HowWeWork";
// image
import lakeImage from "../../../public/images/lake-image.png";
import mobileImage from "../../../public/images/mobile-blog.png";
import Pricing from "../../../components/sections/pricing";
import WhatWeDo from "../../../components/home/WhatWeDo";
import Link from "next/link";
import Button from "../../../ui/Button/Button";

const HowWeWork = () => {
  return (
    <div className="font-author">

      <div className="">
        <Image src={lakeImage} alt="Servies" className="hidden sm:block" />
        <Image src={mobileImage} alt="Servies" className="sm:hidden" />
      </div>
    
      <HowWeWorkComponent />
      <Pricing />
      <WhatWeDo title="What we do" showButton={false} />
      <div className="flex justify-center">
        <Link href={"/trip-form"} className="">
          <Button
            text="START MY SAFE
JOURNEY"
            className="w-fit tracking-wider  my-8  font-medium   shadow-none"
          />
        </Link>
      </div>
        
    </div>
  );
};

export default HowWeWork;
