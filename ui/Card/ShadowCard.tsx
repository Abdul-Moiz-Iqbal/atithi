import React from "react";
interface ShadowCardProps {
  children: React.ReactNode;
  className?: String;
}

const ShadowCard: React.FC<ShadowCardProps> = ({ children, className }) => {
  return (
    <div className={` ${className}  rounded-[10px]`}>
      {children}
    </div>
  );
};

export default ShadowCard;
