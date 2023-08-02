import sortNames from "./sortByPrice.js";
import sortNamesByNames from "./sortByName.js";
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

let countPressedSort = 0  
const showSortingOptions = () => {
    countPressedSort+=1
    if(countPressedSort%2){
    const optionSelectByPrice = document.createElement(ELEMENT.SELECT)
    const optionNamesByPrice = []
    for(let i=0; i<3; i++){
      const optionS = document.createElement(ELEMENT.OPTION)
      setAttribute(optionS, "value", `value${i + 1}`)
      appendChild(optionSelectByPrice, optionS)
      optionNamesByPrice.push(optionS)
    }
    textContent(optionNamesByPrice[0], "Price")
    textContent(optionNamesByPrice[1], "Low to high")
    textContent(optionNamesByPrice[2], "High to low")
    setAttribute(optionSelectByPrice, "id", "selectOption")
    appendChild(sortPagePlace, optionSelectByPrice)
    const optionSelect = document.createElement(ELEMENT.SELECT)
    const optionNames = []
    for(let i=3; i<6; i++){
      const optionS = document.createElement(ELEMENT.OPTION)
      setAttribute(optionS, "value", `value${i + 1}`)
      appendChild(optionSelect, optionS)
      optionNames.push(optionS)
    }
    textContent(optionNames[0], "Name")
    textContent(optionNames[1], "Alphabetical")
    textContent(optionNames[2], "Unalphabetized")
    setAttribute(optionSelect, "id", "selectOptionByName")
    appendChild(sortPagePlace, optionSelect)
    sortNamesByNames()
    sortNames()
  }else {
    const selectOption = document.getElementById("selectOption")
    const selectOptionByName = document.getElementById("selectOptionByName")
    selectOption.remove();
    selectOptionByName.remove();
  }
  
}
export default showSortingOptions;