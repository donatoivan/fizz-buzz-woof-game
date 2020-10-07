const elements = elementObj();
let typedArray = [];
// listens out for keyboard types
window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && game.message !== true) {
    typedArray.pop();
  } else if (
    (e.code[0] === "K" || e.code === "Space") &&
    game.message !== true
  ) {
    typedArray.push(e.key);
  } else if (
    e.key === "Enter" &&
    game.message !== true &&
    game.gameRunning !== false
  ) {
    enterValue();
  }
  elements.textDisplayDiv.textContent = typedArray.join("");
});

//listens out for button press to start game
elements.messageButton.addEventListener("click", (e) => {
  clock.renderClock();
  clock.timer();
  elements.currentValueText.style.display = "block";
  elements.messageH1.style.display = "none";
  elements.messageH2.style.display = "none";
  elements.messageButton.style.display = "none";
  messenger.toggleMessage();
});

const enterValue = () => {
  game.getGuess(typedArray.join(""));
  game.checkGuess();
  game.checkStatus();
  game.run();
  typedArray = [];
};
