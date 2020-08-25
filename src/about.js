import {
  createPage, mainContainer, headlineContainer, root,
} from './load';
import tabBuilder from './tabs';
import home from './home';

const aboutContainer = document.createElement('div');
const aboutParagraph = document.createElement('p');
const shippingParagraph = document.createElement('p');


const addingAttributes = () => {
  aboutContainer.classList.add('about-container');
  aboutParagraph.classList.add('about-paragraph');
  shippingParagraph.classList.add('about-paragraph');
  shippingParagraph.id = 'shipping-paragraph';
};

const renderAbout = () => {
  createPage();
  mainContainer.innerHTML = '';
  aboutParagraph.innerHTML = 'We are a speciality coffee shop focused on selling the greatest mexican coffee beans.';
  shippingParagraph.innerHTML = 'Check our products and shipping offers';
  addingAttributes();
  tabBuilder(mainContainer);
  const homeTab = document.getElementById('Home');
  homeTab.addEventListener('click', home, false);
  aboutContainer.appendChild(aboutParagraph);
  aboutContainer.appendChild(shippingParagraph);
  mainContainer.appendChild(headlineContainer);
  mainContainer.appendChild(aboutContainer);
  root.appendChild(mainContainer);
//   I need to add some text in here.
};


export default renderAbout;