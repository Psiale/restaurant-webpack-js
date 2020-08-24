import tabBuilder from './tabs';

const createPage = () => {
  // creating elements

  const root = document.getElementById('content');
  const mainContainer = document.createElement('div');
  const headline = document.createElement('h1');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('p');
  tabBuilder(root);
  // adding elements to HTML
  img.src = 'https://libreshot.com/wp-content/uploads/2016/03/coffee-beans-1.jpg';
  imgContainer.appendChild(img);
  headline.innerHTML = 'Speciallity coffee beans for sale';
  info.innerHTML = 'This coffee tastes like heaven';
  mainContainer.appendChild(headline);
  mainContainer.appendChild(imgContainer);
  mainContainer.appendChild(info);
  root.appendChild(mainContainer);
};

export default createPage;