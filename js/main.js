import {getCoords} from "./location.js";
import {getCurrentWeather} from "./weather.js";
import {myClock} from "./clock.js";
import {getNews} from "./news.js";
import {currentWeatherDiv} from "../components/current-weather.component.js";
import {getHourlyWeatherDiv} from "../components/hourly-weather.component.js";
import {getDailyWeatherDiv} from "../components/daily-weather.component.js";
import {newP} from "../components/news.component.js";
import {NUMBER_NOTICE_TO_SHOW} from "../components/news.component.js";

const getCurrentPosition = async () => {
    const cityPosition = await getCoords();
    console.log('cityPosition ' +  cityPosition);
    return cityPosition;
}

const getCoordinatesCitiesWeather = async (position) => {
    const currentWeather = await getCurrentWeather(position.lat, position.long);
    console.log('currentWeather ' + currentWeather);
    return currentWeather;
}

const renderWeather = (currentWeather) => {
    const currentDiv = document.getElementById('current-weather');
    currentDiv.innerHTML = currentWeatherDiv(currentWeather.current);
    const hourlyDiv = document.getElementById('hourly-weather');
    hourlyDiv.innerHTML = getHourlyWeatherDiv(currentWeather.hourly);
    const dailyDiv = document.getElementById('daily-weather');
    dailyDiv.innerHTML = getDailyWeatherDiv(currentWeather.daily);
}

let from = 0;
const dailyDiv = document.getElementById('news-list');
const renderNews = (news, from) => {
    const innerPHTML = () =>{
        let newHTML = '';
        let cont = 0;
        for (let i = from;  cont < NUMBER_NOTICE_TO_SHOW; i++) {
            if (i >= news.data.length){
                i = 0;
                from = 0;
            }
            const date = new Date(news.data[i].published_at);
            const options = {month: 'long', day: 'numeric'};
            const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);
            newHTML +=newP(dateFormat,news.data[i].title, i)
            cont++;
            from++;
        }
        return newHTML;
    };
    dailyDiv.innerHTML = innerPHTML();
    setTimeout(function() {
        renderNews(news, from);
    },1000 * 40);

}

const getCiTy = async (lat, long) => {
    let geocoder = new google.maps.Geocoder;
    console.log(geocoder);
    console.log(lat)
    console.log(long)
    geocoder.geocode({
        'location' : {
            lat :  lat ,
            lng :  long
        },
        // ej. "-34.653015, -58.674850"
    }, function(results, status) {
        console.log('// si la solicitud fue exitosa')
        if (status === google.maps.GeocoderStatus.OK) {
            // si encontró algún resultado.
            if (results[1]) {
                console.log(results[1])
                return  results[1];
            }
        }
        return results;
    });
}

// Application start
myClock();
const position = await getCurrentPosition();
const currentWeather = await getCoordinatesCitiesWeather(position);
renderWeather(currentWeather);
const showNews = await getNews();
renderNews(showNews, from);

const city  = await getCiTy(position.lat, position.long);
console.log(city);
