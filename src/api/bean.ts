import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const bean = createAsyncThunk('bean', async (id: string) => {
    const {data} = await instance.get(`/Beans/${id}`);
    return data;
})