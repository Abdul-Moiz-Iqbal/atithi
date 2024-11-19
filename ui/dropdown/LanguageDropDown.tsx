import { useRef, useState, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const LanguageDropdown = ({ options, placeholder, onOptionSelect, className }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const showDropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };

  const onOptionHandler = (option) => {
    setSelectedLanguage(option.label); // Display language name
    onOptionSelect(option.value); // Pass selected language value back to parent
    setShowDropdown(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
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
    <div className="relative text-lg font-normal  flex flex-col " ref={dropdownRef}>
      {/* Dropdown Toggle */}
      <div
        className={`${className}   flex justify-between`}
        onClick={showDropdownHandler}
      >
        <input
          className="pl-4 w-[100%] sm:pl-4  text-lg font-normal outline-none"
          value={selectedLanguage}
          readOnly
        />
        <div className="flex justify-between items-center py-2 text-gray-600">
          <TiArrowSortedDown
            className={` text-2xl ${showDropdown ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Dropdown Options */}
      {showDropdown && (
        <div
          className="absolute z-10 custom-scrollbar border-2 not-italic border-main-red overflow-y-auto max-h-[200px] w-full bg-white"
          style={{ top: "100%", left: 0 }}
        >
          {options.map((option) => (
            <div
              className={`p-[10px] font-normal font-author cursor-pointer text-[#8A8A8A] text-sm hover:text-main-red hover:bg-gradient-to-r hover:from-[rgba(255,0,0,0.3)] hover:to-[rgba(233,233,233,0)] ${
                selectedLanguage === option.label ? "border-l-4 border-main-red" : ""
              }`}
              key={option.value}
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

export default LanguageDropdown;
