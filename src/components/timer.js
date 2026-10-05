import ElementHtml from "../utils/create-element.js";

export default class Timer extends ElementHtml {
  constructor() {
    super("div", "timer", "00:00");
    this.isRunning = false;
    this.timerInterval = null;
  }

  formatTime(timeInMs) {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");
    return `${paddedMinutes}:${paddedSeconds}`;
  }

  startTimer() {
    if (this.isRunning) return;
    if (!this.startTime) {
      this.startTime = Date.now();
    }
    this.isRunning = true;
    this.timerInterval = setInterval(() => {
      const elapsedTime = Date.now() - this.startTime;
      this.setTextContent(this.formatTime(elapsedTime));
    }, 1000);
  }

  stopTimer() {
    if (!this.isRunning) return;
    this.isRunning = false;
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.stopTimer();
    this.startTime = 0;
    this.setTextContent("00:00");
  }
}
