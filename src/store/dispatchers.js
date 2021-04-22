import {rndAction, setInputTextAction} from './actions';
import {store} from './store';

const {dispatch} = store;

export const rndDispatcher = (rndText) => dispatch(rndAction(rndText));
export const setInputTextDispatcher = (rndText) => dispatch(setInputTextAction(rndText));

