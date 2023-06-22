const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById("value");

let counterValue = 0;

const updateCounterValue = (value) => {
  counterValue = value;
  counterValueSpan.textContent = counterValue;
};

decrementButton.addEventListener("click", () => {
  updateCounterValue(counterValue - 1);
});

incrementButton.addEventListener("click", () => {
  updateCounterValue(counterValue + 1);
});
