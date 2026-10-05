import ElementHtml from "../utils/create-element.js";

export default class NewGameBtn extends ElementHtml {
  constructor(onNewGame) {
    super("button", ["new-game", "btn"], "New Game");
    this.addEventListener("click", onNewGame);
  }
  newGame(stepCounter, timer) {
    stepCounter.removeSteps();
    timer.resetTimer();
    timer.startTimer();
  }
}
