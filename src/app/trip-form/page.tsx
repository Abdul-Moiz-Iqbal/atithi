// "use client";
// import { FormContextProvider } from "@/context/FormContext";

// import JourneyForm from "../../../components/trip-form/Journey-Form";
// import TravelerForm from "../../../components/trip-form/TravlerForm";
// import Image from "next/image";

// import comingSoonImage from "../../../public/images/Coming-soon-banner.png";
// import picscart from "../../../public/icons/form-picscart.png";
// import insta from "../../../public/icons/form-insta.png";
// import facebook from "../../../public/icons/form-faceBook.png";
// import Link from "next/link";

// const TripForm = () => {
//   return (
//     <div className="font-author">
//       <FormContextProvider>
//         <TravelerForm />
//         <JourneyForm />
//         <div className="my-20 flex flex-col gap-2 justify-center items-center sm:gap-0 sm:flex-row sm:justify-evenly">
//           <button className="px-5 py-4 w-[80%] sm:w-fit lg:px-[20.5px] text-[18px] sm:py-[17px] font-semibold border-[3px] hover:bg-[rgba(255,0,0,0.1)] border-main-red  text-main-red uppercase shadow-btn">
//             Submit & Pay on arrival
//           </button>
//           <div className="sm:hidden text-[20px] font-medium text-center">
//             OR
//           </div>
//           <button className="px-5 py-4 w-[70%] sm:w-fit lg:px-[20.5px] text-[18px] sm:py-[17px] font-semibold border-[3px] hover:bg-[rgba(255,0,0,0.1)] border-main-red  text-main-red uppercase shadow-btn">
//             Submit & Pay on now
//           </button>
//         </div>
//         <div className=" flex items-center">
//           <div className="w-[5%] sm:w-[25%]  border sm:border-[3px] border-main-red"></div>
//           <div className="w-[90%] sm:w-[50%] border-[3px] border-main-red">
//             <div className="py-5 px-10 text-[18px] italic text-center ">
//               Can't find it? Don't worry. Just because it's not here, doesn't
//               mean we can't do it. <br></br> WhatsApp us on +91 8077034423{" "}
//               <br></br> WE ARE HERE 24x7.
//             </div>

//             <div className="mb-[-28px] flex justify-center">
//               <Link href={"/contact"}>
//                 <button className=" mx-auto shadow-btn hover:bg-red-800 rounded-[10px] px-10 py-3 uppercase text-[20px] tracking-[0.4px] font-medium text-white bg-main-red">
//                   Contact Us
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="w-[5%] sm:w-[25%] border sm:border-[3px] border-main-red "></div>
//         </div>
//       </FormContextProvider>
//       <div className="mt-16 sm:mt-28 w-[90%] sm:w-[80%] mx-auto">
//         <Image src={comingSoonImage} alt="Coming Soon Global  version" />
//       </div>

//       <div className="mt-5 sm:mt-8 mb-10 sm:mb-20 mx-auto ">
//         <h1 className="text-center text-[18px] sm:text-[30px] font-medium">
//           WANT TO EXPERIENCE REAL INDIA?
//         </h1>
//         <p className="my-3 leading-tight text-center text-[16px] px-8 sm:px-0 sm:text-[20px]">
//           Follow us to receive our latest destination inspiration, as well as
//           our travel<br></br> experience for the year to come.
//         </p>
//         <p className="mb-5 text-center text-[16px] sm:text-[20px] font-medium">
//           FOLLOW US ON
//         </p>
//         <div className=" mx-auto w-fit flex gap-8">
//           <Image
//             src={picscart}
//             className="h-[32px] w-[32px] sm:h-[50px] sm:w-[50px]"
//             alt="Coming Soon Global  version"
//           />
//           <Image
//             src={insta}
//             className="h-[32px] w-[32px] sm:h-[50px] sm:w-[50px]"
//             alt="Coming Soon Global  version"
//           />
//           <Image
//             src={facebook}
//             className="h-[32px] w-[32px] sm:h-[50px] sm:w-[50px]"
//             alt="Coming Soon Global  version"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripForm;

"use client";


import JourneyForm from "../../../components/trip-form/Journey-Form";
import TravelerForm from "../../../components/trip-form/TravlerForm";
import Image from "next/image";

import comingSoonImage from "../../../public/images/Coming-soon-banner.png";
import picscart from "../../../public/icons/form-picscart.png";
import insta from "../../../public/icons/form-insta.png";
import facebook from "../../../public/icons/form-faceBook.png";
import Link from "next/link";


const TripForm = () => {
  
  return (
    <div className="font-author">
      
        <TravelerForm />
        <JourneyForm />
        <div className="my-20 flex flex-col gap-2 justify-center items-center sm:gap-0 sm:flex-row sm:justify-evenly">
          <button className="px-5 py-4 w-[80%] sm:w-fit lg:px-[20.5px] text-[18px] sm:py-[17px] font-semibold border-[3px] hover:bg-[rgba(255,0,0,0.1)] border-main-red  text-main-red uppercase shadow-btn">
            Submit & Pay on arrival
          </button>
          <div className="sm:hidden text-[20px] font-medium text-center">
            OR
          </div>
          <button className="px-5 py-4 w-[70%] sm:w-fit lg:px-[20.5px] text-[18px] sm:py-[17px] font-semibold border-[3px] hover:bg-[rgba(255,0,0,0.1)] border-main-red  text-main-red uppercase shadow-btn">
            Submit & Pay now
          </button>
        </div>
        <div className=" flex items-center">
          <div className="w-[5%] sm:w-[25%]  border sm:border-[3px] border-main-red"></div>
          <div className="w-[90%] sm:w-[50%] border-[3px] border-main-red">
            <div className="py-5 px-10 text-[18px] italic text-center ">
              Can't find it? Don't worry. Just because it's not here, doesn't
              mean we can't do it. <br></br> WhatsApp us on +91 8077034423{" "}
              <br></br> WE ARE HERE 24x7.
            </div>

            <div className="mb-[-28px] flex justify-center">
              <Link href={"/contact"}>
                <button className=" mx-auto shadow-btn hover:bg-red-800 rounded-[10px] px-10 py-3 uppercase text-[20px] tracking-[0.4px] font-medium text-white bg-main-red">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[5%] sm:w-[25%] border sm:border-[3px] border-main-red "></div>
        </div>
      
      <div className="mt-16 sm:mt-28 w-[90%] sm:w-[80%] mx-auto">
        <Image src={comingSoonImage} alt="Coming Soon Global  version" />
      </div>

      <div className="mt-5 sm:mt-8 mb-10 sm:mb-20 mx-auto ">
        <h1 className="text-center text-[18px] sm:text-[30px] font-medium">
          WANT TO EXPERIENCE REAL INDIA?
        </h1>
        <p className="my-3 leading-tight text-center text-[16px] px-8 sm:px-0 sm:text-[20px]">
          Follow us to receive our latest destination inspiration, as well as
          our travel<br></br> experience for the year to come.
        </p>
        <p className="mb-5 text-center text-[16px] sm:text-[20px] font-medium">
          FOLLOW US ON
        </p>
        <div className=" mx-auto w-fit flex gap-8">
          {/* Picscart */}
          <Link
            href="https://in.pinterest.com/helloatithi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={picscart}
              className="h-[32px] w-[32px] sm:h-[50px] sm:w-[50px]"
              alt="Picsart"
            />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/hello_atithi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={insta}
              className="h-[32px] w-[32px] sm:h-[50px] sm:w-[50px]"
              alt="Instagram"
            />
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/helloatithiindia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={facebook}
              className="h-[32px] w-[32px] sm:h-[50px] sm:w-[50px]"
              alt="Facebook"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripForm;
