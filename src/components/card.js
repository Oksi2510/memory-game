import ElementHtml from "../utils/create-element.js";

export default class Card extends ElementHtml {
  constructor(content) {
    super("div", "card");
    this.cardFront = new ElementHtml("div", "card-front");
    this.cardBack = new ElementHtml("div", "card-back", content);
    this.appendChildNode(this.cardFront);
    this.appendChildNode(this.cardBack);
  }
}
