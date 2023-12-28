function getDayOfTheWeek(unixUtc) {
  const weekDays = [
    "Duminica",
    "Luni",
    "Marti",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sambata",
  ];
  let dateObj = new Date(unixUtc * 1000);
  let dayOfTheWeek = dateObj.getDay();
  return weekDays[dayOfTheWeek];
}

function getCurrentTime(unixUtc) {
  let dateObj = new Date(unixUtc * 1000);
  let hours = dateObj.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = dateObj.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes}`;
}
