// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

const allElements = document.querySelector("#controls");
console.log(allElements);
const input = allElements.firstElementChild;
console.log(input);
const createBtn = document.querySelector("button[data-create");
console.log(createBtn);
const destroyBtn = document.querySelector("button[data-destroy]");
console.log(destroyBtn);

input.addEventListener("input", onInput);
createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn);

function onInput(event) {
  event.preventDefault();
}

function onCreateBtn(event) {
  event.preventDefault();
  // const divBoxes = document.querySelector("#boxes");
  // divBoxes.innerHTML = "";
  createBoxes(Number(input.value));
}

function onDestroyBtn() {
  input.value = "";
  const divBoxes = document.querySelector("#boxes");
  divBoxes.innerHTML = "";
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function createBoxes(amount) {
  const divBoxes = document.querySelector("#boxes");

  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    const divElements = document.createElement("div");
    divElements.style.width = `${width}px`;
    divElements.style.height = `${height}px`;
    divElements.style.backgroundColor = getRandomHexColor();
    divBoxes.append(divElements);

    width += 10;
    height += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
// function destroyBoxes()
