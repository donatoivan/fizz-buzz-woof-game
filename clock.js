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
    const clockEl = document.getElementById("clock");

    if (game.gameRunning === false) {
      clockEl.style.display = "none";
    } else {
      clockEl.style.display = "block";
      clockEl.innerHTML = this.countdownValue;
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
