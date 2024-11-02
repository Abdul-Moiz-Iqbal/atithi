import React from "react";

interface H6Props {
    title: string;
    className?: string;
}
const H6: React.FC<H6Props> = ({className, title}) => {
    return (
        <h4 className={`${className} font-author text-black text-[18px] font-medium`}>
            {title}
        </h4>
    );
}

export default H6