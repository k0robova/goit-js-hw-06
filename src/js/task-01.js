const categoryEl = document.querySelector("#categories");
// console.log(categoryEl);
const itemEl = document.querySelectorAll(".item");
// console.log(itemEl);

console.log(`Number of categories: ${itemEl.length}`);

[...categoryEl.children].forEach((item) => {
  //   console.log(item.firstElementChild);
  //   console.log(item.lastElementChild);

  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
