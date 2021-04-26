import {createSlice} from "@reduxjs/toolkit";

export const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment1: (state) => state + 1,
    increment2: (state) => state + 2,
    increment3: (state) => state + 3,
  },
})
