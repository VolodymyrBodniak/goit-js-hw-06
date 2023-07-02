const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;

  const elements = Array.from(item.children).filter(
    (child) => child.tagName === "li"
  );

  const numberOfElements = elements.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
