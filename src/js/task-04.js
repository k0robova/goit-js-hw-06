const counter = document.querySelector("#value");
console.log(counter);

const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

let counterValue = 0;

function render() {
  counter.textContent = counterValue.toString();
}

btnIncrement.addEventListener("click", onClickIncrement);
function onClickIncrement(event) {
  counterValue += 1;
  render();
}

btnDecrement.addEventListener("click", onClickDecrement);
function onClickDecrement(event) {
  counterValue -= 1;
  render();
}
