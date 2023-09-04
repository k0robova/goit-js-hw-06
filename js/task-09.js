function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let bodyDocument = document.body;
const button = document.querySelector(".change-color");
console.log(button);
button.addEventListener("click", onClick);

const span = document.querySelector(".color");
console.log(span);

function onClick(event) {
  console.log(event.currentTarget);
  bodyDocument.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}
