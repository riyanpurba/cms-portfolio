// components/Button.tsx

import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`cursor-pointer inline-flex items-center justify-center tracking-[2px] text-xs uppercase font-medium transition-[0.4s] duration-[cubic-bezier(0,0,0.3642,1)] py-0 mx-auto lg:mx-0 rounded-[70px] border-[none] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
