import VictoryModal from "../components/victory-modal.js";

export default class Game {
  constructor(gameBoard, timer, stepsCounter) {
    this.gameBoard = gameBoard;
    this.timer = timer;
    this.stepsCounter = stepsCounter;
    this.openedCards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.selectedCards = [];
  }

  selectCards() {
    this.gameBoard.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      if (!card) return;
      if (card.classList.contains("opened")) return;
      if (this.selectedCards.length === 2) return;
      card.classList.add("opened");

      this.selectedCards.push(card);
      if (this.selectedCards.length === 2) {
        this.handleGame();
      }
    });
  }

  handleGame() {
    this.stepsCounter.addStep();
    let isMatched = this.compareCards(
      this.selectedCards[0],
      this.selectedCards[1],
    );
    this.handleMatch(isMatched);
  }

  compareCards(card1, card2) {
    const value1 = card1.querySelector(".card-back").textContent;
    const value2 = card2.querySelector(".card-back").textContent;
    return value1 === value2;
  }

  handleMatch(boolean) {
    if (boolean) {
      this.openedCards.push(...this.selectedCards);
      this.selectedCards = [];
      this.checkWin();
    } else this.handleMismatch();
  }

  handleMismatch() {
    setTimeout(() => {
      this.selectedCards.forEach((el) => el.classList.remove("opened"));
      this.selectedCards = [];
    }, 1000);
  }

  checkWin() {
    if (this.openedCards.length === 16) {
      let victory = new VictoryModal(this.stepsCounter, this.timer);
      document.body.append(victory.getHtmlElement());
      this.timer.stopTimer();
    }
  }
}
