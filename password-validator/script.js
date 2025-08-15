const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const LowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const UpperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbolArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
];

const showPass = document.querySelector("span"),
  searchBox = document.querySelector("input");
const Conditions = document.querySelectorAll("li");

let passState = 0;
showPass.addEventListener("click", () => {
  if (passState == 0) {
    searchBox.setAttribute("type", "text");
    showPass.innerHTML = "Hide";
    passState = 1;
  } else if (passState == 1) {
    searchBox.setAttribute("type", "password");
    showPass.innerHTML = "Show";
    passState = 0;
  }
});

const CheckCondition = (num, low, up, sym) => {
  if (num == 1) {
    Conditions[1].classList.add("active");
  } else {
    Conditions[1].classList.remove("active");
  }

  if (low == 1) {
    Conditions[2].classList.add("active");
  } else {
    Conditions[2].classList.remove("active");
  }

  if (up == 1) {
    Conditions[3].classList.add("active");
  } else {
    Conditions[3].classList.remove("active");
  }

  if (sym == 1) {
    Conditions[4].classList.add("active");
  } else {
    Conditions[4].classList.remove("active");
  }
};

let carryNumber = 0,
  carryUpper = 0,
  carryLower = 0,
  carrySymbol = 0;

const cheackPass = (e) => {
  if (e.length >= 10) {
    Conditions[0].classList.add("active");
  } else {
    Conditions[0].classList.remove("active");
  }

  for (let i = 0; i < e.length; i++) {
    for (let j = 0; j <= numArr.length - 1; j++) {
      if (e[i] == numArr[j]) {
        carryNumber = 1;
        break;
      }
    }
    for (let m = 0; m <= LowerArr.length - 1; m++) {
      if (e[i] == LowerArr[m]) {
        carryLower = 1;
        break;
      }
    }
    for (let n = 0; n <= UpperArr.length - 1; n++) {
      if (e[i] == UpperArr[n]) {
        carryUpper = 1;
        break;
      }
    }
    for (let y = 0; y <= symbolArr.length - 1; y++) {
      if (e[i] == symbolArr[y]) {
        carrySymbol = 1;
        break;
      }
    }
  }

  CheckCondition(carryNumber, carryLower, carryUpper, carrySymbol);
};

let value = 0;

searchBox.addEventListener("keyup", () => {
  carryLower = 0;
  carryNumber = 0;
  carrySymbol = 0;
  carryUpper = 0;
  value = searchBox.value;
  cheackPass(value);
});
