import { createPage } from './domCreation';
import { mainContainer } from './sharedHTMLElements';
import eventListenerCreation from './eventListeners';

const home = () => {
  mainContainer.innerHTML = '';
  eventListenerCreation();
  createPage();
};

export default home;
