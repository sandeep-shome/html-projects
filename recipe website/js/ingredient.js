const inputBox = document.querySelector(".search-box input"),
searchBtnName = document.querySelector(".search-box button"),
searchListName = document.querySelector(".search-list"),
card = document.querySelector(".card"),
error = document.querySelector(".error"),
details = document.querySelector(".details-area"),
detail = document.querySelector(".details"),
resultTextArea = document.querySelector(".resultTextArea"),
detailsClose = document.querySelector(".closeDetail")

function showError(a){
    document.querySelector(".loader").style.display = "none";
    searchListName.style.display = "none";
    error.style.display = "flex";
    error.querySelector("p").innerText = `Does't find any food for "${a}"`;
}

const foodDetails = async (id) =>{
    const detailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let detailsData = await detailsResponse.json();
    detail.querySelector(".ingredients ol").innerHTML = `
    <li>${detailsData.meals[0].strIngredient1}</li>
    <li>${detailsData.meals[0].strIngredient2}</li>
    <li>${detailsData.meals[0].strIngredient3}</li>
    <li>${detailsData.meals[0].strIngredient4}</li>
    <li>${detailsData.meals[0].strIngredient5}</li>
    <li>${detailsData.meals[0].strIngredient6}</li>
    <li>${detailsData.meals[0].strIngredient7}</li>
    <li>${detailsData.meals[0].strIngredient8}</li>
    <li>${detailsData.meals[0].strIngredient9}</li>
    <li>${detailsData.meals[0].strIngredient10}</li>
    `
    detail.querySelector(".recipe p").innerHTML = `${detailsData.meals[0].strInstructions}`;
    detail.querySelector("a").setAttribute("href", `${detailsData.meals[0].strYoutube}`);
    detail.querySelector("h1").innerHTML = detailsData.meals[0].strMeal;
}

const getDataName = async (e) =>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e}`);
    let data = await response.json();

    if(data.meals == null){
        showError(e);
        return;
    }
    else{
         error.style.display = "none";
        searchListName.style.display = "flex";
        let content = "";
            for(let i = 0; i < data.meals.length; i++){
                content = content + ` <div class="card">
        <div class="image">
          <img src= "${data.meals[i].strMealThumb}" alt="Error loading image 404" />
        </div>
        <h3>${data.meals[i].strMeal}</h3>  
        <button data-mealid="${data.meals[i].idMeal}" class="CheckBtn">Check Recipe</button>
        </div>`
        }
        searchList.innerHTML = content;

        let checkBtns =  document.querySelectorAll(".CheckBtn");
        checkBtns.forEach(checkBtn =>{
            checkBtn.addEventListener("click", ()=>{
                foodDetails(checkBtn.dataset.mealid);
                details.style.display = "flex";
            })
        })
        document.querySelector(".loader").style.display = "none";
    }
}


detailsClose.addEventListener("click", ()=>{
    details.style.display = "none";
})


searchBtnName.addEventListener("click", ()=>{
    getDataName(inputBox.value);
    document.querySelector(".loader").style.display = "flex";
    resultTextArea.style.display = "none";
})
