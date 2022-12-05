const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener('blur', (el) => {
  inputElement.classList.add('invalid');
  el.currentTarget.value.length === Number(inputElement.dataset.length)
    ? inputElement.classList.replace('invalid', 'valid')
    : inputElement.classList.replace('valid', 'invalid');
});