const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContent = document.querySelector('#ingredients');
console.log(ingredientsContent);

let item;

for (const ingredient of ingredients) {

  const item = document.createElement('li');

  item.textContent = ingredient;

  item.classList.add('item');

  ingredientsContent.append(item);
  console.log(item);

}