
import {
  root, mainContainer, headlineContainer, headline, subheadline,
} from './sharedHTMLElements';
import CoffeeBeans from '../classes/CoffeeBean';
import CoffeeBag from '../img/beans-bag.svg';
import CoffeeBag1 from '../img/beans-bag-chiapas.svg';
import CoffeeBag2 from '../img/beans-bag-veracruz.svg';

const coffeeContainer = document.createElement('div');
const COFFEECATALOG = [
  new CoffeeBeans(
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    CoffeeBag,
  ),
  new CoffeeBeans(
    'Veracruz',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    CoffeeBag1,
  ),
  new CoffeeBeans(
    'Chiapas',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavours',
    CoffeeBag2,
  ),
  new CoffeeBeans(
    'Veracruz',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    CoffeeBag1,
  ),
  new CoffeeBeans(
    'Chiapas',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavours',
    CoffeeBag2,
  ),
  new CoffeeBeans(
    'Oaxaca',
    'Washed',
    'Chocolate, Nuts',
    'Coffee bean with a classic taste, strong and marked flavors',
    CoffeeBag,
  ),
];


const addRemoveItem = (event) => {
  if (window.getComputedStyle(event.target).backgroundColor) {
    event.target.style.backgroundColor = '#c9d6df';
    event.target.innerHTML = 'Added';
    event.target.style.color = '#1e2022';
  } else {
    event.target.style.backgroundColor = '#1e2022';
  }
};

const itemBuilder = () => {
  coffeeContainer.classList.add('coffee-container');
  if (coffeeContainer.childNodes.length === 0) {
    COFFEECATALOG.forEach(coffee => {
      const imgElement = document.createElement('img');
      const itemContainer = document.createElement('div');
      const addToCart = document.createElement('button');
      addToCart.addEventListener('click', addRemoveItem, false);
      itemContainer.classList.add('coffee-item');
      imgElement.src = coffee.img;
      addToCart.innerHTML = 'Add to Cart';
      itemContainer.appendChild(imgElement);
      itemContainer.appendChild(addToCart);
      coffeeContainer.appendChild(itemContainer);
    });
  }
  return coffeeContainer;
};

const renderProduct = () => {
  mainContainer.innerHTML = '';
  subheadline.innerHTML = '';
  mainContainer.classList.remove('main-background');
  mainContainer.classList.remove('about-background');
  headline.innerHTML = 'Coffee Beans for Sale';
  mainContainer.appendChild(headlineContainer);
  mainContainer.appendChild(itemBuilder());
  root.appendChild(mainContainer);
};

export default renderProduct;