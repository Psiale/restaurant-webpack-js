import tabBuilder from './tabs';
import MainBackground from '../img/main-background.svg';
import {
  root, mainContainer, headlineContainer, headline, subheadline,
} from './sharedHTMLElements';
// import renderAbout from './about';
const imgContainer = document.createElement('div');
const imgTitle = document.createElement('h3');
const img = document.createElement('img');
const info = document.createElement('p');

const createTabs = () => {
  mainContainer.innerHTML = '';
  mainContainer.style.backgroundImage = MainBackground;
  tabBuilder(root);
};

const createPage = (headlineText) => {
  // creating elements
  // adding classes to HTML elements
  mainContainer.classList.add('main-container');
  info.classList.add('main-info');
  headlineContainer.classList.add('main-headline');
  headlineContainer.id = 'headlineContainer';
  subheadline.id = 'subheadline';
  imgContainer.classList.add('main-img-container');
  imgTitle.classList.add('img-title');
  img.classList.add('main-img');

  // adding elements to HTML
  mainContainer.style.backgroundImage = MainBackground;
  imgTitle.innerHTML = 'Zongolica, Veracruz';

  headline.innerHTML = headlineText;
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