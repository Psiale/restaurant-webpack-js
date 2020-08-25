import { createPage } from './load';
import './index.css';
import about from './about';
import home from './home';

createPage();
const aboutTab = document.getElementById('About');
const homeTab = document.getElementById('Home');
aboutTab.addEventListener('click', about, false);
homeTab.addEventListener('click', home, false);