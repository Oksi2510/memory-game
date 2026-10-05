import ElementHtml from "../utils/create-element.js";
import cardValues from "../data/card-values.js";
import Card from "../components/card.js";

export default class GameBoard extends ElementHtml {
  constructor() {
    super("div", "game-board");
    this.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      if (!card) return;
      card.classList.add("opened");
    });
  }
  newCardArr = (cardValues) => {
    if (!Array.isArray(cardValues)) return;
    const cardArr = [...cardValues, ...cardValues];

    for (let i = cardArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArr[i], cardArr[j]] = [cardArr[j], cardArr[i]];
    }
    return cardArr;
  };
  generateBoard(parent) {
    this.newCardArr(cardValues).forEach((cardValue) => {
      const newCard = new Card(cardValue);
      parent.append(newCard.getHtmlElement());
    });
  }
  removeBoard(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  updateBoard(parent) {
    this.removeBoard(parent);
    this.generateBoard(parent);
  }
}
