import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Login } from "api/services/authServiceApi";
import { showSuccessToast } from "utils/toast";
import { LoginState , LoginArgs} from "store/types/LoginStatesTypes";
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "utils/localStorage";

const initialState: LoginState = {
  showPassword: false,
  username: getLocalStorage("userName") || "",
  password: "",
  loading: false,
};

export const login = createAsyncThunk(
  "login/login",
  async ({ username, password, navigate }: LoginArgs, thunkAPI) => {
    try {
      const data = await Login({ username, password });
      if (!data || !data.accessToken) {
        throw new Error("Invalid response from server");
      }
      setLocalStorage("token", data.accessToken);
      setLocalStorage("userName", data.username);
      showSuccessToast("ورود با موفقیت انجام شد");
      navigate('/data-table')
      return {
        token: data.accessToken,
        username: data.username,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const logout = createAsyncThunk(
  "login/logout",
  async (_) => {
    try {
      //should call logOut api here or handle logOut in logOut component
      removeLocalStorage("token");
    } catch (error) {
      throw error;
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setShowPassword: (state) => {
      state.showPassword = !state.showPassword;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.username = action.payload.username || 'none';
    }).addCase(login.rejected, (state) => {
      state.loading = false;
    })
  },
});

export const { setUserName, setPassword, setShowPassword, setLoading } = loginSlice.actions;
export default loginSlice.reducer;
