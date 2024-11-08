import axiosInstance from "api/config/axiosConfig";
import { RequestLogin } from "../types/authType";

export const Login = async (data: RequestLogin) => {
  const response = await axiosInstance.post(
    "auth/login",
    data
  );
  return response?.data || {};
};

// export const Logout = async () => {
//   const response = await axiosInstance.post("/Users/Public/User/Logout");
//   return response?.data || {};
// };
