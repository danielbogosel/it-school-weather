let currentCityLS = localStorage.getItem("city");
let currentCityPlaceholder = document.querySelector(".current-city");

if (!currentCityLS) {
  localStorage.setItem("city", "București");
  currentCityLS = "București";
}

currentCityPlaceholder.innerHTML = currentCityLS;
displayCurrentWeater(currentCityLS);
displayForecastWeather(currentCityLS);
