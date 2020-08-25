import { createPage, mainContainer } from './load';
import tabBuilder from './tabs';

const home = () => {
  createPage();
  mainContainer.innerHTML = '';
  tabBuilder(mainContainer);
};

export default home;
