import {rndDispatcher, setInputTextDispatcher} from './store/dispathers/inputDispatchers';
import {increment1, increment2, increment3} from "./store/dispathers/counterDispatchers";
import {store} from './store/store';

const {subscribe, getState} = store;

const field = document.getElementById('field');
const done = document.getElementById('done');
const incBTN = document.getElementById('inc');
const rndBTN = document.getElementById('rnd');
const input = document.getElementById('input');
const inc1 = document.getElementById('inc1');
const inc2 = document.getElementById('inc2');
const inc3 = document.getElementById('inc3');
const counter = document.getElementById('counter');


subscribe(() => {
  field.innerHTML = getState().input.value;
});

subscribe(() => {
  done.innerHTML = getState().input.allValues;
});

subscribe(() => {
  console.log('getState()', getState())
  counter.innerHTML = getState().counter;
});

inc1.addEventListener('click', () => {
  increment1();
});

inc2.addEventListener('click', () => {
  increment2();
});

inc3.addEventListener('click', () => {
  increment3();
});

rndBTN.addEventListener('click', () => {
  const rndText = Math.random ().toString (36).replace (/ [^ az] + /g, '');

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
