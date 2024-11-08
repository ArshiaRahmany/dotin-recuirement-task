import React from "react";
import { ButtonProps } from "./types/Props";

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  type = 'button',
  className,
}) => {
  const buttonClasses = `${className} rounded-2xl w-full btn  ${
    disabled ? "btn-disabled cursor-not-allowed" : "cursor-pointer	"
  }`;

  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
