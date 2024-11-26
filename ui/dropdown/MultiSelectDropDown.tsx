// import { useState, useRef, useEffect } from "react";
// import { TiArrowSortedDown } from "react-icons/ti";

// const MultiSelectDropdown = ({
//   regions,
//   placeholder,
//   onOptionsChange,
//   className,
// }) => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleOptionSelect = (option, isRegion, regionStates) => {
//     setSelectedOptions((prevSelected) => {
//       let newSelection;

//       if (isRegion) {
//         // Check if the region is already selected
//         if (prevSelected.includes(option)) {
//           // Remove the region
//           newSelection = prevSelected.filter((item) => item !== option);
//         } else {
//           // Add the region and remove its states from selection
//           newSelection = [
//             ...prevSelected.filter((item) => !regionStates.includes(item)),
//             option,
//           ];
//         }
//       } else {
//         // Handle individual state selection
//         const isSelected = prevSelected.includes(option);
//         newSelection = isSelected
//           ? prevSelected.filter((item) => item !== option) // Deselect state
//           : [...prevSelected, option]; // Select state

//         // Remove the parent region if any of its states are selected individually
//         regions.forEach((region) => {
//           if (regionStates.includes(option)) {
//             newSelection = newSelection.filter(
//               (item) => item !== region.region
//             );
//           }
//         });
//       }

//       onOptionsChange(newSelection);
//       return newSelection;
//     });
//   };

//   const getSelectedDisplay = () => {
//     // Show only selected regions or states
//     const selectedRegions = regions.filter((region) =>
//       selectedOptions.includes(region.region)
//     );

//     const selectedStates = selectedOptions.filter((option) =>
//       regions.every(
//         (region) =>
//           !region.states.includes(option) || !selectedOptions.includes(region.region)
//       )
//     );

//     return [...selectedRegions.map((r) => r.region), ...selectedStates].join(
//       ", "
//     );
//   };

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
//     <div className={`relative flex flex-col`} ref={dropdownRef}>
//       {/* Dropdown Header */}
//       <div
//         className={`${className} w-full border-2 border-main-red flex items-center justify-between p-2 cursor-pointer`}
//         onClick={toggleDropdown}
//       >
//         <div
//           className={`flex-grow max-w-60 lg:max-w-max overflow-hidden whitespace-nowrap text-ellipsis text-[18px] ${
//             selectedOptions.length === 0 ? "text-[#808080]" : "text-black"
//           }`}
//         >
//           {selectedOptions.length > 0 ? getSelectedDisplay() : placeholder}
//         </div>

//         <TiArrowSortedDown
//           className={`text-main-red text-2xl  transition-transform ${
//             showDropdown ? "rotate-180" : ""
//           }`}
//         />
//       </div>

//       {/* Dropdown Options */}
//       {showDropdown && (
//         <div
//           className="absolute z-10 border-2 border-t-0 border-main-red overflow-y-auto max-h-[300px] w-full bg-white custom-scrollbar"
//           style={{ top: "100%", left: 0 }}
//         >
//           {regions.map((region) => (
//             <div key={region.region} className="mb-2">
//               {/* Region Header */}
//               <div
//                 className={`p-[10px] text-lg font-semibold cursor-pointer text-[#8A8A8A] hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] ${
//                   selectedOptions.includes(region.region)
//                     ? "border-l-4 border-main-red"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   handleOptionSelect(
//                     region.region,
//                     true, // isRegion
//                     region.states
//                   )
//                 }
//               >
//                 {region.region}
//               </div>
//               {/* State Options */}
//               {region.states.map((state) => (
//                 <div
//                   key={state}
//                   className={`p-[10px] text-lg text-[#8A8A8A] hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] cursor-pointer flex items-center ${
//                     selectedOptions.includes(state)
//                       ? "font-semibold border-l-4 border-main-red"
//                       : ""
//                   }`}
//                   onClick={() => handleOptionSelect(state, false, region.states)}
//                 >
//                   {state}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiSelectDropdown;
"use client";
import { useFormContext } from "@/src/context/FormContext";
import { useState, useRef, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const MultiSelectDropdown = ({
  regions,
  placeholder,
  onOptionsChange,
  className,
}) => {
  const { setFormData ,setFormError} = useFormContext();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
    
  };

  const handleOptionSelect = (option) => {
    const updatedSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
    setFormData((prevData) => ({ ...prevData, regions: updatedSelection }));
    setFormError((prev) => ({ ...prev, regions: "" })); // Clear error on change
   
  };

  const getSelectedDisplay = () => {
    return selectedOptions.length > 0 ? selectedOptions.join(", ") : placeholder;
  };

  // Handle blur (focus lost from the dropdown)
  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);

        // Set error if no option is selected
       
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedOptions]);

  return (
    <div className={`relative flex flex-col`} ref={dropdownRef}>
      {/* Dropdown Header */}
      <div
        className={`${className} w-full border-2 border-main-red flex items-center justify-between p-2 cursor-pointer`}
        onClick={toggleDropdown}
      >
        <div
          className={`flex-grow max-w-60 lg:max-w-max overflow-hidden whitespace-nowrap text-ellipsis text-[18px] ${
            selectedOptions.length === 0 ? "text-[#808080]" : "text-black"
          }`}
        >
          {getSelectedDisplay()}
        </div>

        <TiArrowSortedDown
          className={`text-main-red text-2xl  transition-transform ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Options */}
      {showDropdown && (
        <div
          className="absolute z-10 border-2 border-t-0 border-main-red overflow-y-auto max-h-[300px] w-full bg-white custom-scrollbar"
          style={{ top: "100%", left: 0 }}
        >
          {regions.map((region) => (
            <div key={region.region} className="mb-2">
              {/* Region Header */}
              <div
                className={`p-[10px] text-lg font-semibold cursor-pointer text-[#8A8A8A] hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] ${
                  selectedOptions.includes(region.region)
                    ? "border-l-4 border-main-red"
                    : ""
                }`}
                onClick={() => handleOptionSelect(region.region)}
              >
                {region.region}
              </div>
              {/* State Options */}
              {region.states.map((state) => (
                <div
                  key={state}
                  className={`p-[10px] text-lg text-[#8A8A8A] hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] cursor-pointer flex items-center ${
                    selectedOptions.includes(state)
                      ? "font-semibold border-l-4 border-main-red"
                      : ""
                  }`}
                  onClick={() => handleOptionSelect(state)}
                >
                  {state}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Display error message */}
      {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
    </div>
  );
};

export default MultiSelectDropdown;
