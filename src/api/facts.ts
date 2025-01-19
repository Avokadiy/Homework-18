import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const facts = createAsyncThunk("facts", async (page: number) => {
    const { data } = await instance.get(`/Facts?pageIndex=${page}&pageSize=18`);
    return data;
});