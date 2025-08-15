let container = document.querySelector(".container"),
  refreshBtn = document.querySelector("button");
arr = [
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
let color = "#";
let colorBoxCopies = document.querySelectorAll(".box");
let colorBoxs = document.querySelectorAll(".back");
let colorBoxsText = document.querySelectorAll(".text");

const loadColors = () => {
  for (let i = 0; i <= 11; i++) {
    for (let j = 1; j <= 6; j++) {
      color = color + arr[Math.floor(Math.random() * arr.length)];
    }
    console.log(color);
    colorBoxCopies[i].setAttribute("data-code", color);
    colorBoxs[i].style.backgroundColor = color;
    colorBoxsText[i].innerHTML = color;
    color = "#";
  }
};

window.addEventListener("load", loadColors());

refreshBtn.addEventListener("click", () => {
  loadColors();
});

// for copy function
colorBoxCopies.forEach((box) => {
  box.addEventListener("click", () => {
    console.log(box.dataset.code);
    navigator.clipboard.writeText(box.dataset.code);
    let copy = box.querySelector(".copy");
    copy.classList.add("active");
    setTimeout(() => {
      copy.classList.remove("active");
    }, 1500);
  });
});
