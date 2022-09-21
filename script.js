// Get user location
// Get weather info
// get user options (man , woman, child)
// show weather predicion
// show clothes recomendation

const LOCATION_API = "http://ip-api.com/json/?fields=status,city";

async function getLocation() {
  const response = await fetch(LOCATION_API);
  return response.json();
}

async function getWeather(location) {
  const response = await fetch(
    `https://weatherdbi.herokuapp.com/data/weather/${location}`
  );
  return response.json();
}

function getWeatherElements(weatherArr) {
  function drawDay(day) {
    const card = document.createElement("div");
    const dayName = document.createElement("div");
    const maxTemp = document.createElement("div");
    const minTemp = document.createElement("div");
    const condition = document.createElement("div");
    const conditionIcon = document.createElement("img");

    dayName.innerText = day.day;
    maxTemp.innerText = day.max_temp.c;
    minTemp.innerText = day.min_temp.c;
    condition.innerText = day.comment;
    conditionIcon.src = day.iconURL;

    card.append(dayName, maxTemp, minTemp, condition, conditionIcon);
    return card;
  }

  const result = [];

  weatherArr.forEach((day) => {
    result.push(drawDay(day));
  });

  console.log(result);
  return result;
}

async function runProgram() {
  const location = await getLocation();
  const weatherObj = await getWeather(location.city);

  const WeatherElements = getWeatherElements(weatherObj.next_days);
  const weatherOutput = document.querySelector("#weather_info_container");

  weatherOutput.append(...WeatherElements);
}

runProgram();
