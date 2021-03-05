import {roundTemp} from "../js/utils.js";

const DAYS_TO_SHOW = 5;

const getDay = (timeStamp) => {

    const dayUTC = new Date(timeStamp * 1000);
    const options = {  weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(dayUTC);
}

const getDaysWeather = (daily) => {
    let hours = ''
    for (let i = 0; i < DAYS_TO_SHOW; i++){
        hours += (`
            <div class="wrapper-day-weather" id="wrapper-day-weather">
                <span class="daily-day" id="daily-day-${i}">${getDay(daily[i].dt)}</span>
                <div class="day-weather-icon-description" id="day-weather-icon-description">
                    <img class="img-day-weather" id="img-current-weather" src="http://openweathermap.org/img/wn/${daily[i].weather[0].icon}@2x.png">
                    <p class="description-day-weather" id="description-day-weather">${daily[i].weather[0].description}</p>
                </div>
                <span class="day-weather-min" id="day-weather-min">${roundTemp(daily[i].temp.min)}ºC</span>
                <span class="day-weather-max" id="day-weather-max">${roundTemp(daily[i].temp.max)}ºC</span>
            </div>
        `);
    }
    return hours;
}

export const getDailyWeatherDiv = (hourly) => {

    return (`
        <div class="wrapper-daily-weather" id="wrapper-daily-weather">
            ${getDaysWeather(hourly)}
        </div>
    `)
}