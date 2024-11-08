import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { logout } from "store/login/LoginSlice";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo/logo.svg";
import { BiExit } from "react-icons/bi";
import { showSuccessToast } from "utils/toast";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const {username} = useAppSelector((state) => state.login);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  //we dont have logout api then we should handle in tsx component
  const handleLogout = () => {
    dispatch(logout());
    showSuccessToast("خروج با موفقیت انجام شد");
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 text-white rounded-lg">
      <div className="relative">
        <div
          className="w-40 h-10 flex items-center space-x-4 cursor-pointer shadow-md rounded-xl bg-white"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-sm text-config-green px-4">{username}</span>
        </div>
        {isDropdownOpen && (
          <div onClick={handleLogout} className="absolute right-0 mt-2 w-20 bg-config-hover-green rounded-md shadow-lg py-1 z-10 hover:bg-config-green px-3 py-2 text-sm text-white flex items-center gap-x-2 cursor-pointer">
            <BiExit />
            خروج
          </div>
        )}
      </div>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-8 ml-3" />
      </div>
    </header>
  );
};

export default Header;
