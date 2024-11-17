import { useState, useRef, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const MultiSelectDropdown = ({
  options,
  placeholder,
  onOptionsChange,
  className,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevSelected) => {
      const isSelected = prevSelected.includes(option);
      const newSelection = isSelected
        ? prevSelected.filter((item) => item !== option) // Remove option
        : [...prevSelected, option]; // Add option

      onOptionsChange(newSelection); // Notify parent component
      return newSelection;
    });
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
    <div className={` relative flex flex-col `} ref={dropdownRef}>
      {/* Dropdown Header */}
      <div
        className={`${className} w-full border-2 border-main-red flex items-center justify-between p-2 cursor-pointer`}
        onClick={toggleDropdown}
      >
        <div
          className={`flex-grow max-w-60 overflow-hidden whitespace-nowrap text-ellipsis text-[18px] ${
            selectedOptions.length === 0 ? "text-[#808080]" : "text-black"
          }`}
        >
          {selectedOptions.length > 0
            ? selectedOptions.join(", ") // Display selected options
            : placeholder}
        </div>

        <TiArrowSortedDown
          className={`${className} text-main-red text-2xl  transition-transform ${
            showDropdown ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Options */}
      {showDropdown && (
        <div
          className="absolute not-italic z-10 border-2  border-main-red overflow-y-auto max-h-[200px] w-full bg-white custom-scrollbar"
          style={{ top: "100%", left: 0 }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-2 text-sm text-[#8A8A8A] hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] cursor-pointer flex items-center ${
                selectedOptions.includes(option.label)
                  ? " font-semibold border-l-4 border-main-red"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
