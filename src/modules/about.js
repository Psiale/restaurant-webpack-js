
import {
  root, mainContainer, headlineContainer, headline,
} from './sharedHTMLElements';
import eventListenerCreation from './eventListeners';


const aboutContainer = document.createElement('div');
const aboutParagraph = document.createElement('p');
const shippingParagraph = document.createElement('p');


const addingAttributes = () => {
  aboutContainer.classList.add('about-container');
  aboutParagraph.classList.add('about-paragraph');
  shippingParagraph.classList.add('about-paragraph');
  shippingParagraph.id = 'shipping-paragraph';
};

const renderAbout = () => {
  mainContainer.innerHTML = '';
  mainContainer.classList.remove('main-background');
  mainContainer.classList.add('about-background');
  headline.innerHTML = 'Made with love';
  eventListenerCreation();
  aboutParagraph.innerHTML = 'We are a speciality coffee shop focused on selling the greatest mexican coffee beans.';
  shippingParagraph.innerHTML = 'Check our products and shipping offers';
  addingAttributes();

  aboutContainer.appendChild(aboutParagraph);
  aboutContainer.appendChild(shippingParagraph);
  mainContainer.appendChild(headlineContainer);
  mainContainer.appendChild(aboutContainer);
  root.appendChild(mainContainer);
//   I need to add some text in here.
};


export default renderAbout;