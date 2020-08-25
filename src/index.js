import { createPage } from './load';
import './index.css';
import about from './about';

createPage();
const aboutTab = document.getElementById('About');

aboutTab.addEventListener('click', about, false);