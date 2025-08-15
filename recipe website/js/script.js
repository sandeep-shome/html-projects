const menuBtn = document.querySelector(".menu"),
nav = document.querySelector(".nav-links"),
closeMenu = document.querySelector(".closeMenu"),
errorSection = document.querySelector(".error");

const searchList = document.querySelector(".search-list");

menuBtn.addEventListener("click", ()=>{
    nav.classList.add("active");
})

closeMenu.addEventListener("click", ()=>{
    nav.classList.remove("active");
})

window.addEventListener("load", ()=>{
    document.querySelector(".pre-loader").style.display = "none";
})

const inputArea = document.querySelector(".search-box input");
const btn = document.querySelector(".search-box button");

inputArea.addEventListener("keyup", ()=>{
    if(inputArea.value.trim() == ""){
        btn.classList.remove("active");
        errorSection.style.display = "none";
    }
    else{
        btn.classList.add("active");
    }
})

