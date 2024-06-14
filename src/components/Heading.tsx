import React, { ReactNode } from 'react';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Define the heading level
  children: ReactNode; // Children can be any valid ReactNode
  className?: string; // Optional class name for additional styling
};

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <HeadingTag className={`font-merriweather font-semibold ${className}`}>{children}</HeadingTag>;
};

export default Heading;
