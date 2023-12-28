let currentCityLS = localStorage.getItem("city");
let currentCityPlaceholder = document.querySelector(".current-city");

if (currentCityLS === null) {
  currentCityLS = "București";
}

currentCityPlaceholder.innerHTML = currentCityLS;
displayWeater(currentCityLS);
