const display = document.querySelector(".display p"), // selecting display text
  inputBox = document.querySelector(".input-area input"), // selecting inputbox
  inputArea = document.querySelector(".input-area"), //selecting input area
  resultBtn = document.querySelector(".result-btn"), // selecting check button
  resultText = document.querySelector(".result"), // selecting result text
  retryBtn = document.querySelector(".retry"); // selecting reload button

//console.log(inputArea, inputBtn);

let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; // passing all charecters and numbers in the char variable
var static = ""; // creating a string variable (if we did't define string it will return undefined)

//when display is loaded completely generate random text
window.addEventListener("load", () => {
  for (let i = 0; i < 6; i++) {
    static += char[Math.floor(Math.random() * char.length)];
  }
  display.innerHTML = static;
  console.log(static);
});

//when reload is clicked generate random text
retryBtn.addEventListener("click", () => {
  static = "";
  for (let i = 0; i < 6; i++) {
    static += char[Math.floor(Math.random() * char.length)];
  }
  display.innerHTML = static; // passing random text in display
  inputBtn.value = ""; // clearing inputbox
  resultBtn.style.display = "none"; // hiding check button and result text
  resultText.style.display = "none";
});

inputBox.addEventListener("input", () => {
  if (inputBox.value.trim().length === 6) {
    resultBtn.style.display = "block";
  } else {
    // if the value is "" = 0 then check button & result text will be hide
    resultBtn.style.display = "none";
    resultText.style.display = "none";
  }
});
//cheking recaptcha
resultBtn.addEventListener("click", () => {
  resultText.style.display = "block";
  if (inputBox.value === static) {
    console.log("correct");
    resultText.innerHTML = "Correct REcaptcha";
    resultText.style.color = "green";
  } else {
    console.log("incorrect");
    resultText.innerHTML = "Invalid REcaptcha, try agian!";
    resultText.style.color = "red";
  }
});
