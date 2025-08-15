const search_input = document.getElementById("userInput");
const search_btn = document.getElementById("search_btn");
const error = document.querySelector(".error");
const card = document.querySelector(".card");

var user_value;
const getData = async (value) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`
    const response = await fetch(url);

    if(response.status == 404 || response.statusText == "not found"){
        error.style.display = "flex";
        card.style.display = "none";
        return;
    }

      const data = await response.json();

        console.log(data);
        
        console.log(user_value);
        document.querySelector(".card h2").innerHTML = data.name;        
        document.querySelector(".card .secondery-info .weight p span").innerHTML = data.weight;        
        document.querySelector(".card .secondery-info .height p span").innerHTML = data.height;        
        document.querySelector(".card .secondery-info .type p").innerHTML = data.types[0].type.name;        
        document.querySelector(".card .primary-info .hp span").innerHTML = data.stats[0].base_stat;        
        document.querySelector(".card .primary-info .xp span").innerHTML = data.base_experience;
        document.querySelector(".card .third-info .attack p").innerHTML = data.stats[1].base_stat;        
        document.querySelector(".card .third-info .super_attack p").innerHTML = data.stats[3].base_stat;        
        document.querySelector(".card .image img").setAttribute("src", data.sprites.other.dream_world.front_default);

}

search_btn.addEventListener("click", ()=>{
    user_value = search_input.value.trim();
    console.log(user_value);
    card.style.display = "flex";
    getData(user_value);
});