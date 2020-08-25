import tabBuilder from './tabs';


const root = document.getElementById('content');
const mainContainer = document.createElement('div');
const headlineContainer = document.createElement('div');
const headline = document.createElement('h1');
const subheadline = document.createElement('h1');
const imgContainer = document.createElement('div');
const imgTitle = document.createElement('h3');
const img = document.createElement('img');
const info = document.createElement('p');

const createPage = () => {
  // creating elements
  tabBuilder(mainContainer);

  // adding classes to HTML elements
  mainContainer.classList.add('main-container');
  info.classList.add('main-info');
  headlineContainer.classList.add('main-headline');
  imgContainer.classList.add('main-img-container');
  imgTitle.classList.add('img-title');
  img.classList.add('main-img');

  // adding elements to HTML
  img.src = 'https://libreshot.com/wp-content/uploads/2016/03/coffee-beans-1.jpg';
  imgTitle.innerHTML = 'Zongolica, Veracruz';
  imgContainer.appendChild(imgTitle);
  imgContainer.appendChild(img);
  headline.innerHTML = 'Historia Mexicana del Café';
  subheadline.innerHTML = 'Coffee beans for sale';
  info.innerHTML = 'This coffee tastes like heaven';
  headlineContainer.appendChild(headline);
  headlineContainer.appendChild(subheadline);
  mainContainer.appendChild(headlineContainer);
  imgContainer.appendChild(info);
  mainContainer.appendChild(imgContainer);
  root.appendChild(mainContainer);
};

export {
  createPage,
  mainContainer,
  headlineContainer,
};