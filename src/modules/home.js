import { createPage } from './domCreation';
import { mainContainer } from './sharedHTMLElements';
import eventListenerCreation from './eventListeners';

const home = () => {
  mainContainer.innerHTML = '';
  mainContainer.classList.add('main-background');
  mainContainer.classList.remove('about-background');
  eventListenerCreation();
  createPage('Historia del Café Mexicano');
};

export default home;
