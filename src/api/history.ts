import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

export const history = createAsyncThunk("history", async () => { 
    const { data } = await instance.get(`/MileStones?pageIndex=1&pageSize=23`);
    return data;
});