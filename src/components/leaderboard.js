import ElementHtml from "../utils/create-element.js";

export default class LeaderBoardBtn extends ElementHtml {
  constructor() {
    super("button", ["leader-board", "btn"], "Leader Board");
  }
}
