class Clock {
  timeoutId;
  timerValue = 1000;
  countdownId;
  countdownValue = 7;
  countdownLevel = 7;
  noTime;

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
    const elements = elementObj();

    if (game.gameRunning === false) {
      elements.clockEl.style.display = "none";
    } else {
      elements.clockEl.style.display = "block";
      elements.clockEl.innerHTML = this.countdownValue;
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

const clock = new Clock();
