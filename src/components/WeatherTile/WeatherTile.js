import React from 'react';
import './style.scss';
import {months, weekdays} from './dates-variables.js';

export default function WeatherTile({forecast}) {

  const myDate = new Date();
  const date = myDate.getDate();
  const month = myDate.getMonth();
  const day  = myDate.getDay();

  const forecastItems = forecast.map((dailyForecast, index) =>
    <div className="col text-center" key={index}>
      <div className="weather-tile">
        <p className="weather-date">{weekdays[day+index] + " " + (date+index) + " " + months[month]}</p>

        {dailyForecast.weather[0].id >= 200 && dailyForecast.weather[0].id < 300 ?
          <i class="wi-storm-showers"></i>
        : null}

        {dailyForecast.weather[0].id >= 300 && dailyForecast.weather[0].id < 600 ?
          <i class="wi wi-rain"></i>
        : null}

        {dailyForecast.weather[0].id >= 600 && dailyForecast.weather[0].id < 700 ?
          <i class="wi wi-snow"></i>
        : null}

        {dailyForecast.weather[0].id >= 700 && dailyForecast.weather[0].id < 800 ?
          <i class="wi wi-fog"></i>
        : null}

        {dailyForecast.weather[0].id == 800 ?
          <i class="wi wi-day-sunny"></i>
        : null}

        {dailyForecast.weather[0].id > 800 ?
          <i class="wi wi-cloud"></i>
        : null}

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
