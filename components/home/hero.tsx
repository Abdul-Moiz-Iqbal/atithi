// import Image from "next/image";
// import heroMobileBackgroundImage from "../../public/images/hero-mobile-background.png";
// import backgroundImage from "../../public/images/hero-background.png";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-[73vh]">
//       {/* Background Image */}
//       <Image
//         src={heroMobileBackgroundImage}
//         alt="Hero Background Image"
//         // width={100}
//         // height={100}
//         className="sm:hidden  "
//         // layout="fill"
//       />
//       <Image
//         src={backgroundImage}
//         alt="Hero Background Image"
//         className=" object-cover w-full h-full"
//         layout="fill"
//       />

// <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//         {/* Hero Text */}
//         <h1 className=" text-white text-[24px] sm:text-[30px] font-medium uppercase drop-shadow-lg">
//           Simplify Your
//         </h1>
//         <h1 className="text-white text-[24px] sm:text-[30px] font-medium uppercase drop-shadow-lg">
//           Journey to India
//         </h1>

//         {/* Button */}
//         <button className="mt-4 px-6 py-2 text-[12px] font-light text-white border border-white rounded-full bg-transparent">
//           Starting <span className="font-bold">$5</span>/day
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import heroMobileBackgroundImage from "../../public/images/hero-mobile-background.png";
import backgroundImage from "../../public/images/hero-background.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[76vh]">
      {/* Background Image */}
      <Image
        src={heroMobileBackgroundImage}
        alt="Hero Mobile Background Image"
        className="sm:hidden object-cover w-full h-full"
        layout="fill" // Ensures the image fills the container while maintaining the aspect ratio
      />

      {/* Background Image for Desktop */}
      <Image
        src={backgroundImage}
        alt="Hero Background Image"
        className="hidden sm:block "
        layout="fill" // Keeps the original aspect ratio and fills the 74vh container
      />

      {/* Text and Button Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center sm:justify-end lg:justify-center items-center text-center  md:pb-0 md:mt-28 md:flex-col">
        {/* Hero Text */}
        {/* for bigger then mobile screen  */}
        <div className="hidden sm:flex flex-col tracking-widest">
          <h1 className="text-white text-[30px] sm:text-[50px] leading-none   font-medium uppercase drop-shadow-2xl ">
            MAKE YOUR TRIP TO INDIA <br /> SAFE AND STRESS-FREE
          </h1>
          {/* <h1 className="m-0 p-0 text-white text-[30px] sm:text-[50px] font-medium uppercase drop-shadow-2xl">
          SAFE AND STRESS-FREE
          </h1> */}
        </div>

        {/* for mobile screen  */}
        <div className="mt-40 flex flex-col sm:hidden tracking-widest">
          <h1 className="text-white text-[30px] sm:text-[50px] leading-[1.1]  font-medium uppercase drop-shadow-text-shadow ">
            MAKE YOUR TRIP TO 
          </h1>
          <h1 className="text-white text-[30px] sm:text-[50px] leading-[1.1]  font-medium uppercase drop-shadow-text-shadow ">
          INDIA SAFE AND
          </h1>
          <h1 className="m-0 p-0 text-white text-[30px] sm:text-[50px] leading-[1.1] font-medium uppercase drop-shadow-text-shadow">
             STRESS-FREE
          </h1>
        </div>

        {/* Button */}
        <button className="mt-4  px-2  text-[20px] sm:px-2 sm:py-0  sm:text-[30px] font-medium text-white border-[2.5px] border-white rounded-full bg-transparent">
          Starting at<span className="pl-2  font-medium">$5</span> /day
        </button>
      </div>
    </div>
  );
};

export default Hero;
