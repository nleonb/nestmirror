import {currentWeatherDiv} from "../components/current-weather.component.js";
import {getHourlyWeatherDiv} from "../components/hourly-weather.component.js";
import {getDailyWeatherDiv} from "../components/daily-weather.component.js";

const apiKeyOpenWeather = '0748c14da3e7026e215f483255902488';
const DAYS_TO_CONSULT = 7;
const HOURS_TO_CONSULT = 12;

export const getCurrentWeather = async (lat, lon) => {
    const request = new Request(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&units=metric`,
        { method: 'GET' }
    );

    fetch(request)
    .then(async response => {
        const res = await response.json();
        const currentDiv = document.getElementById('current-weather');
        currentDiv.innerHTML = currentWeatherDiv(res.current);
        const hourlyDiv = document.getElementById('hourly-weather');
        hourlyDiv.innerHTML = getHourlyWeatherDiv(res.hourly);
        const dailyDiv = document.getElementById('daily-weather');
        dailyDiv.innerHTML = getDailyWeatherDiv(res.daily);
        return res;
    })
    .catch(error => {
        console.error(error);
        return error;
    })
}

const getDailyWeather = async (lat, lon) => {
    const request = new Request(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${DAYS_TO_CONSULT}&appid=${apiKeyOpenWeather}&units=metric`,
        { method: 'GET' }
    );

    fetch(request)
    .then(async response => {
        const res = await response.json()
        console.log(res);
        return res;
    })
    .catch(error => {
        console.error(error);
        return error;
    })
}

const getHourlyWeather = async (lat, lon) => {
    const request = new Request(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&cnt=${HOURS_TO_CONSULT}&appid=${apiKeyOpenWeather}&units=metric`,
        { method: 'GET' }
    );

    fetch(request)
    .then(async response => {
        const res = await response.json()
        console.log(res);
        return res;
    })
    .catch(error => {
        console.error(error);
        return error;
    })
}



