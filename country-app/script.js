const SearchBtn = document.querySelector(".search-box button"),
  SearchInput = document.querySelector(".search-box input"),
  image = document.querySelector(".image img"),
  searcForm = document.querySelector("#search-form");

const getData = async (e) => {
  const url = `https://restcountries.com/v3.1/name/${e}?fullText=true`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  if (response.status == 404 || response.statusText == "Not Found") {
    alert("Oops! Please check the country name before try again.");
  } else {
    console.log(data);
    image.setAttribute("src", `${data[0].flags.png}`);
    document.querySelector(
      "#country_name"
    ).innerHTML = `${data[0].name.common}`;

    document.querySelector(".capital").innerHTML = `${data[0].capital[0]}`;
    document.querySelector(".timezone").innerHTML = `${data[0].timezones.join(
      ", "
    )}`;
    document.querySelector(".official").innerHTML = `${data[0].name.official}`;
    document.querySelector(".continent").innerHTML = `${data[0].continents[0]}`;
    document.querySelector(".population").innerHTML = `${data[0].population}`;
    let currencies = [];
    for (const currency in data[0].currencies) {
      const currencyWithSymbol =
        currency + " " + `(${data[0].currencies[currency].symbol})`;
      currencies.push(currencyWithSymbol);
    }
    document.querySelector(".currencies").innerHTML = `${currencies.join(
      ", "
    )}`;
    let languages = [];
    for (const language in data[0].languages) {
      languages.push(data[0].languages[language]);
    }
    document.querySelector(".languages").innerHTML = `${languages.join(", ")}`;

    document.querySelector(".result").classList.add("active");
  }
};

SearchInput.addEventListener("input", () => {
  if (SearchInput.value.trim() === "") {
    SearchBtn.disabled = true;
  } else {
    SearchBtn.disabled = false;
  }
});

searcForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(SearchInput.value);
});
