import {createSlice} from '@reduxjs/toolkit';
import {TASKS} from "../../todoList/Сonstants";

export const inputReducer = {
  name: 'inputReducer',
  initialState: TASKS,
  reducers: {
    addTask: (state, action) => {
      state.push({
        title: action.payload,
        id: state.length + action.payload,
        done: false
      })
    },
    deleteTask: (state, action) => {
      const index = state.map(task => task.id).indexOf(action.payload);
      if (index !== -1){
        state.splice(index,1);
      }
    },
    doneTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
        if (index !== -1){
          state[index].done = true;
        }
    }
  }
};

export const {reducer, actions} = createSlice(inputReducer);
