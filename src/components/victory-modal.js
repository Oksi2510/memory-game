import ElementHtml from "../utils/create-element.js";
import NewGameBtn from "./new-game-btn.js";

export default class VictoryModal extends ElementHtml {
  constructor(stepsCounter, timer, onNewGame) {
    super("div", "victory-wrapper");
    this.stepsCounter = stepsCounter.getHtmlElement().textContent;
    this.timer = timer.getHtmlElement().textContent;
    this.content = new ElementHtml(
      "div",
      "victory-content",
      `YOU WIN ${this.stepsCounter}, time: ${this.timer}`,
    );
    this.newGameBtn = new NewGameBtn(onNewGame);
    this.victoryBlock = new ElementHtml("div", "victory-block");
    this.appendChildNode(this.victoryBlock);
    this.victoryBlock.appendChildNode(this.content);
    this.victoryBlock.appendChildNode(this.newGameBtn);
  }
}
