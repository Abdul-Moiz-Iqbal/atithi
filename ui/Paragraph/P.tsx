import React from "react";

interface ParagraphProps {
    text: string;
    className?: string;
}
const P: React.FC<ParagraphProps> = ({className, text}) => {
    return (
        <p className={`${className} text-[18px]  tracking-[0.1px] text-center`}>
            {text}
        </p>
    );
}

export default P