const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onUpdateOutput);

function onUpdateOutput(event) {
  outputEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "anonymous"; 
}