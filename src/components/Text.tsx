import React, { FC, ReactNode} from "react";

interface TextProps {
    children: ReactNode;
    className?: string;
}

const Text: FC<TextProps> = ({ children, className }) => {
    return <p className={`text-base font-medium font-raleway ${className}`}>{children}</p>;
};

export default Text;