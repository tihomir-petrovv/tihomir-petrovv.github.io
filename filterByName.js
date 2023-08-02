import { ELEMENT } from "./constants.js";
import {
  appendChild,
  createElement,
  setAttribute,
  textContent,
} from "./source.js";
import filterNikePage from "./brandFilter.js";
import filterSlider from "./priceSliderFilter.js";

let countPressedFiltersforBrand = 0;
const filterSortOptionByName = () =>{
  const filterBrandByNames = document.getElementById("filter1");
  countPressedFiltersforBrand += 1;
  if (countPressedFiltersforBrand % 2) {
    const checkBoxNike = createElement(ELEMENT.INPUT);
    const mainFilterOptions = createElement(ELEMENT.DIV);
    setAttribute(mainFilterOptions, "id", "mainFilterOption")
    const mainFilterNike = createElement(ELEMENT.DIV);
    setAttribute(mainFilterNike, "class", "brandShowHide");
    const mainFilterAdidas = createElement(ELEMENT.DIV);
    setAttribute(mainFilterAdidas, "class", "brandShowHide");
    const mainFilterPuma = createElement(ELEMENT.DIV);
    setAttribute(mainFilterPuma, "class", "brandShowHide");
    checkBoxNike.type = "checkbox";
    setAttribute(checkBoxNike, "id", "nikeCheckBox");
    setAttribute(checkBoxNike, "value", "option1");
    const labelCheckBoxNike = createElement(ELEMENT.LABEL);
    setAttribute(labelCheckBoxNike, "for", "nikeCheckBox");
    setAttribute(labelCheckBoxNike, "class", "checkBox");
    setAttribute(labelCheckBoxNike, "id", "nikeCheckBox");
    textContent(labelCheckBoxNike, "Nike");
    appendChild(mainFilterNike, checkBoxNike);
    appendChild(mainFilterNike, labelCheckBoxNike);
    appendChild(filterBrandByNames, mainFilterNike);
    const checkBoxAdidas = createElement(ELEMENT.INPUT);
    checkBoxAdidas.type = "checkbox";
    setAttribute(checkBoxAdidas, "id", "adidasCheckBox");
    setAttribute(checkBoxAdidas, "value", "option2");
    const labelCheckBoxAdidas = createElement(ELEMENT.LABEL);
    setAttribute(labelCheckBoxAdidas, "for", "adidasCheckBox");
    setAttribute(labelCheckBoxAdidas, "class", "checkBox");
    textContent(labelCheckBoxAdidas, "Adidas");
    appendChild(mainFilterAdidas, checkBoxAdidas);
    appendChild(mainFilterAdidas, labelCheckBoxAdidas);
    appendChild(filterBrandByNames, mainFilterAdidas);
    const checkBoxPuma = createElement(ELEMENT.INPUT);
    checkBoxPuma.type = "checkbox";
    setAttribute(checkBoxPuma, "id", "pumaCheckBox");
    setAttribute(checkBoxPuma, "value", "option3");
    const labelCheckBoxPuma = createElement(ELEMENT.LABEL);
    setAttribute(labelCheckBoxPuma, "for", "pumaCheckBox");
    setAttribute(labelCheckBoxPuma, "class", "checkBox");
    textContent(labelCheckBoxPuma, "Puma");
    appendChild(mainFilterPuma, checkBoxPuma);
    appendChild(mainFilterPuma, labelCheckBoxPuma);
    appendChild(filterBrandByNames, mainFilterPuma);
    appendChild(mainFilterOptions, mainFilterNike)
    appendChild(mainFilterOptions, mainFilterAdidas)
    appendChild(mainFilterOptions, mainFilterPuma)
    appendChild(filterBrandByNames, mainFilterOptions);
    filterNikePage();
  } 
  else if(countPressedFiltersforBrand!=0){
    const allFiltersByBrand = document.getElementById("mainFilterOption");
    allFiltersByBrand.remove()    
  }

}

export default filterSortOptionByName;