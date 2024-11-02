"use client"
import React, { useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative ml-6 inline-block text-left cursor-pointer" onClick={toggleDropdown}>
      <div className='relative flex items-center  pointer' >
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-[18px] font-normal "
         
        >
          {selectedLanguage}
        </button>
        <TiArrowSortedDown className='ml-3' />

      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 bg-white shadow-lg focus:outline-none"
          role="menu"
        >
          <div className="py-1">
            <button
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
              onClick={() => selectLanguage('English')}
            >
              English
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
              onClick={() => selectLanguage('Hindi')}
            >
              Hindi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
