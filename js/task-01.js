const categoriesArr = document.querySelectorAll('.item');
const categoriesArrTotal = categoriesArr.length;
console.log(`Number of categories: ${categoriesArrTotal}`);

categoriesArr.forEach(element => {
const elementTitle = element.querySelector('h2');
console.log(`Category: ${elementTitle.textContent}`);
const elementCount = element.querySelectorAll('li');
console.log(`Elements: ${elementCount.length}`);
});