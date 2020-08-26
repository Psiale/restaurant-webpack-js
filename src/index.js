import { createPage } from './modules/domCreation';
import './css/index.css';
import renderAbout from './modules/about';
import home from './modules/home';
import renderProduct from './modules/products';

createPage();
const aboutTab = document.getElementById('About');
const homeTab = document.getElementById('Home');
const productsTab = document.getElementById('Product');
aboutTab.addEventListener('click', renderAbout, false);
homeTab.addEventListener('click', home, false);
productsTab.addEventListener('click', renderProduct, false);