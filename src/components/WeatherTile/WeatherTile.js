import React from 'react';
import './style.scss';
import {months, weekdays} from './dates-variables.js';
import {calcDay, getIconClass} from './helpers.js';

export default function WeatherTile({forecast}) {

  const today = new Date();

  const forecastItems = forecast.map((dailyForecast, index) =>
    <div className="col text-center" key={index}>
      <div className="weather-tile">

        <p className="weather-date">{calcDay(today, index, weekdays, months)}</p>
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
