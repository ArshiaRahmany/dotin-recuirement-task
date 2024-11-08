import { NavigateFunction } from "react-router-dom";

export interface LoginState {
    username: string;
    password: string;
    loading: boolean;
    showPassword: boolean;
  }
  
  export interface UserState {
    loading: boolean;
    token: string;
    fullname: string;
    firstName: string;
    lastName: string;
    image: string;
  }

  export interface LoginArgs {
    username: string;
    password: string;
    navigate: NavigateFunction
  }