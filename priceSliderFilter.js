import { ELEMENT } from "./constants.js";
import {
  appendChild,
  createElement,
  setAttribute,
  textContent,
} from "./source.js";
const filterSlider = () => {
  const brandClicked = document.getElementById("filter1");
  const priceClicked = document.getElementById("filter2");
  const sliderValue = document.getElementById("priceSlider");
  const showSliderPrice = document.getElementById("showSliderPrice");
  const shoesPriceTag = document.querySelectorAll(".priceTag");
  const shoeSectionAll = document.querySelectorAll(".shoeSections");
  const nikeBrand = document.getElementById("nikeCheckBox");
  const adidasBrand = document.getElementById("adidasCheckBox");
  const pumaBrand = document.getElementById("pumaCheckBox");
  const shoesBrandName = document.querySelectorAll(".shoeBrandName");
  let brandNames = [];
  shoesBrandName.forEach((divElement) => {
    const divTextContent = divElement.textContent;
    let splittingTextName = divTextContent.split(" ");
    brandNames.push(splittingTextName[0]);
  });
  let brandPrice = [];
  shoesPriceTag.forEach((divElement) => {
    const divTextContent = divElement.textContent;
    divTextContent.trim();
    let splittingTextName = divTextContent.split("$");
    brandPrice.push(splittingTextName[1]);
  });
      sliderValue.oninput = () => {
        let currentValue = sliderValue.value;
        showSliderPrice.textContent = `${currentValue}$ BGN`;
        for (let i = 0; i < brandPrice.length; i++) {
          const shoePriceValue = brandPrice[i];
          for (let p = 0; p < brandNames.length; p++) {
            const brandOfShoes = brandNames[i];
            const showChecked =
              (brandOfShoes === "Nike" &&
                nikeBrand.checked &&
                currentValue > parseFloat(shoePriceValue)) ||
              (brandOfShoes === "Adidas" &&
                adidasBrand.checked &&
                currentValue > parseFloat(shoePriceValue)) ||
              (brandOfShoes === "Puma" &&
                pumaBrand.checked &&
                currentValue > parseFloat(shoePriceValue));
            shoeSectionAll[i].style.display = showChecked ? "block" : "none";
          }
        }
        if (!nikeBrand.checked && !adidasBrand.checked && !pumaBrand.checked) {
          let currentValue = sliderValue.value;
          showSliderPrice.textContent = `${currentValue}$ BGN`;
          for (let i = 0; i < shoesPriceTag.length; i++) {
            const shoePriceValue = brandPrice[i];
            if (currentValue > parseFloat(shoePriceValue)) {
              shoeSectionAll[i].style.display = "block";
            } else {
              shoeSectionAll[i].style.display = "none";
            }
          }
        }
      };
};

export default filterSlider;
