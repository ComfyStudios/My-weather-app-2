let now = new Date();
let h1 = document.querySelector("h1");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];
h1.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "2a953d8a53343c52593a07ae6489702d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a953d8a53343c52593a07ae6489702d&units=Imperial`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature-description");
  temperatureElement.innerHTML = `${temperature}°C`;
  let description = document.querySelector("#temperature-description");
  let city = response.data.name;
  let greeting = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("#city");
  h1.innerHTML = greeting;
  description.innerHTML = response.data.weather[0].description;
}

searchCity("West Covina");
