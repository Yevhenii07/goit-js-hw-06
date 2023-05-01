const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let arrayNodes = [];
for (const ingridient of ingredients) {
  let ingredientEl = document.createElement('li');
  ingredientEl.className = "item";
  ingredientEl.textContent = ingridient;
  arrayNodes.push(ingredientEl);
}
const ingridientsEl = document.querySelector('#ingredients');
ingridientsEl.append(...arrayNodes);