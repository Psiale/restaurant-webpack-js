
import { root, mainContainer, headlineContainer } from './sharedHTMLElements';
import CoffeeBeans from '../classes/CoffeeBean';

const coffeeContainer = document.createElement('div');
const COFFEECATALOG = [
  new CoffeeBeans(
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    'https://videohive.img.customer.envatousercontent.com/files/126e43a5-9a07-4955-bc89-66082140a2e9/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef8c83cdcb37c63be8973250ed222d11',
  ),
  new CoffeeBeans(
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    'https://videohive.img.customer.envatousercontent.com/files/126e43a5-9a07-4955-bc89-66082140a2e9/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef8c83cdcb37c63be8973250ed222d11',
  ),
  new CoffeeBeans(
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavours',
    'https://videohive.img.customer.envatousercontent.com/files/126e43a5-9a07-4955-bc89-66082140a2e9/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef8c83cdcb37c63be8973250ed222d11',
  ),
];

const coffeeSectionBuilder = (subHeadline, info, subContent, infoContent) => {
  const container = document.createElement('div');
  container.classList.add('coffee-section-container');
  subHeadline.innerHTML = subContent;
  info.innerHTML = infoContent;
  container.appendChild(subHeadline);
  container.appendChild(info);
  return container;
};

const itemBuilder = () => {
  coffeeContainer.classList.add('coffee-container');
  if (coffeeContainer.childNodes.length === 0) {
    COFFEECATALOG.forEach(coffee => {
      const headlineElement = document.createElement('h2');
      const imgElement = document.createElement('img');
      const itemContainer = document.createElement('div');
      const subHeadlineElement = document.createElement('h3');
      const infoElement = document.createElement('h4');
      const pElement = document.createElement('p');
      itemContainer.classList.add('coffee-item');
      headlineElement.innerHTML = coffee.region;
      imgElement.src = coffee.img;
      itemContainer.appendChild(headlineElement);
      itemContainer.appendChild(imgElement);
      itemContainer.appendChild(coffeeSectionBuilder(subHeadlineElement, infoElement, 'Process', coffee.process));
      itemContainer.appendChild(coffeeSectionBuilder(subHeadlineElement, infoElement, 'Profile', coffee.profile));
      itemContainer.appendChild(coffeeSectionBuilder(subHeadlineElement, pElement, 'Description', coffee.description));
      coffeeContainer.appendChild(itemContainer);
    });
  }
  return coffeeContainer;
};

const renderProduct = () => {
  mainContainer.appendChild(headlineContainer);
  mainContainer.appendChild(itemBuilder());
  root.appendChild(mainContainer);
};

export default renderProduct;