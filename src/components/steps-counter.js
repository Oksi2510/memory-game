import ElementHtml from "../utils/create-element.js";

export default class StepsCounter extends ElementHtml {
  constructor() {
    super("div", "steps", "steps: 0");
    let steps = localStorage.getItem("steps");

    if (steps) {
      this.steps = JSON.parse(steps);
    } else {
      this.steps = 0;
    }
  }
  addStep() {
    this.steps += 1;
    this.setTextContent(`steps: ${this.steps}`);
    localStorage.setItem("steps", this.steps);
  }
  removeSteps() {
    this.steps = 0;
    this.setTextContent(`steps: ${this.steps}`);
    localStorage.setItem("steps", this.steps);
  }
}
