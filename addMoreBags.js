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

const addMoreBags = () => {
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
  setAttribute(myShoeImage[0], "src", "images/nikebag1.png");
  setAttribute(myShoeImage[1], "src", "images/nikebag2.png");
  setAttribute(myShoeImage[2], "src", "images/nikebag3.png");
  setAttribute(myShoeImage[3], "src", "images/adidasbag1.png");
  setAttribute(myShoeImage[4], "src", "images/adidasbag2.png");
  setAttribute(myShoeImage[5], "src", "images/adidasbag3.png");
  textContent(shoeTitle[0], "Nike Elemental");
  textContent(shoeTitle[1], "Nike Air");
  textContent(shoeTitle[2], "Nike Heritage");
  textContent(shoeTitle[3], "Adidas Tiro");
  textContent(shoeTitle[4], "Adidas Linear");
  textContent(shoeTitle[5], "Adidas Daily");
  textContent(shoePrices[0], "$30,99");
  textContent(shoePrices[1], "$50,99");
  textContent(shoePrices[2], "$20,99");
  textContent(shoePrices[3], "$70,99");
  textContent(shoePrices[4], "$89,99");
  textContent(shoePrices[5], "$49,99");
  for (let i = 0; i < shoeSections.length; i++) {
    appendChild(shoeItems, shoeSections[i]);
  }
  textContent(visibleItems, `Showing: ${showAllItems.length} out of ${showAllItems.length}`)
};

export default addMoreBags;
