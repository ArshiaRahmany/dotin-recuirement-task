import React, { useState } from "react";
import TextInput from "components/common/inputs/textInput/TextInput";
import Button from "components/common/button/Button";
import Loading from "components/common/loading/Loading";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo/logo.svg";
import { useAppSelector, useAppDispatch } from "hooks/useRedux";
import { login } from "store/login/LoginSlice";
import { RootState } from "store/rootReducer";
import { showErrorToast } from "utils/toast";

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector((state: RootState) => state.login.loading);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      dispatch(login({ username, password, navigate }));
    }
    else{
      showErrorToast('لطفا نام کاربری و گذرواژه خود را وارد کنید')
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md w-96">
        <img className="w-48 flex items-center" src={logo} alt="Dotin" />
        <h1 className="text-xl font-bold text-center mb-6">ورود و ثبت نام</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="نام کاربری"
            type="text"
            className="mb-4"
          />
          <TextInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="گذرواژه"
            type="password"
            className="mb-4"
          />
          <Button
            type="submit"
            className={"bg-config-green hover:bg-config-hover-green"}
          >
            {loading ? (
              <Loading className={"w-[22px]"} />
            ) : (
              <p className="text-white text-[1rem]">ورود</p>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
