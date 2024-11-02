// import Image from "next/image";
// import logo from "../public/images/logoHres.png";
// import Menu from "../public/icons/Menu.png";

// // react icons
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import { RiMessage2Line } from "react-icons/ri";
// import DropdownMenu from "../ui/dropdown/dropdown";

// export default function Navbar() {
//   return (
//     <div className="w-full font-author  border-2 px-[10px] py-[8px] ">
//       <div className="sm:w-[80%] sm:mx-auto bg-white flex justify-between">
//         <div className=" flex justify-center   ">
//           <HiOutlineMenuAlt1 className="text-[48px] sm:hidden  p-0 text-main-red" />
//           {/* <Image src={Menu} alt="Menu" priority/> */}
//           <Image
//             src={logo}
//             // width={250}
//             // height={80}
//             alt="Hello Atithi"
//             priority
//             className=""
//           />
//         </div>
//         <div className="hidden sm:flex  italic tracking-wider text-[22px] font-medium   items-center">
//           <div className=" flex gap-2">
//             <div className="">24/7 Whatsapp helpline <span className="ml-1 not-italic">|</span> </div>
//             <div className="ml-1 flex items-center">
//               <RiMessage2Line /> 
//               <div className="ml-3">+91 8630351715</div>
//             </div>
//           </div>
//             <DropdownMenu/>
//         </div>
//         <button className=" px-[20.5px] text-[18px] font-medium bg-main-red text-white uppercase shadow-lg ">
//           Start your Journey
//         </button>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import logo from "../public/images/logoHres.png";

// react icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiMessage2Line } from "react-icons/ri";
import DropdownMenu from "../ui/dropdown/dropdown";

export default function Navbar() {
  return (
    <div className="w-full font-author border-2 px-[10px] py-[8px]">
      <div className="w-full sm:w-[80%] sm:mx-auto bg-white flex justify-between items-center">
        {/* Logo and Mobile Menu Icon */}
        <div className="flex justify-center items-center">
          {/* Mobile Menu Icon (visible on small screens) */}
          <HiOutlineMenuAlt1 className="text-[36px] lg:hidden text-main-red" />

          {/* Logo */}
          <Image
            src={logo}
            alt="Hello Atithi"
            priority
            className="w-[150px] sm:w-[250px] ml-3 lg:ml-0"
          />
        </div>

        {/* WhatsApp Service and Dropdown (visible on lg devices) */}
        <div className="hidden lg:flex italic tracking-wider text-[18px] font-medium items-center gap-4">
          <div className="flex gap-2">
            <div>
              24/7 WhatsApp helpline<span className="ml-1 not-italic">|</span>
            </div>
            <div className="ml-1 flex items-center">
              <RiMessage2Line />
              <div className="ml-3">+91 8630351715</div>
            </div>
          </div>
          {/* Dropdown Menu */}
          <DropdownMenu />
        </div>

        {/* Button */}
        <button className="px-4 py-4 lg:px-[20.5px] text-[14px] sm:text-[18px] sm:py-[17px] font-medium bg-main-red text-white uppercase shadow-btn">
          Start your Journey
        </button>
      </div>
    </div>
  );
}
