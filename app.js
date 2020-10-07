class FizzBuzzWoof {
  gameRunning = true;
  index = 1;
  guess;
  currentValue = 0;
  level = 1;
  constructor(numberObj) {
    this.numberObj = numberObj;
  }
  // increments number obj index to show next value
  nextValue() {
    this.index += 1;
  }
  // assigns the current value
  assignCurrentValue() {
    this.currentValue = this.numberObj[this.index];
  }
  // print the current value of number obj to DOM
  renderCurrentValue() {
    const elements = elementObj();

    if (this.gameRunning == false) {
      messenger.gameOver();
    } else {
      elements.textArea.textContent = this.currentValue;
      elements.clockEl.textContent = clock.countdownValue;
    }
  }

  getGuess(guess) {
    this.guess = guess;
  }

  //checks whether guess is correct or not
  checkGuess() {
    if (this.guess === this.currentValue) {
      clock.resetTimer();
      clock.timer();
      this.gameRunning == true;
      this.nextValue();
    } else {
      this.gameRunning = false;
      clock.resetTimer();
    }
  }

  checkStatus() {
    if (this.index === 35 && this.gameRunning === true) {
      this.level += 1;
      this.checkLevel();
      this.index = 1;
      this.assignCurrentValue();
      messenger.toggleMessage();
      clock.upgradeCountdownLevel();
      clock.resetTimer();
    }
  }

  // checks what level player is up to
  checkLevel() {
    switch (this.level) {
      case 2:
        this.fizz();
        break;
      case 3:
        this.buzz();
        break;
      case 4:
        this.woof();
        break;
      default:
        break;
    }
  }

  fizz() {
    for (const item in this.numberObj) {
      if (Number(item) % 5 === 0) {
        this.numberObj[item] = "fizz";
      }
    }
  }

  buzz() {
    for (const item in this.numberObj) {
      if (Number(item) % 3 === 0 && Number(item) % 5 === 0) {
        this.numberObj[item] = "fizzbuzz";
      } else if (Number(item) % 3 === 0) {
        this.numberObj[item] = "buzz";
      }
    }
  }

  woof() {
    for (const item in this.numberObj) {
      if (Number(item) % 5 === 0 && Number(item) % 7 === 0) {
        this.numberObj[item] = "fizzwoof";
      } else if (Number(item) % 3 === 0 && Number(item) % 7 === 0) {
        this.numberObj[item] = "buzzwoof";
      } else if (Number(item) % 7 === 0) {
        this.numberObj[item] = "woof";
      }
    }
  }

  run() {
    messenger.messages();
    this.assignCurrentValue();
    this.renderCurrentValue();
    this.nextValue();
    this.assignCurrentValue();
  }
}

const game = new FizzBuzzWoof(countObj);

game.run();
