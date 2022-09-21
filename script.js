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

async function runProgram() {
  const location = await getLocation();
  const weatherObj = await getWeather(location.city);
  console.log(weatherObj.next_days);
}

runProgram();
