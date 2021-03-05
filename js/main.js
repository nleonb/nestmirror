import {getCoords} from "./location.js";
import {getCurrentWeather} from "./weather.js";
import {myClock} from "./clock.js";
import {getNews} from "./news.js";

const getCoordinatesCitiesWeather = async () => {
    const cityPosition = await getCoords();
    console.log('cityPosition ' +  cityPosition);
    const currentWeather = await getCurrentWeather(cityPosition.lat, cityPosition.long);
    console.log('currentWeather ' + currentWeather);
}

myClock();
getCoordinatesCitiesWeather();
getNews();

