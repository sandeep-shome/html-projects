const boxes = document.querySelectorAll(".box");

const loadGame = () => {
  const colors = [
    //all assets name here
    "blue",
    "red",
    "yellow",
    "pink",
    "purple",
    "greenDiamond",
    "purpleDiamond",
    "greenCircle",
    "blue",
    "red",
    "yellow",
    "pink",
    "purple",
    "greenDiamond",
    "purpleDiamond",
    "greenCircle",
  ];
  let boxRemaining = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // remening boxes
  let boxTaken = [];
  for (let i = 0; i < 16; i++) {
    // creating random number array
    let random = Math.floor(Math.random() * boxRemaining.length);
    boxTaken[i] = boxRemaining[random];
    boxRemaining.splice(random, 1);
  }
  for (let j = 0; j <= 15; j++) {
    if (boxTaken[j] != "e") {
      let img = document.createElement("img");
      img.setAttribute("src", `assets/${colors[boxTaken[j]]}.png`);
      boxes[j].appendChild(img);
      boxes[j].setAttribute("data-value", colors[boxTaken[j]]);
      boxTaken[j] = "e";
    }
  }
};

window.addEventListener("load", () => {
  // loading game on load of window
  document.querySelector(".load-screen").style.display = "none";
  loadGame();
});

// defining essential variable
let state = 0,
  checkArr = [],
  correct = 0,
  flips = 0,
  timeState = 0,
  timeLeft = 90;

const info = document.querySelector(".info");

const GameComplete = () => {
  document.querySelector(".audio2").play();
  setTimeout(() => {
    location.reload();
  }, 1500);
};

let boxMatched = [];

const check = (pass) => {
  // checking game status
  checkArr.push(pass); // box position storing in the array
  if (checkArr.length == 2) {
    //only when array length == 2 then this will check
    flips++;
    info.querySelector(".flip p").innerHTML = flips; //updating flips in html element
    if (
      boxes[checkArr[0]].dataset.value == boxes[checkArr[1]].dataset.value &&
      checkArr[0] != checkArr[1]
    ) {
      boxes[checkArr[0]].classList.add("matched");
      boxes[checkArr[1]].classList.add("matched");
      boxMatched.push(checkArr[0]);
      boxMatched.push(checkArr[1]);
      checkArr = [];
      state = 0;
      correct++;
      document.querySelector(".audio1").play();
      if (correct === 8) {
        GameComplete();
      }
    } else {
      boxes[checkArr[0]].classList.add("shake");
      boxes[checkArr[1]].classList.add("shake");
      boxes[checkArr[0]].classList.remove("matched");
      boxes[checkArr[1]].classList.remove("matched");
      window.navigator.vibrate(400);

      setTimeout(() => {
        boxes[checkArr[0]].classList.remove("active");
        boxes[checkArr[1]].classList.remove("active");
        boxes[checkArr[0]].classList.remove("shake");
        boxes[checkArr[1]].classList.remove("shake");
        checkArr = [];
        state = 0;
      }, 1000);
    }
  }
};

const gameEnd = () => {
  // gameEnd function ends the game by loosing the game
  document.querySelector(".audio3").play();
  for (let n = 0; n < boxes.length; n++) {
    boxes[n].classList.add("matched");
  }
};

const timeStart = () => {
  // starting the time function
  let time = setInterval(() => {
    timeLeft--; //after each 1000 ms the time will be deduct by 1;
    info.querySelector(".time p").innerHTML = timeLeft; // html element update
    if (timeLeft == 0) {
      // if time = 0 then this function wil;l stop and call gameEnd function
      gameEnd();
      clearTimeout(time);
    }
  }, 1000);
};

boxes.forEach((box) => {
  // box onclick function
  box.addEventListener("click", () => {
    box.classList.add("active"); //adding active class to rotate and show the img and hide the span tag
    box.classList.add("matched"); // adding matched class to prevent anoter click (matched class only prevent the click)
    if (timeState == 0) {
      // starting the time function (if state = 0 only the the function runs)
      timeStart();
      timeState = 1;
    }
    state++; // updatin the state(if only the state is 2 then the check function runs properly)
    if (state <= 2) {
      check(box.dataset.position); //passsing the clicked box position
    }
  });
});

document.querySelector(".refreshBtn").addEventListener("click", () => {
  // refresh button reloads the page to start over
  location.reload();
});
