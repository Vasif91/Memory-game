import "./styles.css";

var display = document.querySelector(".root");
const cards = [
  {
    name: "coffee",
    src: "https://pixy.org/src/77/thumbs350/773567.jpg"
  },
  {
    name: "earth",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQWBp1R_2fQkDr6vgCUNxCK46T9pzakntTA&usqp=CAU"
  },
  {
    name: "hamburger",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZC9TdgAmYcmixuW9vG9A-Z2FElbtYL0aRA&usqp=CAU"
  },
  {
    name: "news",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_hIdy4STmsmIqoCCwa2bDfSElJnG62hX0w&usqp=CAU"
  },
  {
    name: "apple",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmh_tTf48uDD5u7u0tzqCjq3aq47hyayCifQ&usqp=CAU"
  },
  {
    name: "pizza",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KGigSkqr3r7uBDflCoR7nzhyWCxz6Kqv5g&usqp=CAU"
  }
];
let list = new Array();
for (let i = 0; i < 50; i++) {
  let m = Math.floor(Math.random() * 6);
  let f = list.filter((e) => {
    return e == m;
  });
  if (f.length < 2) {
    list.push(m);
  }
}

var openCardId = new Array();
var openedCardsId = [115];
var openCard = new Array();
function control() {
  let kart = document.querySelectorAll("img");
  let One = openCardId[0];
  let Two = openCardId[1];
  if (openCard[0] == openCard[1]) {
    openedCardsId.push(parseInt(openCardId[0]));
    openedCardsId.push(parseInt(openCardId[1]));
    kart[One].setAttribute(
      "src",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////+9/D64sn76df63sH3zJz87d798eT++fP++/f99Ov41a798uf517T64cb76NRxTuJgAAAAlklEQVR4nO3XQQqDMBRFUROtrbXq/ncrdAOl8ONXOWeQ4eMSMknXAQAAEGl4ZBcAAAAAAAAAAAAAAAAAAAAAXN44Zhe0Vmt2ATdTn9kFAL/1r7itqY/bivOe4rbKHLd1UoHvgX/c+eI/33NJrmhpzQ4AAI61leyC1krgJwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAO0bIAKoIeFmuAAAAAElFTkSuQmCC"
    );
    kart[Two].setAttribute(
      "src",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////+9/D64sn76df63sH3zJz87d798eT++fP++/f99Ov41a798uf517T64cb76NRxTuJgAAAAlklEQVR4nO3XQQqDMBRFUROtrbXq/ncrdAOl8ONXOWeQ4eMSMknXAQAAEGl4ZBcAAAAAAAAAAAAAAAAAAAAAXN44Zhe0Vmt2ATdTn9kFAL/1r7itqY/bivOe4rbKHLd1UoHvgX/c+eI/33NJrmhpzQ4AAI61leyC1krgJwoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAO0bIAKoIeFmuAAAAAElFTkSuQmCC"
    );
  } else {
    kart[One].setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkM8Qf4JT2JEDUdZnyx-2-1TX_0JqU7XqPQ&usqp=CAU"
    );
    kart[Two].setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkM8Qf4JT2JEDUdZnyx-2-1TX_0JqU7XqPQ&usqp=CAU"
    );
  }
  openCardId = [];
  openCard = [];
  bool = true;
}

let showOpen = new Array();
let bool = true;
function showCard() {
  let cardID = this.getAttribute("data-id");
  if (
    !openedCardsId.includes(parseInt(cardID)) &&
    !showOpen.includes(cardID) &&
    bool
  ) {
    showOpen.push(cardID);
    this.setAttribute("src", cards[list[cardID]].src);
    openCard.push(cards[list[cardID]].name);
    openCardId.push(cardID);
    if (openCard.length == 2) {
      bool = false;
      setTimeout(control, 500);
      showOpen = [];
    }
  }
}

function openCards() {
  for (let i = 0; i < 12; i++) {
    var card = document.createElement("img");
    card.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkM8Qf4JT2JEDUdZnyx-2-1TX_0JqU7XqPQ&usqp=CAU"
    );
    card.setAttribute("data-id", i);
    card.addEventListener("click", showCard);
    display.appendChild(card);
  }
}

openCards();
