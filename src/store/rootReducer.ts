import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "store/login/LoginSlice";
import dataTableReducer from "store/dataTable/DataTableSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  dataTable: dataTableReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
