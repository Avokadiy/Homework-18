import { createSlice } from "@reduxjs/toolkit";
import { TFactsState } from "../../components/Types/state";
import { facts } from "../../api/facts";

const initialState: TFactsState = {
    isLoading: false,
    data: [],
    isError: false,
    currentPage: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
};

export const beansSlice = createSlice({
    name: "facts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(facts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      });

      builder.addCase(facts.fulfilled, (state, { payload }) => {
        state.data = [...state.data, ...payload.items];
        state.isLoading = false;
        state.currentPage = payload.currentPage;
        state.pageSize = payload.pageSize;
        state.totalCount = payload.totalCount;
        state.totalPages = payload.totalPages;
      });

      builder.addCase(facts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    },
});

export default beansSlice.reducer;