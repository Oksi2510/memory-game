import ElementHtml from "../utils/create-element.js";

export default class NewGameBtn extends ElementHtml {
  constructor() {
    super("button", ["new-game", "btn"], "New Game");
  }
  newGame(stepCounter, timer) {
    stepCounter.removeSteps();
    timer.resetTimer();
    timer.startTimer();
  }
}
