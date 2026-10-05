import ElementHtml from "../utils/create-element.js";

export default class VictoryModal extends ElementHtml {
  constructor(stepsCounter, timer) {
    super("div", "victory-wrapper");
    this.stepsCounter = stepsCounter;
    this.timer = timer;
    this.content = new ElementHtml(
      "div",
      "victory-content",
      "Congratulation! You Win!",
    );
    this.closeBtn = new ElementHtml(
      "button",
      ["btn", "victory-content"],
      "close",
    );
    this.victoryBlock = new ElementHtml("div", "victory-block");
    this.appendChildNode(this.victoryBlock);
    this.victoryBlock.appendChildNode(this.content);
    this.victoryBlock.appendChildNode(this.stepsCounter);
    this.victoryBlock.appendChildNode(this.timer);
    this.victoryBlock.appendChildNode(this.closeBtn);
  }
}
