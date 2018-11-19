import React, { Component } from 'react';
import './App.scss';

import WeatherTile from './components/WeatherTile/WeatherTile.js';

//GET YOUR OWN API KEY AND PASTE HERE
const API_KEY = "abe5affb6861893994d8ed784c41108d";
const api = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=52.4&lon=16.9&units=metric&cnt=5&appid=" + API_KEY;
//[52.4083, 16.9335]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }

  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        const forecast = data.list;
        console.log(forecast);
        this.setState({ weather: forecast })
      });
  }

  render() {
    return (
      <div className="container main-container">
        <h1>5-days weather forecast</h1>
        <p>This is a simple wather app, using OpenWeatherMap API to display 5-days forecast.</p>
        <WeatherTile forecast={this.state.weather} />
      </div>
    );
  }
}
