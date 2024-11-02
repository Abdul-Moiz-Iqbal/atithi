import Image from "next/image";
import Navbar from "../../../components/Navbar";
import NavlinkBar from "../../../components/NavlinkBar";
import Servies from "../../../components/services/Services";
import HowWeWork from "../../../components/HowWeWork";
// image 
import lakeImage from "../../../public/images/lake-image.png";
import Pricing from "../../../components/sections/pricing";
import WhatWeDo from "../../../components/home/WhatWeDo";

export default function Home() {
  return (
    <div className="font-author">
      <Navbar />
      <NavlinkBar />
      <div>
        <Image src={lakeImage} alt="Servies"/>
      </div>
      <Servies/>
      <Pricing/>
      <HowWeWork/>
      <WhatWeDo title="why us"/>

      
    </div>
  );
}
