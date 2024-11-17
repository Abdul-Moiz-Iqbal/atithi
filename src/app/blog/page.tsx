import Image from "next/image";


// image 
import lakeImage from "../../../public/images/lake-image.png";
import mobileImage from "../../../public/images/mobile-blog.png";

import Blog from "../../../components/blog/Blog";



export default function blog() {
  return (
    <div className="font-author">
      
      <div className="">
        <Image src={lakeImage} alt="Servies" className="hidden sm:block" />
        <Image src={mobileImage} alt="Servies" className="sm:hidden" />
      </div>
      <div className="w-[78%] my-7  mx-auto flex gap-5 uppercase text-main-red text-[20px] font-semibold tracking-wider">
        <div>Home</div>
        <div>&gt;</div>
        <div>Categories</div>
      </div>
      
      <div className="mt-4 w-full md:w-[85%] md:mx-auto border-[1px] border-main-red"></div>
      
      <Blog/>     
    </div>
  );
}
