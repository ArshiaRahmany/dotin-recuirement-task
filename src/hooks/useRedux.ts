import { combineReducers, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { logout } from "store/login/LoginSlice";
import loginReducer from "store/login/LoginSlice";
import dataTableReducer from "store/dataTable/DataTableSlice"; 

const rootReducer = combineReducers({
  login: loginReducer,
  dataTable: dataTableReducer, 
});

const appReducer = (state: ReturnType<typeof rootReducer> | undefined, action: PayloadAction) => {
  if (action.type === logout.fulfilled.type) {
    state = undefined;
  }
  return rootReducer(state, action);
};

const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
