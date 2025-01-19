import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const allBeans = createAsyncThunk('beans', async() => {
    const {data} = await instance.get('/Beans')
    return data;
})