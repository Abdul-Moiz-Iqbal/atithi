import Image from "next/image";
import Navbar from "../../../components/Navbar";
import NavlinkBar from "../../../components/NavlinkBar";
import Servies from "../../../components/services/Services";
import HowWeWorkComponent from "../../../components/HowWeWork";
// image
import lakeImage from "../../../public/images/lake-image.png";
import Pricing from "../../../components/sections/pricing";
import WhatWeDo from "../../../components/home/WhatWeDo";

const HowWeWork = () => {
  return (
    <div className="font-author">
      <Navbar />
      <NavlinkBar />
      <div className="mb-20">
        <Image src={lakeImage} alt="Servies" />
      </div>
    
      <HowWeWorkComponent />
      <Pricing />
      <WhatWeDo title="why us" />
    </div>
  );
};

export default HowWeWork;
