'use strict';

const counterValueEl = document.querySelector('#counterValue');
const btnIncrement = document.querySelector('#btnIncrement');
const btnDecrement = document.querySelector('#btnDecrement');
const btnReset = document.querySelector('#btnReset');

let value = 0;

function render() {
  counterValueEl.textContent = String(value);
  btnDecrement.disabled = value === 0;
}

btnIncrement.addEventListener('click', () => {
  value += 1;
  render();
});

btnDecrement.addEventListener('click', () => {
  value -= 1;
  if (value < 0) value = 0;
  render();
});

btnReset.addEventListener('click', () => {
  value = 0;
  render();
});

render();
