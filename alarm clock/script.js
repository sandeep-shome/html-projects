const SetAlarmBtn = document.querySelector(".set"),
  selects = document.querySelectorAll("select"),
  hourEl = document.querySelector(".hour"),
  minuteEl = document.querySelector(".minute"),
  secondEl = document.querySelector(".second"),
  ampmEl = document.querySelector(".ampm"),
  sound = document.querySelector("audio"),
  ClearBtn = document.querySelector(".clear"),
  hourSelect = document.querySelector(".hour-select"),
  minuteSelect = document.querySelector(".minute-select");

let h, dayNight, m, s, timeInterval;

// Populate hour and minute dropdowns
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.textContent = String(i).padStart(2, "0");
  hourSelect.appendChild(option);
}

for (let i = 0; i < 60; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.textContent = String(i).padStart(2, "0");
  minuteSelect.appendChild(option);
}

setInterval(() => {
  const date = new Date();
  s = date.getSeconds();
  h = date.getHours();
  m = date.getMinutes();

  dayNight = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;

  hourEl.textContent = String(h).padStart(2, "0");
  minuteEl.textContent = String(m).padStart(2, "0");
  secondEl.textContent = String(s).padStart(2, "0");
  ampmEl.textContent = dayNight;
}, 1000);

const SetAlarm = (state, hrs, min, daytime) => {
  if (state === 1) {
    timeInterval = setInterval(() => {
      if (parseInt(hrs) === h && parseInt(min) === m && daytime === dayNight) {
        sound.play();
        clearInterval(timeInterval);
      }
    }, 1000);
  } else {
    clearInterval(timeInterval);
  }
};

SetAlarmBtn.addEventListener("click", () => {
  if (
    selects[0].value.trim() === "" ||
    selects[1].value.trim() === "" ||
    selects[2].value.trim() === ""
  ) {
    alert("Please set a valid time");
  } else {
    SetAlarm(1, selects[0].value, selects[1].value, selects[2].value);
    SetAlarmBtn.style.display = "none";
    ClearBtn.style.display = "block";
  }
});

ClearBtn.addEventListener("click", () => {
  sound.pause();
  sound.currentTime = 0;
  clearInterval(timeInterval);
  selects.forEach((sel) => (sel.value = ""));
  SetAlarmBtn.style.display = "block";
  ClearBtn.style.display = "none";
});
