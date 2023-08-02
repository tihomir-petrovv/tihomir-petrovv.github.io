const filterNikePage = (mainContentContainer) => {
  const shoesBrandName = document.querySelectorAll(".shoeBrandName");
  const nikeBrand = document.getElementById("nikeCheckBox");
  const adidasBrand = document.getElementById("adidasCheckBox");
  const pumaBrand = document.getElementById("pumaCheckBox");
  const shoeSectionAll = document.querySelectorAll(".shoeSections");

  let brandNames = [];
  shoesBrandName.forEach((divElement) => {
    const divTextContent = divElement.textContent;
    let splittingTextName = divTextContent.split(" ");
    brandNames.push(splittingTextName[0]);
  });

  const updateShoesDisplay = () => {
    for (let i = 0; i < brandNames.length; i++) {
      const brandOfShoes = brandNames[i];
      const shouldShow =
        (brandOfShoes === "Nike" && nikeBrand.checked) ||
        (brandOfShoes === "Adidas" && adidasBrand.checked) ||
        (brandOfShoes === "Puma" && pumaBrand.checked);

      shoeSectionAll[i].style.display = shouldShow ? "block" : "none";
      if(!nikeBrand.checked && !adidasBrand.checked && !pumaBrand.checked){
        shoeSectionAll[i].style.display = "block";
      }
    }
  };

  nikeBrand.addEventListener("click", updateShoesDisplay);
  adidasBrand.addEventListener("click", updateShoesDisplay);
  pumaBrand.addEventListener("click", updateShoesDisplay);
};

export default filterNikePage;
