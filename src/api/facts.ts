import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const facts = createAsyncThunk("facts", async () => {
    const { data } = await instance.get(`/Facts?pageIndex=1&pageSize=99`);
    return data;
});