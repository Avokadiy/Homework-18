import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const allBeans = createAsyncThunk('beans', async(page: number) => {
    const { data } = await instance.get(`/Beans?pageIndex=${page}&pageSize=15`);
    return data;
})