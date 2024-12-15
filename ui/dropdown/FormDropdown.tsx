// import { useRef, useState } from "react";
// import { TiArrowSortedDown } from "react-icons/ti";

// const CustomDropdown = () => {
//   const [selectedOption, setSelectedOption] = useState();
//   const [showDropdown, setShowDropdown] = useState<boolean>(false);
//   const dropdown =useRef(null);

//   const options = [
//     { days: 1 },
//     { days: 2 },
//     { days: 3 },
//     { days: 4 },
//     { days: 5 },
//     { days: 6 },
  
//   ];

//   const showDropdownHandler = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const onOptionHandler = (value) => {
//     console.log(value);
//     setSelectedOption(value);
//   }
//   return (
//     <div className="w-fit flex flex-col mt-4 " onClick={showDropdownHandler} ref={dropdown}>
//       <div className="w-fit border border-main-red flex">
//         <input className="pl-2 outline-none" value={selectedOption} placeholder="Number of Days in India"/>
//         <div className="flex items-center p-2 text-gray-600">
//           <TiArrowSortedDown className={`text-main-red text-2xl ${showDropdown?"rotate-180":"" }`} />
//         </div>
//       </div>
//       {showDropdown && (
//         <div className="border border-t-0 border-main-red">
//             {options.map((option) => (
//                   <div className="p-2 cursor-pointer hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)]" key={option.value} onClick={()=> {onOptionHandler(option.days)}}
//                   >{option.days} </div>
//             ))}
        
          
//         </div>
//       )}
//     </div>
//   );
// };
// import { useRef, useState, useEffect } from "react";
// import { TiArrowSortedDown } from "react-icons/ti";

// const CustomDropdown = ({options , placeholder}) => {
//   const [selectedOption, setSelectedOption] = useState();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);


//   const showDropdownHandler = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const onOptionHandler = (value) => {
//     setSelectedOption(value);
//     setShowDropdown(false); // Close dropdown after selection
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className=" w-fit flex flex-col mt-4" ref={dropdownRef}>
//       <div className="w-fit border border-main-red flex" onClick={showDropdownHandler}>
//         <input
//           className="pl-2 outline-none"
//           value={selectedOption || ""}
//           placeholder={placeholder}
//           readOnly
//         />
//         <div className="flex items-center p-2 text-gray-600">
//           <TiArrowSortedDown
//             className={`text-main-red text-2xl ${showDropdown ? "rotate-180" : ""}`}
//           />
//         </div>
//       </div>
//       {showDropdown && (
//         <div className="border border-t-0 border-main-red">
//           {options.map((option) => (
//             <div
//               className="p-2 cursor-pointer text-slate-500 text-sm hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)]"
//               key={option.days}
//               onClick={() => onOptionHandler(option.days)}
//             >
//               0{option.days}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;
// import { useRef, useState, useEffect } from "react";
// import { TiArrowSortedDown } from "react-icons/ti";

// const CustomDropdown = ({ options, placeholder, onOptionSelect }) => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const showDropdownHandler = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const onOptionHandler = (option) => {
//     setSelectedOption(option.label); // Display label
//     onOptionSelect(option.value); // Pass value back to parent
//     setShowDropdown(false); // Close dropdown after selection
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative  flex flex-col mt-4" ref={dropdownRef}>
//       <div
//         className="w-full  border-2 border-main-red flex justify-between"
//         onClick={showDropdownHandler}
//       >
//         <input
//           className="pl-4 w-[100%] sm:pl-4 placeholder:text-[14px]  outline-none "
//           value={selectedOption}
//           placeholder={placeholder}
//           readOnly
//         />
//         <div className=" flex justify-between  items-center py-2 text-gray-600">
//           <TiArrowSortedDown
//             className={`text-main-red  text-2xl ${showDropdown ? "rotate-180" : ""}`}
//           />
//         </div>
//       </div>
//       {showDropdown && (
//         <div className="absolute z-10 border-2 border-t-0 border-main-red overflow-y-auto max-h-[200px]">
//           {options.map((option) => (
//             <div
//               className="p-2 cursor-pointer text-slate-500 text-sm hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)]"
//               key={option.value} // Use value as unique key
//               onClick={() => onOptionHandler(option)}
//             >
//               {option.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;
// import { useRef, useState, useEffect } from "react";
// import { TiArrowSortedDown } from "react-icons/ti";
// import './FormDropDown.css'; // Include your custom CSS if needed
// import { useFormContext } from "@/context/FormContext";

// const CustomDropdown = ({ options, placeholder, onOptionSelect,className }) => {
//   const {setFormData} =useFormContext()
//   const [selectedOption, setSelectedOption] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const showDropdownHandler = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const onOptionHandler = (option) => {
//     setSelectedOption(option.label); // Display label
//     onOptionSelect(option.value); // Pass value back to parent
//     setShowDropdown(false); // Close dropdown after selection
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="font-author relative flex flex-col " ref={dropdownRef}>
//       {/* Dropdown Toggle */}
//       <div
//         className={`w-full ${className}  border-2 border-main-red flex justify-between`}
//         onClick={showDropdownHandler}
//       >
//         <input
//           className="pl-2 w-[100%]  placeholder:text-[18px] outline-none"
//           value={selectedOption}
//           placeholder={placeholder}
//           readOnly
//         />
//         <div className="flex justify-between items-center py-2 text-gray-600">
//           <TiArrowSortedDown
//             className={`${className}  text-main-red  text-2xl  ${showDropdown ? "rotate-180" : ""}`}
//           />
//         </div>
//       </div>

//       {/* Dropdown Options */}
//       {showDropdown && (
//         <div
//           className="absolute z-20 custom-scrollbar border-2 border-t-0 not-italic border-main-red overflow-y-auto max-h-[200px] w-full bg-white"
//           style={{ top: "100%", left: 0 }}
//         >
//           {options.map((option) => (
//             <div
//               className={`p-2 cursor-pointer text-[#8A8A8A] text-lg hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] ${
//                 selectedOption === option.label ? "border-l-4 border-main-red" : ""
//               }`}
//               key={option.value} // Use value as unique key
//               onClick={() => onOptionHandler(option)}
//             >
//               {option.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;
"use client";

import { useRef, useState, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import './FormDropDown.css'; // Include your custom CSS if needed
import { useFormContext } from "@/src/context/FormContext";

const CustomDropdown = ({value ='', options, placeholder, onOptionSelect, className, onBlur, error }) => {
  const { setFormData } = useFormContext();
  const [selectedOption, setSelectedOption] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const showDropdownHandler = () => {
   
    
    setShowDropdown((prev) => !prev);
  };

  const onOptionHandler = (option) => {
    setSelectedOption(option.label); // Display label
    onOptionSelect(option); // Pass value back to parent
    setShowDropdown(false); // Close dropdown after selection
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-author relative flex flex-col" ref={dropdownRef}>
           {/* Display error message if any */}
           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {/* Dropdown Toggle */}
      <div
        className={`w-full ${className} border-2 border-main-red flex justify-between`}
        onClick={showDropdownHandler}
      >
        <input
          className="pl-2 w-[100%] placeholder:text-[18px] outline-none"
          value={value}
          placeholder={placeholder}
          readOnly
          onBlur={() => {
            if (onBlur) onBlur(); // Call onBlur passed from parent
          }}
        />
        <div className="flex justify-between items-center py-2 text-gray-600">
          <TiArrowSortedDown
            className={`${className} text-main-red text-2xl ${showDropdown ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Dropdown Options */}
      {showDropdown && (
        <div
          className="absolute z-20 custom-scrollbar border-2 border-t-0 not-italic border-main-red overflow-y-auto max-h-[200px] w-full bg-white"
          style={{ top: "100%", left: 0 }}
        >
          {options.map((option) => (
            <div
              className={`p-2 cursor-pointer text-[#8A8A8A] text-lg hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] ${
                selectedOption === option.label ? "border-l-4 border-main-red" : ""
              }`}
              key={option.value} // Use value as unique key
              onClick={() => onOptionHandler(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

 
    </div>
  );
};

export default CustomDropdown;
