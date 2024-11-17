import Image from "next/image";

import Servies from "../../../components/services/Services";
import HowWeWork from "../../../components/HowWeWork";
// image
import lakeImage from "../../../public/images/lake-image.png";
import mobileImage from "../../../public/images/mobile-blog.png";
import Pricing from "../../../components/sections/pricing";
import WhatWeDo from "../../../components/home/WhatWeDo";
import Link from "next/link";
import Button from "../../../ui/Button/Button";

export default function Home() {
  return (
    <div className="font-author">
    <div className="">
        <Image src={lakeImage} alt="Servies" className="hidden sm:block" />
        <Image src={mobileImage} alt="Servies" className="sm:hidden" />
      </div>
      <Servies />
      <Pricing />
      <HowWeWork />
      <WhatWeDo title="why us" showButton={false} />
      <div className="flex justify-center">
        <Link href={"/trip-form"} className="">
          <Button
            text="START MY SAFE JOURNEY"
            className="w-fit tracking-wider  my-8  font-medium shadow-none"
          />
        </Link>
      </div>
    </div>
  );
}
