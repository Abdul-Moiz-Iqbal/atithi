import React from "react";

interface H4Props {
    title: string;
    className?: string;
}
const H4: React.FC<H4Props> = ({className, title}) => {
    return (
        <h4 className={`${className} mt-6 uppercase text-center  text-[20px] font-semibold`}>
            {title}
        </h4>
    );
}

export default H4