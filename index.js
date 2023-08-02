import { ELEMENT, ROOT_ID , NAVIGATION_LINK} from "./constants.js";
import {
  getElementById,
  addClass,
  setAttribute,
  textContent,
  createElement,
  addEventListener,
  appendChild,
} from "./source.js";
import shoesPage from './Shoes.js';
import bagsPage from './bags.js';

const renderMainContent = (navigationItem, mainContentContainer) => {
  mainContentContainer.innerHTML = null;
  navigationItem.renderContent(mainContentContainer);
};
const navigationItems = [
  {
    title: 'Shoes',
    renderContent: shoesPage,
  },
  {
    title: 'SportBags',
    renderContent: bagsPage,
  },
];
const logo = createElement(ELEMENT.IMG);
setAttribute(logo, 'src', 'Images/logo.png');
setAttribute(logo, 'id', 'storeLogo')
const root = getElementById(ROOT_ID);
const navigation = createElement(ELEMENT.NAV);
setAttribute(navigation, 'id', 'navigation')
const navigationList = createElement(ELEMENT.UL);
setAttribute(navigationList, 'id', 'navBar')
navigationList.appendChild(logo)
const mainContentContainer = createElement(ELEMENT.DIV);
setAttribute(mainContentContainer, "id", "mainContent")

const renderNavigationItem = (navigationItem, navigationList, mainContentContainer) => {
    const navigationLink = createElement(ELEMENT.DIV);
    textContent(navigationLink, navigationItem.title);
    addClass(NAVIGATION_LINK, navigationLink);
    appendChild(navigationList, navigationLink);
    addEventListener(navigationLink, 'click', () => renderMainContent(navigationItem, mainContentContainer));
};

root.appendChild(navigation);
navigation.appendChild(navigationList);
root.appendChild(mainContentContainer);
navigationItems.forEach((navigationItem) => renderNavigationItem(navigationItem, navigationList, mainContentContainer));

shoesPage(mainContentContainer)
