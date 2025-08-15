const inputRange = document.getElementById("inputRange");
const btn = document.getElementById("btn");
const opts = document.querySelectorAll(".checkbox input");
const textArea = document.getElementById("textArea");
const copy = document.getElementById("copy");
const ind = document.getElementById("ind");
const passwordLevel = document.querySelector(".password-level");

const char = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  symbol: "@!#$%^&*()+-={}[]<>?/|~",
};

inputRange.addEventListener("input", () => {
  document.getElementById("len").innerHTML = inputRange.value;
});

btn.addEventListener("click", () => {
  let staticPassword = "";
  let randomPassword = "";
  let rangeValue = inputRange.value;
  opts.forEach((opt) => {
    if (opt.checked) {
      staticPassword += char[opt.id];
    }
  });

  for (let i = 0; i < rangeValue; i++) {
    randomPassword +=
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
  }
  textArea.value = randomPassword;
  copy.innerText = "copy";
  passindicator(randomPassword.length);
  copy.classList.add("active");
  passwordLevel.classList.add("active");
  console.log(passwordLevel);
});

const passindicator = (length) => {
  ind.classList.remove("low", "mid", "normal", "strong");
  if (length < 10) {
    ind.classList.add("low");
  } else if (length >= 10 && length < 15) {
    ind.classList.add("mid");
  } else if (length >= 15 && length < 20) {
    ind.classList.add("normal");
  } else if (length >= 20) {
    ind.classList.add("strong");
  }
};

copy.onclick = () => {
  navigator.clipboard.writeText(textArea.value);
  copy.innerText = "Copied";
  setTimeout(() => {
    copy.innerText = "Copy";
  }, 1500);
};
