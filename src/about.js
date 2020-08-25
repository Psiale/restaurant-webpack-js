import { createPage, mainContainer, headlineContainer} from './load';
import tabBuilder from './tabs';

const root = document.getElementById('content');

const renderAbout = () => {
  createPage();
  root.innerHTML = '';
  mainContainer.innerHTML = '';
  tabBuilder(mainContainer);
  mainContainer.appendChild(headlineContainer);
  root.appendChild(mainContainer);
};


export default renderAbout;