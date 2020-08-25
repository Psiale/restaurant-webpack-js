import { createPage, mainContainer } from './load';
import tabBuilder from './tabs';

const home = () => {
  mainContainer.innerHTML = '';
  createPage();
};

export default home;
