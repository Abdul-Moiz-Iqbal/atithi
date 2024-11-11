// import Image from "next/image";
// import image from "../../public/images/image.png";
// import imageDesktop from "../../public/images/image-desktop.png";

// const Trips = () => {
//   return (
//     <div className="relative py-5 px-5 h-[100vh]">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={image}
//           alt="India Background"
//         //   layout="fill"
//         //   objectFit="cover"
//           className="h-full sm:hidden"
//         />
//         <Image
//           src={imageDesktop}
//           alt="India Background"
//         //   layout="fill"
//         //   objectFit="cover"
//           className="h-full hidden sm:block"
//         />
//       </div>

//       {/* Main Text */}
//       <div className="mt-52 md:mt-[10%] md:px-[20%] relative z-10  ">
//         <p className=" text-center font-playfair  tracking-wide italic text-main-red text-[24px] md:text-[30px] font-medium md: px-5 ">
//           “There are three trips you take to India:<br></br> the one you think you’re
//           going to have - that you plan for, the one you actually have; and the
//           one you live through once you go back home.”
//         </p>
//       </div>

//       {/* Bottom Box with Border, Text, and Button */}
//       <div className="relative mt-52   z-10 bg-transparent flex flex-col justify-center items-center">
//         <div className="   border-2 border-white px-5 pt-5 pb-10 text-white text-center max-w-2xl mx-auto">
//           <p className="text-main-black text-[16px] italic sm:text-[18px] leading-6">
//             Can't find it? Don't worry. Just because it's not here, doesn't mean
//             we can't do it. Text us on +91 8630351715 on Whatsapp. WE ARE HERE
//             24x7.
//           </p>
//           {/* Button */}
//         </div>
//           <button className="mt-[-25px] px-6 py-3 text-white bg-main-red text-[20px] font-medium rounded-[10px]  sm:text-[18px]">
//             Contact Us
//           </button>
//       </div>
//     </div>
//   );
// };

// export default Trips;

import Image from "next/image";
import image from "../../public/images/image.png";
import imageDesktop from "../../public/images/image-desktop.png";

const Trips = () => {
  return (
    <div className="relative h-screen py-5 px-5 flex flex-col justify-evenly">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="India Background"
          className="h-full w-full object-cover sm:hidden"
          priority
        />
        <Image
          src={imageDesktop}
          alt="India Background"
          className="hidden sm:block h-full w-full object-cover"
          priority
        />
      </div>

      {/* Main Text */}
      <div className="relative z-10 flex items-center justify-center ">
        <p className="text-center font-playfair tracking-wide italic text-main-red text-[24px] md:text-[30px] font-medium px-5 md:px-[20%]">
          “There are three trips you take to India: the one you think you’re
          going to have - that you plan for, the one you actually have; and the
          one you live through once you go back home.”
        </p>
      </div>

      {/* Bottom Box with Border, Text, and Button */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="border-2 border-white bg-opacity-75 px-5 py-5 text-center max-w-2xl mx-auto bg-transparent text-main-black text-[16px] sm:text-[18px] leading-6 italic">
          Can't find it? Don't worry. Just because it's not here, doesn't mean
          we can't do it. Text us on +91 8630351715 on WhatsApp. WE ARE HERE 24x7.
        </div>
        <button className="mt-4 px-6 py-3 text-white bg-main-red text-[20px] font-medium rounded-[10px] sm:text-[18px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Trips;
