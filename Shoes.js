import addMoreItems from "./addMoreItems.js";
import sort from "./sort.js";
import filterSortOptionByName from './filterByName.js'
import filterSortOptionByPrice from './filterByPrice.js'
import { ELEMENT, ROOT_ID, NAVIGATION_LINK } from "./constants.js";
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
import filterSlider from "./priceSliderFilter.js";
const shoesPage = (parentElement) => {
  const mainPageItems = createElement(ELEMENT.DIV);
  setAttribute(mainPageItems, "class", "mainPageItems");
  const filter = createElement(ELEMENT.DIV);
  setAttribute(filter, "id", "renderFilter");
  const buttonAddElements = createElement(ELEMENT.BUTTON);
  setAttribute(buttonAddElements, "id", "addItems");
  textContent(buttonAddElements, "Show more items");
  const filterOptions1 = createElement(ELEMENT.DIV);
  const brandName = createElement(ELEMENT.DIV);
  const filterOptions2 = createElement(ELEMENT.DIV);
  const priceName = createElement(ELEMENT.DIV);
  setAttribute(brandName, "id", "filter1");
  setAttribute(priceName, "id", "filter2");
  textContent(filterOptions1, "Brand");
  setAttribute(filterOptions1, "class", "filterItems");
  setAttribute(filterOptions1, "id", "filterItemBrand");
  textContent(filterOptions2, "Price");
  setAttribute(filterOptions2, "class", "filterItems");
  setAttribute(filterOptions2, "id", "filterItemPrice");
  const categoryName = createElement(ELEMENT.DIV);
  setAttribute(categoryName, "id", "categoryName");
  textContent(categoryName, "Shoes");
  const visibleItems = createElement(ELEMENT.DIV);
  setAttribute(visibleItems, "id", "visibleItems");
  
  const shoeItems = createElement(ELEMENT.DIV);
  setAttribute(shoeItems, "id", "shoeItems");
  const sortPagePlace = document.createElement(ELEMENT.DIV);
  setAttribute(sortPagePlace, "id", "sortPagePlace");
  const sortBy = createElement(ELEMENT.DIV);
  textContent(sortBy, "Sort by:");
  setAttribute(sortBy, "id", "sortBy");

  const shoeSections = [];

  for (let i = 0; i <= 8; i++) {
    const divForShoeSection = createElement(ELEMENT.DIV);
    setAttribute(divForShoeSection, "class", "shoeSections");
    shoeSections.push(divForShoeSection);
  }
  textContent(visibleItems, `Showing: ${shoeSections.length} out of 15`)
  for (let c = 0; c < shoeSections.length; c++) {
    setAttribute(shoeSections[c], "id", `shoe${c + 1}`);
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
  setAttribute(myShoeImage[0], "src", "images/nike1.PNG");
  setAttribute(myShoeImage[1], "src", "images/nike2.PNG");
  setAttribute(myShoeImage[2], "src", "images/nike3.PNG");
  setAttribute(myShoeImage[3], "src", "images/adidas1.png");
  setAttribute(myShoeImage[4], "src", "images/adidas2.png");
  setAttribute(myShoeImage[5], "src", "images/adidas3.png");
  setAttribute(myShoeImage[6], "src", "images/puma1.png");
  setAttribute(myShoeImage[7], "src", "images/puma2.png");
  setAttribute(myShoeImage[8], "src", "images/puma3.png");
  textContent(shoeTitle[0], "Nike Zoom Fly 5");
  textContent(shoeTitle[1], "Nike Impact 3");
  textContent(shoeTitle[2], "Nike Air Max Systm");
  textContent(shoeTitle[3], "Adidas Duramo 10");
  textContent(shoeTitle[4], "Adidas Daily 3");
  textContent(shoeTitle[5], "Adidas Forum");
  textContent(shoeTitle[6], "Puma IGNITE Elevate ");
  textContent(shoeTitle[7], "Puma IGNITE Articulate");
  textContent(shoeTitle[8], "Puma Sneakers");
  textContent(shoePrices[0], "$110,99");
  textContent(shoePrices[1], "$150,99");
  textContent(shoePrices[2], "$120,99");
  textContent(shoePrices[3], "$100,99");
  textContent(shoePrices[4], "$209,99");
  textContent(shoePrices[5], "$129,99");
  textContent(shoePrices[6], "$189,95");
  textContent(shoePrices[7], "$199,99");
  textContent(shoePrices[8], "$152,99");
  buttonAddElements.addEventListener("click", function () {
    addMoreItems();
    buttonAddElements.disabled = true
  });
  sortBy.addEventListener('click', function(){
    sort();
  })
  filterOptions1.addEventListener("click", function(){
    filterSortOptionByName();
    filterOptions2.addEventListener("click", function(){
      filterSlider()
    })
  })
  filterOptions2.addEventListener("click", function(){
    filterSortOptionByPrice();
  })
  for (let i = 0; i < shoeSections.length; i++) {
    appendChild(shoeItems, shoeSections[i]);
  }
  const buttonSection = document.createElement(ELEMENT.DIV)
  setAttribute(buttonSection, "id", "buttonSection")
  const footerSection = document.createElement(ELEMENT.FOOTER)
  setAttribute(footerSection, "id", "footerSection")
  const linkFooterSection = document.createElement(ELEMENT.A)
  setAttribute(linkFooterSection, "href", "https://www.c4nexus.com/")
  textContent(linkFooterSection, "C4 Nexus")
  const privacyFooterSection = document.createElement(ELEMENT.DIV)
  textContent(privacyFooterSection, "Privacy")
  const contactFooterSection = document.createElement(ELEMENT.DIV)
  textContent(contactFooterSection, "Contact us")
  appendChild(brandName, filterOptions1);
  appendChild(filter, brandName);
  appendChild(priceName, filterOptions2);
  appendChild(filter, priceName);
  appendChild(footerSection, linkFooterSection)
  appendChild(footerSection, contactFooterSection)
  appendChild(footerSection, privacyFooterSection)
  appendChild(categoryName, visibleItems);
  appendChild(mainPageItems, filter);
  appendChild(mainPageItems, categoryName);
  appendChild(sortPagePlace, sortBy);
  appendChild(mainPageItems, sortPagePlace);
  appendChild(mainPageItems, shoeItems);
  appendChild(parentElement, mainPageItems);
  appendChild(buttonSection, buttonAddElements)
  appendChild(parentElement, buttonSection);
  appendChild(parentElement, footerSection)
};

export default shoesPage;
