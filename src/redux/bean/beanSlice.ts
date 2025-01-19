import { createSlice } from "@reduxjs/toolkit";
import { TBeanState } from "../../components/Types/state";
import { bean } from "../../api/bean";

const initialState: TBeanState = {
  isLoading: false,
  data: null,
  isError: false,
};

const beanSlice = createSlice({
  name: "bean",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(bean.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    });

    builder.addCase(bean.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });

    builder.addCase(bean.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beanSlice.reducer;