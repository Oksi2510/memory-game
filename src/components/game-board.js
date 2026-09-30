import ElementHtml from "../utils/create-element.js";
import cardValues from "../data/card-values.js";

export default class GameBoard extends ElementHtml {
  constructor() {
    super("div", "game-board", "GameBoard");
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
  generateBoard(parent, card) {
    //todo берёт перемешанный массив → создаёт 16 Card → добавляет их в parent
  }
}
