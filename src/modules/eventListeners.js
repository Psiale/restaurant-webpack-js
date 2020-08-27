import { createTabs } from './domCreation';
import renderAbout from './about';
import home from './home';
import renderProduct from './products';

const eventListenerCreation = () => {
  createTabs();
  const aboutTab = document.getElementById('About');
  const homeTab = document.getElementById('Home');
  const productsTab = document.getElementById('Product');
  aboutTab.addEventListener('click', renderAbout, false);
  homeTab.addEventListener('click', home, false);
  productsTab.addEventListener('click', renderProduct, false);
};

export default eventListenerCreation;