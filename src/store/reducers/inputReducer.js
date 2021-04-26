import {ActionTypes} from "../action-types";

const initState = {
  value: '',
  allValues: ''
};

export const inputReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.RND:
      return {
        value: action.payload,
        allValues: state.allValues + ' ' + action.payload
      }
    case ActionTypes.SET_INPUT_TEXT:
      return {
        value: action.payload,
        allValues: state.allValues + ' ' + action.payload
      }
    default:
      return state;
  }
};
