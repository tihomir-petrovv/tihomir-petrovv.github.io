import { ELEMENT } from "./constants.js";
import {
  getElementById,
  addClass,
  setAttribute,
  textContent,
  createElement,
  setSource,
  addEventListener,
  appendChild,
} from "./source.js";

const addMoreItems = () => {
  const visibleItems = document.getElementById("visibleItems")
  const showAllItems = []
  const shoeSections2 = [];

  for (let i = 0; i <= 8; i++) {
    const divForShoeSection = createElement(ELEMENT.DIV);
    setAttribute(divForShoeSection, "class", "shoeSections");
    shoeSections2.push(divForShoeSection)
    showAllItems.push(divForShoeSection);
  }
  const shoeSections = [];
  for (let i = 0; i < 6; i++) {
    const divForShoeSection = createElement(ELEMENT.DIV);
    setAttribute(divForShoeSection, "class", "shoeSections");
    shoeSections.push(divForShoeSection);
    showAllItems.push(divForShoeSection)
  }
  const myShoeImage = [];
  const shoeTitle = [];
  const shoePrices = [];
  for (let i = 0; i < shoeSections.length; i++) {
    const shoeImage = createElement(ELEMENT.IMG);
    const shoeName = createElement(ELEMENT.DIV);
    setAttribute(shoeName, "class", "shoeBrandName");
    const shoePrice = createElement(ELEMENT.DIV);
    setAttribute(shoePrice, "class", "priceTag");
    appendChild(shoeSections[i], shoeImage);
    appendChild(shoeSections[i], shoeName);
    appendChild(shoeSections[i], shoePrice);
    myShoeImage.push(shoeImage);
    shoeTitle.push(shoeName);
    shoePrices.push(shoePrice);
  }
  setAttribute(myShoeImage[0], "src", "Images/nike1.png");
  setAttribute(myShoeImage[1], "src", "Images/nike2.png");
  setAttribute(myShoeImage[2], "src", "Images/nike3.png");
  setAttribute(myShoeImage[3], "src", "Images/adidas1.png");
  setAttribute(myShoeImage[4], "src", "Images/adidas2.png");
  setAttribute(myShoeImage[5], "src", "Images/adidas3.png");
  textContent(shoeTitle[0], "Nike Zoom Fly 5");
  textContent(shoeTitle[1], "Nike Impact 3");
  textContent(shoeTitle[2], "Nike Air Max SYSTM");
  textContent(shoeTitle[3], "Adidas Duramo 10");
  textContent(shoeTitle[4], "Adidas Daily 3");
  textContent(shoeTitle[5], "Adidas Forum");
  textContent(shoePrices[0], "$110,99");
  textContent(shoePrices[1], "$150,99");
  textContent(shoePrices[2], "$120,99");
  textContent(shoePrices[3], "$100,99");
  textContent(shoePrices[4], "$119,99");
  textContent(shoePrices[5], "$129,99");
  for (let i = 0; i < shoeSections.length; i++) {
    appendChild(shoeItems, shoeSections[i]);
  }
  textContent(visibleItems, `Showing: ${showAllItems.length} out of ${showAllItems.length}`)
};

export default addMoreItems;
