function displayTemp(response) {
    console.log(response);
    let temperatureElement = document.querySelector("#current-temperature");
    let cityElement = document.querySelector("#current-city");
    let temperature = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
}

function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");

    let city = searchInputElement.value;
    let apiKey = "efea043c4addbbb4t1937c3df4occ86c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    //console.log(apiUrl); ---this is to test console with api

    axios.get(apiUrl).then(displayTemp);
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

// In your project, when a user searches for a city (example: Sydney),
// it should display the name of the city on the result page
// and the current temperature of the city.

// function displayTemp(response) {
//   let temperature = Math.round(response.data.temperature.current);
//   let city = response.data.city;
// }

// Solution
// create API Url
// make the API call
// display the temperature

// all inside the function search(event)
// 1. import axios to place in index.html
// 2. get the API key and API url
// 3. adding the query/city by creating a city variable (line 5)
// 4. get axios and create another function for displaying temperature

// select the temperature element
// inject the current temperature inside the temperature element
// inject the city name inside the temperature element

// 1. add id on the current-temperature-value ex. current-temperature
// 2. create a new function to call the temperature
// 3. create a temperatureElement
// 4. call a variable temperature to have a more precise code
// 5. better to move the city on the response function
// - watch the solution for better understanding
