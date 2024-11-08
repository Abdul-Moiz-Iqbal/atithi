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
import { useRef, useState, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    { days: 1 },
    { days: 2 },
    { days: 3 },
    { days: 4 },
    { days: 5 },
    { days: 6 },
  ];

  const showDropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };

  const onOptionHandler = (value) => {
    setSelectedOption(value);
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
    <div className="w-fit flex flex-col mt-4" ref={dropdownRef}>
      <div className="w-fit border border-main-red flex" onClick={showDropdownHandler}>
        <input
          className="pl-2 outline-none"
          value={selectedOption || ""}
          placeholder="Number of Days in India"
          readOnly
        />
        <div className="flex items-center p-2 text-gray-600">
          <TiArrowSortedDown
            className={`text-main-red text-2xl ${showDropdown ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      {showDropdown && (
        <div className="border border-t-0 border-main-red">
          {options.map((option) => (
            <div
              className="p-2 cursor-pointer hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)]"
              key={option.days}
              onClick={() => onOptionHandler(option.days)}
            >
              {option.days}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
