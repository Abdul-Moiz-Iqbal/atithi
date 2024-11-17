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

// import Image from "next/image";
// import logo from "../public/images/logoHres.png";

// // react icons
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import { RiMessage2Line } from "react-icons/ri";
// import DropdownMenu from "../ui/dropdown/dropdown";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="w-full font-author border-2 px-[10px] py-[8px]">
//       <div className="w-full sm:w-[80%] sm:mx-auto bg-white flex justify-between items-center">
//         {/* Logo and Mobile Menu Icon */}
//         <div className="flex justify-center items-center">
//           {/* Mobile Menu Icon (visible on small screens) */}
//           <HiOutlineMenuAlt1 className="text-[36px] lg:hidden text-main-red" />

//           {/* Logo */}
//           <Link href={"/"}>
//             <Image
//               src={logo}
//               alt="Hello Atithi"
//               priority
//               className="w-[150px] sm:w-[250px] ml-3 lg:ml-0"
//             />
//           </Link>
//         </div>

//         {/* WhatsApp Service and Dropdown (visible on lg devices) */}
//         <div className="hidden lg:flex italic tracking-wider text-[18px] font-medium items-center gap-4">
//           <div className="flex gap-2">
//             <div>
//               24/7 WhatsApp helpline<span className="ml-1 not-italic">|</span>
//             </div>
//             <div className="ml-1 flex items-center">
//               <RiMessage2Line />
//               <div className="ml-3">+91 8077034423</div>
//             </div>
//           </div>
//           {/* Dropdown Menu */}
//           <DropdownMenu />
//         </div>

//         {/* Button */}
//         <Link href={"/trip-form"}>
//           <button className="px-2 py-2 lg:px-[20.5px] text-[14px] sm:text-[20px] sm:py-[17px] font-medium bg-main-red text-white uppercase shadow-btn">
//             START MY SAFE JOURNEY
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/images/logoHres.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RiMessage2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import LanguageDropdown from "../ui/dropdown/LanguageDropDown";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleLanguageSelect = (selectedLanguage) => {
    console.log("Selected Language:", selectedLanguage);
  };

  return (
    <div className="w-full font-author border-2 px-[10px] py-[8px] relative">
      <div className="w-full sm:w-[80%] sm:mx-auto bg-white flex justify-between items-center">
        {/* Logo and Mobile Menu Icon */}
        <div className="flex justify-center items-center">
          {/* Mobile Menu Icon (visible on small screens) */}
          <HiOutlineMenuAlt1
            className="text-[36px] lg:hidden text-main-red cursor-pointer"
            onClick={toggleMenu}
          />

          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Hello Atithi"
              priority
              className="w-[150px] sm:w-[250px] ml-3 lg:ml-0"
            />
          </Link>
        </div>

        {/* WhatsApp Service and Dropdown (visible on lg devices) */}
        <div className="hidden lg:flex lg:justify-center items-center gap-4  italic tracking-wider text-[18px] font-medium ">
          <div className="flex gap-2 ">
            <div>
              24/7 WhatsApp helpline<span className="ml-1 not-italic">|</span>
            </div>
            <div className="ml-1 flex items-center">
              <RiMessage2Line />
              <div className="ml-3">+91 8077034423</div>
            </div>
          </div>
          {/* Dropdown Menu */}
          <div>
          <LanguageDropdown
        options={languageOptions}
        placeholder="Choose a language"
        onOptionSelect={handleLanguageSelect}
        className="max-w-[120px] text-[16px] font-medium"
      />
          </div>
        </div>

        {/* Button */}
        <Link href={"/trip-form"}>
          <button className="px-2 py-2 lg:px-[20.5px] text-[14px] sm:text-[20px] sm:py-[17px] font-medium bg-main-red text-white uppercase shadow-btn">
            START MY SAFE JOURNEY
          </button>
        </Link>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50   ">
          {/* Close Icon */}
          <div className="flex justify-end">
            <IoMdClose
              className="text-[36px] text-slate-400 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="mx-[8px]">
          <LanguageDropdown
        options={languageOptions}
        placeholder="Choose a language"
        onOptionSelect={handleLanguageSelect}
        className="text-[16px] font-medium"
      />
          </div>

          {/* Navigation Links */}
          <nav className="p-[18px] flex flex-col gap-6 text-[24px] text-gray-700 font-medium">
            <Link
              href="/how-we-work"
              className=" border-b-2 text-[18px] font-medium uppercase border-main-red pb-2 "
              onClick={toggleMenu}
            >
              How We Work
            </Link>
            <Link
              href="/blog"
              className="border-b-2 text-[18px] font-medium uppercase border-main-red pb-2 "
              onClick={toggleMenu}
            >
              India's must know
            </Link>
            <Link
              href="/services"
              className="border-b-2 text-[18px] font-medium uppercase border-main-red pb-2 "
              onClick={toggleMenu}
            >
              Services and fees
            </Link>
            <Link
              href="/contact"
              className="border-b-2 text-[18px] font-medium uppercase border-main-red pb-2 "
              onClick={toggleMenu}
            >
              Faq
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
