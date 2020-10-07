class Messenger {
  message = true;
  messageIndex = 0;

  constructor(elements) {
    this.elements = elements;
  }

  gameOver() {
    this.message = true;
    this.elements.textArea.textContent = "Game Over";
    this.elements.correctValue.style.display = "block";
    this.elements.correctValue.textContent =
      clock.noTime === true
        ? `You ran out of time. The correct answer was '${game.currentValue}'.`
        : `You typed '${this.elements.typedValue.textContent}'. The correct answer was '${game.currentValue}'.`;

    this.elements.typedValue.style.display = "none";
    this.elements.resetButton.style.display = "flex";
    this.elements.clockEl.style.display = "none";
    clock.resetTimer();
  }

  //prints message to screen
  messages() {
    if (this.message === true) {
      this.elements.currentValueText.style.display = "none";
      this.elements.messageH1.textContent = messageArray[this.messageIndex];
      this.elements.messageH1.style.display = "block";
      this.elements.messageH2.textContent = messageArrayTwo[this.messageIndex];
      this.elements.messageH2.style.display = "block";
      this.elements.messageButton.textContent = "Click to start";
      this.elements.messageButton.style.display = "flex";
      this.elements.clockEl.style.display = "none";
      this.messageIndex += 1;
    }
  }

  // turn message to true or false
  toggleMessage() {
    // this.message === true ? this.message = false : this.message = true
    this.message = !this.message;
  }
}

const messenger = new Messenger(elementObj());
