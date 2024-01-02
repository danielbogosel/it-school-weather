function displayForecastWeather(city) {
  const forecastWeatherEndpoint = getForecastEndpoint(city);

  fetch(forecastWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let forecastList = data.list;

      let predictionsPerDaysObj = {};

      forecastList.forEach((forecast) => {
        const dataTime = forecast.dt;
        const day = getDayOfTheWeek(dataTime);
        if (predictionsPerDaysObj[day]) {
          predictionsPerDaysObj[day].push(forecast);
        } else {
          predictionsPerDaysObj[day] = [forecast];
        }
      });
      //CLean the predictions
      let forecastWeatherContainer =
        document.querySelector(".weather-forecast");
      forecastWeatherContainer.innerHTML = "";

      for (let day in predictionsPerDaysObj) {
        forecastWeatherContainer.innerHTML += `
        <h2>${day}</h2>`;
        let forecastList = predictionsPerDaysObj[day];

        forecastList.forEach((prediction) => {
          const { dt, main, weather } = prediction;
          const day = getDayOfTheWeek(dt);
          const time = getCurrentTime(dt);
          const weatherDescription = weather[0].description;
          const iconSrc = getWeatherIcon(weather[0].icon);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);

          let forecastWeatherContainer =
            document.querySelector(".weather-forecast");
          forecastWeatherContainer.innerHTML += `
        <div class="content-forecast w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3 ">
          <div>${time}</div>
          <div><img src ="${iconSrc}" alt =""/></div>
          <div><strong>${temperature}&deg;C</strong></div> 
          <div>${weatherDescription} </div>
          <div class ="real-feel">Real feel: ${realFeel}</div>
        </div>
        `;
        });
      }
    });
}
