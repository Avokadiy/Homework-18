import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import beansSlice from "./beans/beansSlice";
import beanSlice from "./bean/beanSlice";
import combinationsSlice from "./combinations/combinationsSlice";
import historySlice from "./history/historySlice";
import recipesSlice from "./recipes/recipesSlice";
import factsSlice from "./facts/factsSlice";

export const store = configureStore({
    reducer: {
        beans: beansSlice,
        bean: beanSlice,
        combinations: combinationsSlice,
        history: historySlice,
        recipes: recipesSlice,
        facts: factsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();