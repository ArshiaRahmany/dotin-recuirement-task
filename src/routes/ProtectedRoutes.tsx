import React, { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "utils/localStorage";

interface ProtectedComponentProps {
  children: ReactNode;
}

const ProtectedComponent: React.FC<ProtectedComponentProps> = ({ children }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = getLocalStorage("token");
    if (token) {
      navigate("/data-table");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedComponent;
