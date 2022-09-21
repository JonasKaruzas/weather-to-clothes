// Get user location
// Get weather info
// get user options (man , woman, child)
// show weather predicion
// show clothes recomendation

const LOCATION_API = "http://ip-api.com/json/?fields=status,country,city";

async function getLocation() {
  const response = await fetch(LOCATION_API);
  return response.json();
}
