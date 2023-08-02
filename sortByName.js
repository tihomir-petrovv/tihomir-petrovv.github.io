const sortNamesByNames = () => {
    let names = document.getElementById("shoeItems");
    let li = Array.from(names.children);
    let select = document.getElementById("selectOptionByName");
    let ar = [];
    for (let i of li) {
      const last = i.firstChild;
      const next = last.nextSibling;
      const x = next.textContent.trim();
      const y = x.split(" ")
      const w = []
      w.push(y[0])
      i.setAttribute("data-value", w);
      ar.push(i);
    }
    select.onchange = sortingValue;
  
    function sortingValue() {
      if (this.value === "value4") {
        while (names.firstChild) {
          names.removeChild(names.firstChild);
        }
        names.append(...ar);
      }
      if (this.value === "value5") {
        SortElem(names, li, true);
      }
      else if (this.value === "value6") {
        SortElem(names, li, false);
      }
    }
    function SortElem(field, li , asc) {
        let dm, sortList;
        dm = asc ? 1 : -1;
        sortList = li.sort((a, b) => {
          const ax = a.getAttribute("data-value");
          const bx = b.getAttribute("data-value");
          return ax > bx ? 1 * dm : -1 * dm;
        });
      while (field.firstChild) {
        field.removeChild(field.firstChild);
      }
      field.append(...sortList);
    }
  };
  
  export default sortNamesByNames;
  