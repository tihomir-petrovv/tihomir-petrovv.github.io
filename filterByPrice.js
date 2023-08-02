import { ELEMENT } from "./constants.js";
import filterSlider from "./priceSliderFilter.js";
import {
  appendChild,
  createElement,
  setAttribute,
  textContent,
} from "./source.js";

let countPressedFiltersforPrice = 0;
const filterSortOptionByPrice = () => {
  const filterBrandByNames = document.getElementById("filter1");
  const filterBrandByPrice = document.getElementById("filter2");
  const shoeSectionAll = document.querySelectorAll(".shoeSections");
  const shoesPriceTag = document.querySelectorAll(".priceTag");
  countPressedFiltersforPrice += 1;
  if (countPressedFiltersforPrice % 2) {
    const sliderPrice = createElement(ELEMENT.INPUT);
    const showSliderPrice = createElement(ELEMENT.DIV);
    setAttribute(showSliderPrice, "id", "showSliderPrice");
    sliderPrice.type = "range";
    setAttribute(sliderPrice, "id", "priceSlider");
    setAttribute(sliderPrice, "min", "0");
    setAttribute(sliderPrice, "max", "250");
    setAttribute(sliderPrice, "step", "5");
    appendChild(filterBrandByPrice, sliderPrice);
    appendChild(filterBrandByPrice, showSliderPrice);
    let brandPrice = [];
  shoesPriceTag.forEach((divElement) => {
    const divTextContent = divElement.textContent;
    divTextContent.trim();
    let splittingTextName = divTextContent.split("$");
    brandPrice.push(splittingTextName[1]);
  });
    sliderPrice.oninput = function () {
        let currentValue = sliderPrice.value;
        showSliderPrice.textContent = `${currentValue}$ BGN`;
        for (let i = 0; i < shoesPriceTag.length; i++) {
          const shoePriceValue = brandPrice[i];
          if (currentValue > parseFloat(shoePriceValue)) {
            shoeSectionAll[i].style.display = "block";
          } else {
            shoeSectionAll[i].style.display = "none";
          }
        }
      };
    // const sliderValue = document.getElementById("priceSlider");
    // const shoesPriceTag = document.querySelectorAll(".priceTag");
    // const shoeSectionAll = document.querySelectorAll(".shoeSections");
    // const nikeBrand = document.getElementById("nikeCheckBox");
    // const adidasBrand = document.getElementById("adidasCheckBox");
    // const pumaBrand = document.getElementById("pumaCheckBox");
    // const shoesBrandName = document.querySelectorAll(".shoeBrandName");
    // let brandNames = [];
    // shoesBrandName.forEach((divElement) => {
    //   const divTextContent = divElement.textContent;
    //   let splittingTextName = divTextContent.split(" ");
    //   brandNames.push(splittingTextName[0]);
    // });
    // let brandPrice = [];
    // shoesPriceTag.forEach((divElement) => {
    //   const divTextContent = divElement.textContent;
    //   divTextContent.trim();
    //   let splittingTextName = divTextContent.split("$");
    //   brandPrice.push(splittingTextName[1]);
    // });
    // sliderValue.oninput = () => {
    //   let currentValue = sliderValue.value;
    //   showSliderPrice.textContent = `${currentValue}$ BGN`;
    //   for (let i = 0; i < brandPrice.length; i++) {
    //     const shoePriceValue = brandPrice[i];
    //     for (let p = 0; p < brandNames.length; p++) {
    //       const brandOfShoes = brandNames[i];
    //       const showChecked =
    //         (brandOfShoes === "Nike" &&
    //           nikeBrand.checked &&
    //           currentValue > parseFloat(shoePriceValue)) ||
    //         (brandOfShoes === "Adidas" &&
    //           adidasBrand.checked &&
    //           currentValue > parseFloat(shoePriceValue)) ||
    //         (brandOfShoes === "Puma" &&
    //           pumaBrand.checked &&
    //           currentValue > parseFloat(shoePriceValue));
    //       shoeSectionAll[i].style.display = showChecked ? "block" : "none";
    //     }
    //   }
    // };
  } else {
    const priceSlider = document.getElementById("priceSlider");
    const priceSliderShow = document.getElementById("showSliderPrice");
    priceSliderShow.remove();
    priceSlider.remove();
  }
};

export default filterSortOptionByPrice;
