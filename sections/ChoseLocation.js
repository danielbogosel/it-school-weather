let oradeaButton = document.querySelector(".oradea");
let timisoaraButton = document.querySelector(".timisoara");
let bucharestButton = document.querySelector(".bucharest");
let currentCity = document.querySelector(".current-city");

function handleCityChange(city) {
  currentCity.innerHTML = city;
  displayWeater(city);
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
