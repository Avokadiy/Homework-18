import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const сombinations = createAsyncThunk("combinations", async () => {
    const { data } = await instance.get(`/combinations?pageIndex=1&pageSize=54`);
    return data;
});