function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyDocument = document.body;
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", onClick);

function onClick(event) {
  const changeColor = getRandomHexColor();
  bodyDocument.style.backgroundColor = changeColor;
  span.textContent = changeColor;
}
