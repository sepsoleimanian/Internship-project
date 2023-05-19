(function tabify() {
  for (let tab of document.querySelectorAll(".tabs")) {
    // GET HEADERS & BODY
    let htabs = tab.querySelectorAll("ul.tabHead > li"),
      btabs = tab.querySelectorAll("ul.tabBody > li");
    if (htabs.length != btabs.length) {
      continue;
    }

    // CLICK TO TOGGLE TAB
    for (let i = 0; i < htabs.length; i++) {
      htabs[i].onclick = () => {
        for (let j = 0; j < htabs.length; j++) {
          if (i == j) {
            htabs[j].classList.add("open");
            btabs[j].classList.add("open");
          } else {
            htabs[j].classList.remove("open");
            btabs[j].classList.remove("open");
          }
        }
      };
    }

    // OPEN FIRST TAB BY DEFAULT - IF NONE IS OPEN
    if (tab.querySelector(".open") == null) {
      htabs[0].classList.add("open");
      btabs[0].classList.add("open");
    }
  }
})();
