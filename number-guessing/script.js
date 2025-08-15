const startGame = document.getElementById("start-game"),
  container = document.querySelector(".container"),
  gameArea = document.querySelector(".game-area"),
  gameAttempts = document.querySelector(".attempts span");
var numberHolder = "";
var attempts = 10;
const gameResult = document.querySelector(".game-result"),
  gameResultEmoji = document.querySelector(".game-result h1"),
  gameResultPoints = document.querySelector(".game-result .points span"),
  gameResultHeading = document.querySelector(".game-result .heading");
var points = 10;

const loadnumber = () => {
  numberHolder = Math.floor(Math.random() * 100);
};

startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  gameArea.style.display = "flex";
  container.classList.add("colorActive");
  gameAttempts.innerHTML = attempts;
  loadnumber();
});

const inputBox = document.querySelector(".game-area input"),
  checkBtn = document.querySelector(".game-area button"),
  ResultText = document.querySelector(".game-area .result");
var userIput = "";

inputBox.addEventListener("keyup", () => {
  if (inputBox.value.trim() != "") {
    checkBtn.classList.add("active");
    userIput = inputBox.value;
  } else {
    checkBtn.classList.remove("active");
  }
});

checkBtn.addEventListener("click", () => {
  attempts--;
  gameAttempts.innerHTML = attempts;

  if (attempts == 0) {
    gameArea.style.display = "none";
    gameResult.style.display = "flex";
    gameResultPoints.innerHTML = attempts * points;
    gameResultEmoji.innerHTML = "😔";
    gameResultHeading.innerHTML = "Game Over";
  } else {
    console.log(attempts);
    console.log(userIput);
    if (userIput > numberHolder) {
      const diffrence = inputBox.value - numberHolder;
      if (diffrence >= 30) {
        ResultText.innerHTML = "Your number is much much greater";
        ResultText.classList.add("display");
        ResultText.style.color = "red";
      } else if (diffrence >= 20) {
        ResultText.innerHTML = "Your number is much greater";
        ResultText.classList.add("display");
        ResultText.style.color = "orange";
      } else if (diffrence >= 10) {
        ResultText.innerHTML = "Your number is greater";
        ResultText.classList.add("display");
        ResultText.style.color = "yellow";
      } else {
        ResultText.innerHTML = "Your number is close";
        ResultText.classList.add("display");
        ResultText.style.color = "green";
      }
    } else if (userIput < numberHolder) {
      const diffrence = numberHolder - inputBox.value;
      console.log(diffrence);
      if (diffrence >= 30) {
        ResultText.innerHTML = "Your number is much much smaller";
        ResultText.classList.add("display");
        ResultText.style.color = "red";
      } else if (diffrence >= 20) {
        ResultText.innerHTML = "Your number is much smaller";
        ResultText.classList.add("display");
        ResultText.style.color = "orange";
      } else if (diffrence >= 10) {
        ResultText.innerHTML = "Your number is smaller";
        ResultText.classList.add("display");
        ResultText.style.color = "yellow";
      } else {
        ResultText.innerHTML = "Your number is close";
        ResultText.classList.add("display");
        ResultText.style.color = "green";
      }
    } else if (userIput == numberHolder) {
      gameArea.style.display = "none";
      gameResult.style.display = "flex";
      gameResultPoints.innerHTML = attempts * points;
    }
  }
});

const replayBtn = document.querySelector(".reset");
replayBtn.addEventListener("click", () => {
  gameResult.style.display = "none";
  startGame.style.display = "block";
  container.classList.remove("colorActive");
});
