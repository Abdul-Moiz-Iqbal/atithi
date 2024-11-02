// import React from "react";

// interface ButtonProps{
//     text: string;
//     className?: string;
// }
// const Button:React.FC<ButtonProps> = ({text ,className}) => {
//     return(
//         <button className={`${className} px-4 py-4 lg:px-[20.5px] text-[14px] sm:text-[18px] sm:py-[17px] font-medium bg-main-red text-white uppercase shadow-btn`}>
//         {text}
//       </button>
//     )
// }

// export default Button

import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void; // Add onClick handler as an optional prop
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick} // Attach onClick handler to button
      className={`${className} px-4 py-4 lg:px-[20.5px] text-[14px] sm:text-[18px] sm:py-[17px] font-medium bg-main-red text-white uppercase shadow-btn`}
    >
      {text}
    </button>
  );
};

export default Button;
