function displayCurrentWeater(city) {
  const currentWeaterEndpoint = getCurrentWeatherEndpoint(city);

  fetch(currentWeaterEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { name, dt, main, weather, wind } = data;
      const dayOfTheWeek = getDayOfTheWeek(dt);
      const time = getCurrentTime(dt);
      const temperature = Math.round(main.temp);
      const windSpeed = Math.round(wind.speed);
      const realFeel = Math.round(main.feels_like);
      const weatherDescription = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);

      let currentWeater = document.querySelector(".current-weather");
      currentWeater.innerHTML = `
      <div class="px-3">
        <div class ="fs-3 mb-2"><strong>${name}</strong></div>
        <div class ="fs-4"><strong>${dayOfTheWeek}</strong>, ${time}</div>
        <div class ="d-flex align-items-center jutify-content-center">
          <strong class="fs-1">${temperature}&deg;C</strong>
          <img src ="${weatherIcon}"/>
        </div>
      </div>
      <div class="px-3">
        <p class="fs-5">Real feel: <strong>${realFeel}&deg;C</strong></p>
        <p class="fs-5 text-capitalize">${weatherDescription}</p>
        <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
      </div>
      `;
    });
}
