import { createPage } from './load';
import { mainContainer } from './domCreation';

const home = () => {
  mainContainer.innerHTML = '';
  createPage();
};

export default home;
