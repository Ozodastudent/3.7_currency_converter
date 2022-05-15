var formEl = document.querySelector(".form");
var inputEl = document.querySelector(".form_input");
var formSelectEl = document.querySelector(".form-select");
var newCurrency = document.querySelector(".new_rate");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(inputEl.value);
  console.log(formSelectEl.value);

  newCurrency.textContent = (inputEl.value * formSelectEl.value).toFixed(0);
});
