<<<<<<< HEAD
const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");
const texts = document.querySelectorAll(".text");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const logoSpan = document.querySelector(".logo span");
const mainTheme = document.querySelector(".main");
const wordtheme = document.querySelector(".word"); 


const darkMode = () =>{
    texts.forEach(text => {
        text.classList.add("dark");
    });
    body.classList.add("dark");
    nav.classList.add("dark");
    logo.classList.add("dark");
    logoSpan.classList.add("dark");
    mainTheme.classList.add("dark");
    searchInput.classList.add("dark");
    searchBtn.classList.add("dark");
    wordtheme.classList.add("dark");
    more.classList.add("dark");
    main2.classList.add("dark");
    darkBtn.style.display = "none";
    lightBtn.style.display = "block";
}

const lightMode = () =>{
     texts.forEach(text => {
        text.classList.remove("dark");
    });
    body.classList.remove("dark");
    nav.classList.remove("dark");
    logo.classList.remove("dark");
    logoSpan.classList.remove("dark");
    mainTheme.classList.remove("dark");
    searchInput.classList.remove("dark");
    searchBtn.classList.remove("dark");
    wordtheme.classList.remove("dark");
    more.classList.remove("dark");
    main2.classList.remove("dark");
    darkBtn.style.display = "block";
    lightBtn.style.display = "none";
}

darkBtn.addEventListener("click",()=>{
    darkMode();
})

lightBtn.addEventListener("click", ()=>{
    lightMode();
=======
const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");
const texts = document.querySelectorAll(".text");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const logoSpan = document.querySelector(".logo span");
const mainTheme = document.querySelector(".main");
const wordtheme = document.querySelector(".word"); 


const darkMode = () =>{
    texts.forEach(text => {
        text.classList.add("dark");
    });
    body.classList.add("dark");
    nav.classList.add("dark");
    logo.classList.add("dark");
    logoSpan.classList.add("dark");
    mainTheme.classList.add("dark");
    searchInput.classList.add("dark");
    searchBtn.classList.add("dark");
    wordtheme.classList.add("dark");
    more.classList.add("dark");
    main2.classList.add("dark");
    darkBtn.style.display = "none";
    lightBtn.style.display = "block";
}

const lightMode = () =>{
     texts.forEach(text => {
        text.classList.remove("dark");
    });
    body.classList.remove("dark");
    nav.classList.remove("dark");
    logo.classList.remove("dark");
    logoSpan.classList.remove("dark");
    mainTheme.classList.remove("dark");
    searchInput.classList.remove("dark");
    searchBtn.classList.remove("dark");
    wordtheme.classList.remove("dark");
    more.classList.remove("dark");
    main2.classList.remove("dark");
    darkBtn.style.display = "block";
    lightBtn.style.display = "none";
}

darkBtn.addEventListener("click",()=>{
    darkMode();
})

lightBtn.addEventListener("click", ()=>{
    lightMode();
>>>>>>> 66e00288f11ccdd01980ccde9a6f42d62411087d
})