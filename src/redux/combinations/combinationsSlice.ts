import { createSlice } from "@reduxjs/toolkit";
import { TCombinationsState } from "../../components/Types/state";
import { сombinations } from "../../api/combinations";

const initialState: TCombinationsState = {
    isLoading: false,
    data: [],
    isError: false,
    currentPage: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
};

export const combinationsSlice = createSlice({
    name: "combinations",
    initialState,
    reducers: {
        resetCombinations: (state) => {
            state.data = [];
            state.isError = false;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(сombinations.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(сombinations.fulfilled, (state, { payload }) => {
            state.data = [...state.data, ...payload.items];
            state.isLoading = false;
            state.currentPage = payload.currentPage;
            state.pageSize = payload.pageSize;
            state.totalCount = payload.totalCount;
            state.totalPages = payload.totalPages;
        });

        builder.addCase(сombinations.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export const {resetCombinations} = combinationsSlice.actions
export default combinationsSlice.reducer;