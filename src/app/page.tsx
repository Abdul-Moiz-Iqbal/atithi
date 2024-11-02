import Image from "next/image";
import logo from "../../public/images/logo.png";
import Menu from "../../public/icons/Menu.png";
import  Navbar  from "../../components/Navbar";
import Hero from "../../components/home/hero";
import TravelExpert from "../../components/home/travelExpert";
import Challenges from "../../components/home/Challenges";
import WhatWeDo from "../../components/home/WhatWeDo";
import Testimonial from "../../components/home/Testimonial";
import Blog from "../../components/home/Blog";
import Trips from "../../components/home/Trips";
import NavlinkBar from "../../components/NavlinkBar";
export default function Home() {
  return (
   <div className="font-author">
   
    <Navbar/>
    <NavlinkBar/>
    <Hero/>
    <TravelExpert/>
    <Challenges/>
    <WhatWeDo/>
    <Testimonial/>
    <Blog/>
    <Trips/>
    <div className="h-[100vh]">s</div>
   </div>
  );
}
