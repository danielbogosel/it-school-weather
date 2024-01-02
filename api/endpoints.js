const API_KEY = "";

function getCurrentWeatherEndpoint(city) {
  let baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  let queryParam = `?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
  let fullUrl = baseUrl + queryParam;
  return fullUrl;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
