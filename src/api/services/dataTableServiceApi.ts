import axiosInstance from "api/config/axiosConfig";
import { CartResponse } from "../types/tableTypes";

export const fetchCarts = async (): Promise<CartResponse> => {
  const response = await axiosInstance.get<CartResponse>("carts");
  return response?.data || {};
};
