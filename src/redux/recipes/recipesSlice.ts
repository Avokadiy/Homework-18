import { createSlice } from "@reduxjs/toolkit";
import { TRecipesState } from "../../components/Types/state";
import { recipes } from "../../api/recipes";

const initialState: TRecipesState = {
    isLoading: false,
    data: [],
    isError: false,
    currentPage: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
};

export const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(recipes.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        
        builder.addCase(recipes.fulfilled, (state, { payload }) => {
            state.data = [...state.data, ...payload.items];
            state.isLoading = false;
            state.currentPage = payload.currentPage;
            state.pageSize = payload.pageSize;
            state.totalCount = payload.totalCount;
            state.totalPages = payload.totalPages;
        });

        builder.addCase(recipes.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default recipesSlice.reducer;