const fetch = require("node-fetch");
const API_KEY = "21deafc5d0924571857213700192207";

const fetchNow = async (city) => {
    const response = await fetch(
        `https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
    
    const data = await response.json();

    // city location data 
    console.log("City name: ", data.location.name)
    console.log("Country: ", data.location.country)
    console.log("Local Time: ", data.location.localtime)

    // city current weather
    console.log("Temperature (Celcius): ", data.current.temp_c)
    console.log("Feels like (Celcius): ", data.current.feelslike_c)
    console.log("Humidity: ", data.current.humidity)
    console.log("Condition: ", data.current.condition)
};

const weatherForecast = async (city) => {
    const response = await fetch(`https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}`);

    const data = await response.json();

    const days = data.forecast.forecastday;
    for(const a in days) {
        console.log("City name: ", data.location.name)
        console.log("Country: ", data.location.country)
        console.log("Date: ", days[a].date)
        console.log("Max Temp (Celcius): ", days[a].day.maxtemp_c)
        console.log("Min Temp (Celcius): ", days[a].day.mintemp_c)
        console.log("Astro: ", days[a].astro)
    }

    //console.log(data.forecast)
};

module.exports = {
    fetchNow,
    weatherForecast
};