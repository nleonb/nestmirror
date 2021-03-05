import {roundTemp} from "../js/utils.js";

export const currentWeatherDiv = (current) => {
    return (`
        <span class="current-temperature" id="current-temperature">${roundTemp(current.temp)}ºC</span>
        <img class="img-current-weather" id="img-current-weather" src="http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png">
        <span class="current-weather-description" id="current-weather-description">${current.weather[0].description}</span>
    `)
}