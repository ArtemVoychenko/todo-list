import {actions} from '../reducers/redusers';
import {store} from '../store';

const {dispatch} = store;
const {addTask, deleteTask, doneTask} = actions;

export const addDispatcher = (title) => dispatch(addTask(title));
export const deleteDispatcher = (id) => dispatch(deleteTask(id));
export const setDoneTaskDispatcher = (id) => dispatch(doneTask(id));
