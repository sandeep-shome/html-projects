const colorCodes = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const refreshBtn = document.querySelector(".refresh"),
  input1 = document.querySelector(".input1"),
  input2 = document.querySelector(".input2"),
  colorPallate = document.querySelector(".colorShow"),
  text = document.querySelector(".text"),
  options = document.querySelectorAll("option"),
  directionSelect = document.querySelector("select"),
  copy = document.querySelector(".copy");

let direction = "left top";
let color1 = "#",
  color2 = "#";

// showing color and text
const showingColor = (code) => {
  colorPallate.style.background = code;
  document.querySelector("body").style.background = code;
  text.innerHTML = "background-image: " + code + ";";
};

//compiling color code

const makeColor = (dir, col1, col2) => {
  code = `linear-gradient(to ${dir} , ${color1}, ${color2})`;
  console.log(code);
  showingColor(code);
};

// making color code

const loadColor = () => {
  for (let i = 1; i <= 6; i++) {
    let randomNum1 = Math.floor(Math.random() * 16);
    color1 += colorCodes[randomNum1];
  }

  for (let j = 1; j <= 6; j++) {
    let randomNum2 = Math.floor(Math.random() * 16);
    color2 += colorCodes[randomNum2];
  }

  input1.value = color1;
  input2.value = color2;
  console.log(color1, color2);
  makeColor(direction, color1, color2);
};

// cahnging direction
const directionChange = (d) => {
  // d = direction
  direction = d;
  console.log(direction);
  makeColor(direction, color1, color2);
};

// onclick actions

window.addEventListener("load", () => {
  color1 = "#";
  color2 = "#";
  direction = "left top";
  loadColor();
});

refreshBtn.addEventListener("click", () => {
  color1 = "#";
  color2 = "#";
  direction = "left top";
  loadColor();
});

directionSelect.addEventListener("change", () => {
  console.log(directionSelect.value);
  directionChange(directionSelect.value);
});

input1.addEventListener("change", () => {
  // change color1 on input
  color1 = input1.value;
  makeColor(direction, color1, color2);
});

input2.addEventListener("change", () => {
  // change color1 on input
  color2 = input2.value;
  makeColor(direction, color1, color2);
});

copy.addEventListener("click", () => {
  copy.innerHTML = "copied!";
  navigator.clipboard.writeText(text.innerHTML);
  setTimeout(() => {
    copy.innerHTML = "Copy Code";
  }, 2000);
});
