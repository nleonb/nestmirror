import {executeFetch} from "./utils.js";

const apiKeyOpenWeather = '0748c14da3e7026e215f483255902488';
const DAYS_TO_CONSULT = 7;
const HOURS_TO_CONSULT = 12;

export const getCurrentWeather = async (lat, lon) => {
    const request = new Request(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKeyOpenWeather}&units=metric`,
        { method: 'GET' }
    );
    return await executeFetch(request);
}

const getDailyWeather = async (lat, lon) => {
    const request = new Request(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${DAYS_TO_CONSULT}&appid=${apiKeyOpenWeather}&units=metric`,
        { method: 'GET' }
    );

    return await executeFetch(request);
}

const getHourlyWeather = async (lat, lon) => {
    const request = new Request(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&cnt=${HOURS_TO_CONSULT}&appid=${apiKeyOpenWeather}&units=metric`,
        { method: 'GET' }
    );

    return await executeFetch(request);
}
