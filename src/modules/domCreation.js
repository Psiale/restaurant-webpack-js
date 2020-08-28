import tabBuilder from './tabs';
import MainBackground from '../img/main-background.jpg';
import { root, mainContainer, headlineContainer } from './sharedHTMLElements';
// import renderAbout from './about';


const headline = document.createElement('h1');
const subheadline = document.createElement('h1');
const imgContainer = document.createElement('div');
const imgTitle = document.createElement('h3');
const img = document.createElement('img');
const info = document.createElement('p');

const createTabs = () => {
  mainContainer.innerHTML = '';
  mainContainer.style.backgroundImage = MainBackground;
  tabBuilder(root);
};

const createPage = () => {
  // creating elements
  // adding classes to HTML elements
  mainContainer.classList.add('main-container');
  info.classList.add('main-info');
  headlineContainer.classList.add('main-headline');
  imgContainer.classList.add('main-img-container');
  imgTitle.classList.add('img-title');
  img.classList.add('main-img');

  // adding elements to HTML
  mainContainer.style.backgroundImage = MainBackground;
  imgTitle.innerHTML = 'Zongolica, Veracruz';

  headline.innerHTML = 'Historia Mexicana del Café';
  subheadline.innerHTML = 'Coffee beans for sale';
  info.innerHTML = 'This coffee tastes like heaven';
  headlineContainer.appendChild(headline);
  headlineContainer.appendChild(subheadline);
  mainContainer.appendChild(headlineContainer);
  imgContainer.appendChild(info);
  root.appendChild(mainContainer);
};

// const tabsEvent = () => {
//   const homeTab = document.getElementById('Home');
//   const aboutTab = document.getElementById('About');
//   const productTab = document.getElementById('Product');
//   homeTab.addEventListener('click', createPage);
//   aboutTab.addEventListener('click', renderAbout);
// }

export {
  createPage,
  createTabs,
};