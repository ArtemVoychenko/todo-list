import {createSlice} from "@reduxjs/toolkit";

export const inputReducer = createSlice({
  name: 'inputReducer',
  initialState: {
    value: '',
    allValues: ''
  },
  reducers: {
    rnd: (state, action) => {
        state.value = action.payload;
        state.allValues = state.allValues + ' ' + action.payload;
    },
    setInputText: (state, action) => {
      state.value = action.payload;
      state.allValues = state.allValues + ' ' + action.payload;
    }
  }
})


