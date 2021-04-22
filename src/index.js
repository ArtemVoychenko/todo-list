import {rndDispatcher, setInputTextDispatcher} from './store/dispatchers';
import {store} from './store/store';

const {subscribe, getState} = store;

const field = document.getElementById('field');
const done = document.getElementById('done');
const incBTN = document.getElementById('inc');
const rndBTN = document.getElementById('rnd');
const input = document.getElementById('input');

// field.innerHTML = getState();

subscribe(() => {
  field.innerHTML = getState().value;
});

subscribe(() => {
  done.innerHTML = getState().allValues;
});



rndBTN.addEventListener('click', () => {
  const rndText = Math.random (). toString (36) .replace (/ [^ az] + /g, '');

  rndDispatcher(rndText);
});

let inputValue = '';

input.addEventListener('input', (e) => {
  const {value} = e.target;
  inputValue = value;
});
incBTN.addEventListener('click', () => {
  setInputTextDispatcher(inputValue);
  inputValue = '' ;
  input.value = '';
});
