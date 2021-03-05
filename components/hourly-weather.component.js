import {roundTemp} from "../js/utils.js";

const HOURS_TO_SHOW = 6;

const getHour = (timeStamp) => {
    const hourUTC = new Date(timeStamp * 1000).getHours();
    return hourUTC;
}

const getHoursWeather = (hourly) => {
    let hours = ''
    for (let i = 0; i < HOURS_TO_SHOW; i++){
        hours += (`
            <div class="wrapper-hour-weather" id="wrapper-hour-weather">
                <p class="hour-temperature" id="hpur-temperature-${i}">${getHour(hourly[i].dt)}</p>
                <img class="img-hour-weather" id="img-hour-weather-${i}" src="http://openweathermap.org/img/wn/${hourly[i].weather[0].icon}@2x.png">
                <p class="hour-weather-description" id="hour-weather-description-${i}">${roundTemp(hourly[i].temp)}ºC</p>
            </div>
        `);
    }
    return hours;
}

export const getHourlyWeatherDiv = (hourly) => {

    return (`
        <div class="wrapper-hourly-weather" id="wrapper-hourly-weather">
            ${getHoursWeather(hourly)}
        </div>
    `)
}