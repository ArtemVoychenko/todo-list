import {combineReducers} from "redux";
import {counter} from "./counterReducer";
import {inputReducer} from "./inputReducer";

export const reducer = combineReducers({
  counter: counter.reducer,
  input: inputReducer,
})
