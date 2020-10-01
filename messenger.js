class Messenger {
  message = true;
  messageIndex = 0;

  gameOver() {
    const textArea = document.getElementById("current-value-text");
    const correctValue = document.getElementById("message2");
    const button = document.getElementById("reset-button");
    const typedValue = document.getElementById("typed-value");
    const clockEl = document.getElementById("clock");

    this.message = true;
    textArea.innerHTML = "Game Over";
    correctValue.style.display = "block";
    correctValue.innerHTML =
      clock.noTime === true
        ? `You ran out of time. The correct answer was '${game.currentValue}'.`
        : `You typed '${typedValue.innerText}'. The correct answer was '${game.currentValue}'.`;

    typedValue.style.display = "none";
    button.style.display = "flex";
    clockEl.style.display = "none";
    clock.resetTimer();
  }

  //prints message to screen
  messages() {
    // find a way to put conditional on messages so it only appears when we get to 35
    const messageH1 = document.getElementById("message");
    const messageH2 = document.getElementById("message2");
    const button = document.getElementById("message-button");
    const currentValueText = document.getElementById("current-value-text");
    const clockEl = document.getElementById("clock");

    if (this.message === true) {
      currentValueText.style.display = "none";
      messageH1.innerHTML = messageArray[this.messageIndex];
      messageH1.style.display = "block";
      messageH2.innerHTML = messageArrayTwo[this.messageIndex];
      messageH2.style.display = "block";
      button.innerHTML = welcomeButton;
      button.style.display = "flex";
      clockEl.style.display = "none";
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
