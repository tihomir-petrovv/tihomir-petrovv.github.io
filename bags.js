import sort from "./sort.js";
import filterSortOptionByName from './filterByName.js'
import filterSortOptionByPrice from './filterByPrice.js'
import { ELEMENT} from "./constants.js";
import {
  setAttribute,
  textContent,
  createElement,
  appendChild,
} from "./source.js";
import filterSlider from "./priceSliderFilter.js";
import addMoreBags from "./addMoreBags.js";
const bagsPage = (parentElement) => {
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
  setAttribute(myShoeImage[0], "src", "images/nikebag1.png");
  setAttribute(myShoeImage[1], "src", "images/nikebag2.png");
  setAttribute(myShoeImage[2], "src", "images/nikebag3.png");
  setAttribute(myShoeImage[3], "src", "images/adidasbag1.png");
  setAttribute(myShoeImage[4], "src", "images/adidasbag2.png");
  setAttribute(myShoeImage[5], "src", "images/adidasbag3.png");
  setAttribute(myShoeImage[6], "src", "images/pumabag1.png");
  setAttribute(myShoeImage[7], "src", "images/pumabag2.png");
  setAttribute(myShoeImage[8], "src", "images/pumabag3.png");
  textContent(shoeTitle[0], "Nike Elemental");
  textContent(shoeTitle[1], "Nike Air");
  textContent(shoeTitle[2], "Nike Heritage");
  textContent(shoeTitle[3], "Adidas Tiro");
  textContent(shoeTitle[4], "Adidas Linear");
  textContent(shoeTitle[5], "Adidas Daily");
  textContent(shoeTitle[6], "Puma Beta BP");
  textContent(shoeTitle[7], "Puma Buzz");
  textContent(shoeTitle[8], "Puma Pioneer");
  textContent(shoePrices[0], "$30,99");
  textContent(shoePrices[1], "$50,99");
  textContent(shoePrices[2], "$20,99");
  textContent(shoePrices[3], "$70,99");
  textContent(shoePrices[4], "$89,99");
  textContent(shoePrices[5], "$49,99");
  textContent(shoePrices[6], "$89,95");
  textContent(shoePrices[7], "$94,99");
  textContent(shoePrices[8], "$67,99");
  sortBy.addEventListener('click', function(){
    sort();
  })
  buttonAddElements.addEventListener("click", function () {
    addMoreBags();
    buttonAddElements.disabled = true
  });
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

export default bagsPage;
