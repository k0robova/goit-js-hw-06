const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.querySelector("#ingredients");
// ingredients.forEach((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");

//   ingredientsList.appendChild(listItem);
// });

const ingredientsList = document.querySelector("#ingredients");

const listItems = ingredients.map((ingredient) => {
  return `<li class='item'>${ingredient}</li>`;
});

ingredientsList.innerHTML = listItems.join("");
