

import Hero from "../../components/home/hero";
import TravelExpert from "../../components/home/travelExpert";
import Challenges from "../../components/home/Challenges";
import WhatWeDo from "../../components/home/WhatWeDo";
import Testimonial from "../../components/home/Testimonial";
import Blog from "../../components/home/Blog";
import Trips from "../../components/home/Trips";

export default function Home() {
  return (
   <div className="font-author">
   
  
    <Hero/>
    <TravelExpert/>
    <Challenges/>
    <WhatWeDo/>
    <Testimonial/>
    <Blog/>
    <Trips/>
    
   </div>
  );
}
