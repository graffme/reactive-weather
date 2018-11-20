import React from 'react';
import './style.scss';
import {months, weekdays} from './dates-variables.js';
import {locateUser} from '../../config/geolocation.js';

export default function WeatherTile({forecast}) {

  async function geoLocation() {
    console.log('working 1');
    const data = await locateUser();
    return data;
  }

  geoLocation().then( data => {
    console.log('working 2');
    console.log(data);
  }).catch( err => {
    console.log(err);
  });

  const myDate = new Date();
  const date = myDate.getDate();
  const month = myDate.getMonth();
  const day  = myDate.getDay();

  const getIconClass = (id) => {
    switch(true) {
      case (id >= 200 && id < 300):
        return "wi-storm-showers";
      case (id >= 300 && id < 600):
        return "wi-rain";
      case (id >= 600 && id < 700):
        return "wi-snow";
      case (id >= 700 && id < 800):
        return "wi-fog";
      case (id === 800):
        return "wi-day-sunny";
      case (id > 800):
        return "wi-cloud";
      default:
        return "";
    }
  }

  const forecastItems = forecast.map((dailyForecast, index) =>
    <div className="col text-center" key={index}>
      <div className="weather-tile">
        <p className="weather-date">{weekdays[day+index] + " " + (date+index) + " " + months[month]}</p>
        <i className={`wi ${getIconClass(dailyForecast.weather[0].id)}`}></i>
        <p className="temp">{(dailyForecast.temp.day).toFixed(0)} °C</p>
        <p className="temp temp-night">{(dailyForecast.temp.night).toFixed(0)} °C</p>
      </div>
    </div>
  );
  return(
    <div className="row">
      {forecastItems}
    </div>
  );
}
