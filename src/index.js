import { createPage, createTabs } from './modules/domCreation';
import './css/index.css';
import './css/fonts.css';
import home from './modules/home';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

createTabs();
createPage('Historia del Café Mexicano');
home();
