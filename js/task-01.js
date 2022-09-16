const allItems = document.querySelectorAll(".item");
const allItemsQuantity = allItems.length;

console.log(`Number of categories: ${allItemsQuantity}`);

allItems.forEach((element) => {
  let elementTitle = element.querySelector("h2").textContent;

  let oneTitleElements = element.querySelectorAll("li");
  let oneTitleElemntsQuantity = oneTitleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElemntsQuantity}`);
});
