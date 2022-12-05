const counterValue = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});
btnIncrement.addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});

console.log(counterValue);