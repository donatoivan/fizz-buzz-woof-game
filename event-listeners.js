let textDisplayDiv = document.getElementById("typed-value");
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
  textDisplayDiv.innerHTML = typedArray.join("");
});

const button = document.getElementById("message-button");
//listens out for button press to start game
button.addEventListener("click", (e) => {
  const messageH1 = document.getElementById("message");
  const messageH2 = document.getElementById("message2");
  const button = document.getElementById("message-button");
  const currentValueText = document.getElementById("current-value-text");

  clock.renderClock();
  clock.timer();
  currentValueText.style.display = "block";
  messageH1.style.display = "none";
  messageH2.style.display = "none";
  button.style.display = "none";
  messenger.toggleMessage();
});

const enterValue = () => {
  game.getGuess(typedArray.join(""));
  game.checkGuess();
  game.checkStatus();
  game.run();
  typedArray = [];
};
