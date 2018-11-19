import React from 'react';
import './style.scss';

export default function WeatherTile(props) {
  const months = ["Jan", "Feb", "Mar",
  "Apr", "May", "June", "July", "Aug", "Sept",
  "Oct", "Nov", "Dec"];
  const weekdays = ["Sunday","Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"];

  const myDate = new Date();
  var date = myDate.getDate();
  var month = myDate.getMonth();
  var day  = myDate.getDay();

  const forecastItems = props.forecast.map((dailyForecast, index) =>
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

        <p className="temp">{dailyForecast.temp.day} °C</p>
        <p className="temp temp-night">{dailyForecast.temp.night} °C</p>
      </div>
    </div>
  );
  return(
    <div className="row">
      {forecastItems}
    </div>
  );
}
