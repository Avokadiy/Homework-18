import { createSlice } from "@reduxjs/toolkit";
import { THistoryState } from "../../components/Types/state";
import { history } from "../../api/history";

const initialState: THistoryState = {
    isLoading: false,
    data: [],
    isError: false,
    currentPage: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(history.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(history.fulfilled, (state, { payload }) => {
            state.data = [...state.data, ...payload.items];
            state.isLoading = false;
            state.currentPage = payload.currentPage;
            state.pageSize = payload.pageSize;
            state.totalCount = payload.totalCount;
            state.totalPages = payload.totalPages;
        });
        
        builder.addCase(history.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default historySlice.reducer;