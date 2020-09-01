import { createPage } from './domCreation';
import { mainContainer } from './sharedHTMLElements';
import eventListenerCreation from './eventListeners';

const home = () => {
  mainContainer.innerHTML = '';
  eventListenerCreation();
  createPage('Historia del Café Mexicano');
};

export default home;
