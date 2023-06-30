const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.querySelector("#ingredients");

// const fragment = document.createDocumentFragment();

// ingredients.forEach((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   fragment.appendChild(listItem);
// });

// ingredientsList.appendChild(fragment);

const ul = document.getElementById("ingredients");

const listItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ul.append(...listItems);
