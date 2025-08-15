const inputs = document.querySelectorAll(".form input");
inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (input.value.length > 5) {
      input.style.backgroundColor = "lightgreen";
    } else {
      input.style.backgroundColor = "white";
    }
    console.log(input.value, input.value.length);
  });
});

const btn = document.querySelector("button");
btn.addEventListener("mouseover", () => {
  if (inputs[0].value.length > 5 && inputs[1].value.length > 5) {
    btn.onclick = () => {
      document.querySelector(".form .correct").style.display = "block";
    };
  } else {
    btn.classList.toggle("move");
  }
});
