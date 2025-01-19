import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const сombinations = createAsyncThunk("combinations", async (page: number) => {
    const { data } = await instance.get(`/combinations?pageIndex=${page}&pageSize=18`);
    return data;
});