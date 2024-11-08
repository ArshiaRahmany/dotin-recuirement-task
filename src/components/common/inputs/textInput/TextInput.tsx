import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { InputProps } from "./types/Props";

const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4 relative">
      <input
        type={type === "password" && showPassword ? "text" : type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl py-[10px] font-normal text-[0.95rem] text-gray-800 px-5 outline-0 border border-[#f5f7fa] hover:border bg-[#f5f7fa] hover:border-config-green transition-all focus:shadow-inputShadow focus:border-solid focus:bg-[white] focus:border-config-green placeholder:text-right placeholder:text-[0.8rem] ${className} ${
          type === "password" ? "pr-10" : ""
        }`}
      />
      {type === "password" && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer text-2xl"
        >
          {showPassword ? <BiShow /> : <BiHide />}
        </span>
      )}
    </div>
  );
};

export default Input;
