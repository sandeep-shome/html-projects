const box = document.getElementById("box"),
  btn = document.getElementById("btn"),
  inputBox = document.getElementById("inptBox"),
  img = document.getElementById("img"),
  form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  box.style.height = "420px";
  img.style.opacity = "1";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${inputBox.value}`;
  document.querySelector(".qr-area").classList.add("active");
});

inputBox.addEventListener("input", () => {
  if (inputBox.value === "") {
    btn.setAttribute("disabled", true);
  } else {
    btn.removeAttribute("disabled");
  }
});
