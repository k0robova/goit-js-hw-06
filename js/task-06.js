const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.preventDefault();
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("invalid");
  }
}
