class Messenger {
  message = true;
  messageIndex = 0;

  gameOver() {
    const elements = elementObj();

    this.message = true;
    elements.textArea.textContent = "Game Over";
    elements.correctValue.style.display = "block";
    elements.correctValue.textContent =
      clock.noTime === true
        ? `You ran out of time. The correct answer was '${game.currentValue}'.`
        : `You typed '${elements.typedValue.textContent}'. The correct answer was '${game.currentValue}'.`;

    elements.typedValue.style.display = "none";
    elements.resetButton.style.display = "flex";
    elements.clockEl.style.display = "none";
    clock.resetTimer();
  }

  //prints message to screen
  messages() {
    const elements = elementObj();

    if (this.message === true) {
      elements.currentValueText.style.display = "none";
      elements.messageH1.textContent = messageArray[this.messageIndex];
      elements.messageH1.style.display = "block";
      elements.messageH2.textContent = messageArrayTwo[this.messageIndex];
      elements.messageH2.style.display = "block";
      elements.messageButton.textContent = "Click to start";
      elements.messageButton.style.display = "flex";
      elements.clockEl.style.display = "none";
      this.messageIndex += 1;
    }
  }

  // turn message to true or false
  toggleMessage() {
    // this.message === true ? this.message = false : this.message = true
    this.message = !this.message;
  }
}

const messenger = new Messenger();
