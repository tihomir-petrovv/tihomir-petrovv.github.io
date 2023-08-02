const sortNames = () => {
  let names = document.getElementById("shoeItems");
  let li = Array.from(names.children);
  let select = document.getElementById("selectOption");
  let ar = [];
  for (let i of li) {
    const last = i.lastElementChild;
    const x = last.textContent;
    i.setAttribute("data-price", x);
    ar.push(i);
  }
  select.onchange = sortingValue;

  function sortingValue() {
    if (this.value === "value1") {
      while (names.firstChild) {
        names.removeChild(names.firstChild);
      }
      names.append(...ar);
    }
    if (this.value === "value2") {
      SortElem(names, li, true);
    }
    else if (this.value === "value3") {
      SortElem(names, li, false);
    }
  }
  function SortElem(field, li, asc) {
    let dm, sortlist;
    dm = asc ? 1 : -1;
    sortlist = li.sort((a, b) => {
      const ax = a.getAttribute("data-price");
      const bx = b.getAttribute("data-price");
      return ax > bx ? 1 * dm : -1 * dm;
    });
    while (field.firstChild) {
      field.removeChild(field.firstChild);
    }
    field.append(...sortlist);
  }
};

export default sortNames;
