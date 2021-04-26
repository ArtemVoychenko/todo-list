import {store} from '../store';
import {counter} from "../reducers/counterReducer";


export const increment1 = () => store.dispatch(counter.actions.increment1())
export const increment2 = () => store.dispatch(counter.actions.increment2())
export const increment3 = () => store.dispatch(counter.actions.increment3())

