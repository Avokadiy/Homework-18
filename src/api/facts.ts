import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const facts = createAsyncThunk("facts", async (page: number) => {
    const { data } = await instance.get(`/Facts?pageIndex=${page}&pageSize=99`);
    return data;
});