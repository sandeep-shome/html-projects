const clickBtn = document.getElementById("ClickBtn");
let NameId = document.getElementById("NameId");
const ImageSrc = document.getElementById("ImageId");

clickBtn.addEventListener("click", function () {
  let NameTag = NameId.value;
  ImageSrc.src = `https://avatar.iran.liara.run/public/boy?username=${NameTag}`;
  document.getElementById("downloadBtn").classList.add("active");
  document
    .getElementById("downloadBtn")
    .setAttribute(
      "href",
      `https://avatar.iran.liara.run/public/boy?username=${NameTag}`
    );
});
