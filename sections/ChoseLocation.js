let oradeaButton = document.querySelector(".oradea");
let timisoaraButton = document.querySelector(".timisoara");
let bucharestButton = document.querySelector(".bucharest");
let aradButton = document.querySelector(".arad");
let sibiuButton = document.querySelector(".sibiu");
let brasovButton = document.querySelector(".brasov");
let constantaButton = document.querySelector(".constanta");

function updateCity(city) {
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function handleCityChange(city) {
  localStorage.setItem("city", city);
  updateCity(city);
  displayCurrentWeater(city);
  displayForecastWeather(city);
}

oradeaButton.addEventListener("click", function () {
  handleCityChange("Oradea");
});
timisoaraButton.addEventListener("click", function () {
  handleCityChange("Timișoara");
});
bucharestButton.addEventListener("click", function () {
  handleCityChange("București");
});
aradButton.addEventListener("click", function () {
  handleCityChange("Arad");
});
sibiuButton.addEventListener("click", function () {
  handleCityChange("Sibiu");
});
brasovButton.addEventListener("click", function () {
  handleCityChange("Brașov");
});
constantaButton.addEventListener("click", function () {
  handleCityChange("Constanța");
});
