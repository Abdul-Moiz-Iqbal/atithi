import Image from "next/image";

import Servies from "../../../components/services/Services";
import HowWeWork from "../../../components/HowWeWork";
// image
import lakeImage from "../../../public/images/lake-image.png";
import Pricing from "../../../components/sections/pricing";
import WhatWeDo from "../../../components/home/WhatWeDo";
import Link from "next/link";
import Button from "../../../ui/Button/Button";

export default function Home() {
  return (
    <div className="font-author">
      <div>
        <Image src={lakeImage} alt="Servies" />
      </div>
      <Servies />
      <Pricing />
      <HowWeWork />
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
}
