import {store} from '../store';
import {inputReducer} from "../reducers/inputReducer";

export const rnd = (rndText) => store.dispatch(inputReducer.actions.rnd(rndText))
export const setInputText = (rndText) => store.dispatch(inputReducer.actions.setInputText(rndText))




