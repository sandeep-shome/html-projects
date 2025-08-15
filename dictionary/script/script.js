<<<<<<< HEAD
const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");
const details = document.querySelector(".details");
const sound = document.getElementById("sound");
const speak = document.getElementById("speak");
const word = document.querySelector(".word h2");
const meaning = document.querySelector(".meaning");
const example = document.querySelector(".example");
const synonyms = document.querySelector(".synonyms");
const main2 = document.querySelector(".main2");
const main = document.querySelector(".main");
const main2Detail = document.querySelector(".main2 .details2");
const more = document.querySelector(".more");
const closeBtn = document.querySelector(".closeBtn");
const error = document.querySelector(".error");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

var searchItem = "";

searchInput.addEventListener("keyup",()=>{
    if(searchInput.value.trim() == ""){
        searchBtn.classList.add("inactive");
    }
    else{
        searchBtn.classList.remove("inactive");
    }
})

const getData = async (e) =>{
    let newUrl = url + e;
    let response = await fetch(newUrl);
    let data = await response.json();

   if(response.status == 404 || response.statusText == "not found"){
        error.style.display = "flex";
        details.style.display = "none";
        error.querySelector("p").innerHTML = `No meaning found for "${e}"`;
   }
   else{
       error.style.display = "none";
       details.style.display = "block";
       word.innerHTML = data[0].word;
       let audio = data[0].phonetics[0].audio;
       sound.setAttribute('src', audio);
       meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
       example.innerHTML = data[0].meanings[0].definitions[0].example;
       synonyms.innerHTML = data[0].meanings[0].synonyms[0];
       let arr = data[0].meanings;

       if(arr.length-1 < 1){
            more.style.display = "none"; 
            main2.style.display = "none";       
       }
       else{
            more.style.display = "block";        
            let stringInp = "";

            let height = main.offsetHeight;
            main2.style.minHeight  = `${height - 40}px`

           for(let i = 1; i < arr.length;i++){
                stringInp = stringInp + `<div class="text">
              <h3>As ${arr[i].partOfSpeech}</h3>
              <p>
               ${arr[i].definitions[0].definition}
              </p>
              <h4>Antonyms</h4>
              <span> ${arr[i].antonyms[0]}</span>
            </div>`
            }
    
            main2Detail.innerHTML = stringInp;
        }
   }   
}


speak.addEventListener("click", ()=>{
    sound.play();
})

more.addEventListener("click", ()=>{
    main2.style.display = "flex";
    more.style.display = "none";
})

closeBtn.addEventListener("click", ()=>{
    main2.style.display = "none";
    more.style.display = "block";
})

searchBtn.addEventListener("click",()=>{
    getData(searchInput.value);
=======
const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");
const details = document.querySelector(".details");
const sound = document.getElementById("sound");
const speak = document.getElementById("speak");
const word = document.querySelector(".word h2");
const meaning = document.querySelector(".meaning");
const example = document.querySelector(".example");
const synonyms = document.querySelector(".synonyms");
const main2 = document.querySelector(".main2");
const main = document.querySelector(".main");
const main2Detail = document.querySelector(".main2 .details2");
const more = document.querySelector(".more");
const closeBtn = document.querySelector(".closeBtn");
const error = document.querySelector(".error");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

var searchItem = "";

searchInput.addEventListener("keyup",()=>{
    if(searchInput.value.trim() == ""){
        searchBtn.classList.add("inactive");
    }
    else{
        searchBtn.classList.remove("inactive");
    }
})

const getData = async (e) =>{
    let newUrl = url + e;
    let response = await fetch(newUrl);
    let data = await response.json();

   if(response.status == 404 || response.statusText == "not found"){
        error.style.display = "flex";
        details.style.display = "none";
        error.querySelector("p").innerHTML = `No meaning found for "${e}"`;
   }
   else{
       error.style.display = "none";
       details.style.display = "block";
       word.innerHTML = data[0].word;
       let audio = data[0].phonetics[0].audio;
       sound.setAttribute('src', audio);
       meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
       example.innerHTML = data[0].meanings[0].definitions[0].example;
       synonyms.innerHTML = data[0].meanings[0].synonyms[0];
       let arr = data[0].meanings;

       if(arr.length-1 < 1){
            more.style.display = "none"; 
            main2.style.display = "none";       
       }
       else{
            more.style.display = "block";        
            let stringInp = "";

            let height = main.offsetHeight;
            main2.style.minHeight  = `${height - 40}px`

           for(let i = 1; i < arr.length;i++){
                stringInp = stringInp + `<div class="text">
              <h3>As ${arr[i].partOfSpeech}</h3>
              <p>
               ${arr[i].definitions[0].definition}
              </p>
              <h4>Antonyms</h4>
              <span> ${arr[i].antonyms[0]}</span>
            </div>`
            }
    
            main2Detail.innerHTML = stringInp;
        }
   }   
}


speak.addEventListener("click", ()=>{
    sound.play();
})

more.addEventListener("click", ()=>{
    main2.style.display = "flex";
    more.style.display = "none";
})

closeBtn.addEventListener("click", ()=>{
    main2.style.display = "none";
    more.style.display = "block";
})

searchBtn.addEventListener("click",()=>{
    getData(searchInput.value);
>>>>>>> 66e00288f11ccdd01980ccde9a6f42d62411087d
});    