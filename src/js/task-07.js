const input = document.querySelector("#font-size-control");
console.log(input);
const span = document.querySelector("#text");
console.log(span);

input.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}
