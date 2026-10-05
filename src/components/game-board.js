import ElementHtml from "../utils/create-element.js";
import cardValues from "../data/card-values.js";
import Card from "../components/card.js";

export default class GameBoard extends ElementHtml {
  constructor() {
    super("div", "game-board");
  }
  newCardArr = (cardValues) => {
    if (!Array.isArray(cardValues)) return;
    const saved = localStorage.getItem("cards");
    if (saved) {
      return JSON.parse(saved);
    }
    const cardArr = [...cardValues, ...cardValues];

    for (let i = cardArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardArr[i], cardArr[j]] = [cardArr[j], cardArr[i]];
    }
    localStorage.setItem("cards", JSON.stringify(cardArr));
    return cardArr;
  };
  generateBoard(parent) {
    this.newCardArr(cardValues).forEach((cardValue) => {
      const newCard = new Card();
      newCard.setTextContent(`${cardValue}`);
      parent.append(newCard.getHtmlElement());
    });
  }
}
