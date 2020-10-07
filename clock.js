class Clock {
  timeoutId;
  timerValue = 1000;
  countdownId;
  countdownValue = 7;
  countdownLevel = 7;
  noTime;

  constructor(elements) {
    this.elements = elements;
  }

  timer() {
    this.timeoutId = setInterval(() => {
      this.checkTimer();
      this.countdownValue -= 1;
      this.renderClock();
    }, this.timerValue);
  }

  checkTimer() {
    if (this.countdownValue === 1) {
      this.resetTimer();
      game.gameRunning = false;
      this.noTime = true;
      game.renderCurrentValue();
    }
  }

  renderClock() {
    if (game.gameRunning === false) {
      this.elements.clockEl.style.display = "none";
    } else {
      this.elements.clockEl.style.display = "block";
      this.elements.clockEl.textContent = this.countdownValue;
    }
  }

  resetTimer() {
    clearInterval(this.timeoutId);
    this.countdownValue = this.countdownLevel;
  }

  upgradeCountdownLevel() {
    this.countdownLevel -= 1;
  }
}

const clock = new Clock(elementObj());
