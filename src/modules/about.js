
import {
  root, mainContainer, headlineContainer, headline, subheadline,
} from './sharedHTMLElements';
import eventListenerCreation from './eventListeners';

const aboutContainer = document.createElement('div');
const aboutParagraph = document.createElement('p');
const shippingParagraph = document.createElement('p');
const slContainer = document.createElement('div');

const socialMediaIcons = ['fa-linkedin', 'fa-github-square'];
const socialMediaLinks = ['https://www.linkedin.com/in/alexis-sanchez-dev/', 'https://github.com/Psiale'];


const addingAttributes = () => {
  aboutContainer.classList.add('about-container');
  aboutContainer.classList.add('text-focus-in');
  aboutParagraph.classList.add('about-paragraph');
  shippingParagraph.classList.add('about-paragraph');
  slContainer.classList.add('sl-container');
  shippingParagraph.id = 'shipping-paragraph';
};

const childContent = (anchor, child, cla, link) => {
  // child.id = textContent;
  child.classList.add('icon-child');
  child.classList.add('fab');
  child.classList.add(cla);
  anchor.href = link;
};


const childMaker = (parent, numOfChilds) => {
  for (let i = 0; i < numOfChilds; i += 1) {
    const child = document.createElement('i');
    const childContainer = document.createElement('a');
    childContainer.classList.add('icon-container');
    childContent(childContainer, child, socialMediaIcons[i], socialMediaLinks[i]);
    childContainer.appendChild(child);
    parent.appendChild(childContainer);
  }
};

const renderAbout = () => {
  mainContainer.innerHTML = '';
  mainContainer.classList.remove('main-background');
  mainContainer.classList.add('about-background');
  headline.innerHTML = 'Made with love';
  subheadline.innerHTML = "Hi! I'm Alexis, a fullstack dev / coffee lover";
  headlineContainer.appendChild(subheadline);
  eventListenerCreation();
  shippingParagraph.innerHTML = 'Reach me at ';
  addingAttributes();

  aboutContainer.appendChild(aboutParagraph);
  aboutContainer.appendChild(shippingParagraph);
  if (slContainer.childNodes.length === 0) {
    childMaker(slContainer, 2);
  }
  aboutContainer.appendChild(slContainer);
  mainContainer.appendChild(headlineContainer);
  mainContainer.appendChild(aboutContainer);
  root.appendChild(mainContainer);
//   I need to add some text in here.
};


export default renderAbout;