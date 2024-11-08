import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCarts } from "api/services/dataTableServiceApi";
import { DataTableState , CartResponse } from "api/types/tableTypes";


const initialState: DataTableState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchDataTable = createAsyncThunk(
  "dataTable/fetchDataTable",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await fetchCarts();
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const dataTableSlice = createSlice({
  name: "dataTable",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataTable.fulfilled, (state, action: PayloadAction<CartResponse>) => {
        state.loading = false;
        state.data = action.payload;
      })
  },
});

export const { setLoading } = dataTableSlice.actions;
export default dataTableSlice.reducer;
