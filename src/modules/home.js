import { createPage } from './domCreation';
import { mainContainer } from './sharedHTMLElements';

const home = () => {
  mainContainer.innerHTML = '';
  createPage();
};

export default home;
