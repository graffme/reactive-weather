import React, { Component } from 'react';
import './App.scss';

import WeatherTile from './components/WeatherTile/WeatherTile.js';
import {locateUser} from './config/geolocation.js';

//GET YOUR OWN API KEY AND PASTE HERE
const API_KEY = "abe5affb6861893994d8ed784c41108d";
//[52.4083, 16.9335]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      location: null,
    };
  }

  componentDidMount() {
    locateUser().then( data => {
        this.setState({location: data});
        console.log(this.state.location);
      }).then( data => {
        let latitude = this.state.location.coords.latitude;
        let longitude = this.state.location.coords.longitude;
        let api = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=5&appid=` + API_KEY;
        fetchData(api).then( data => {
        console.log(data);
        this.setState({weather: data.list});
      }).catch( err => {
        console.log(err);
      })
    });

    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    };
  }

  render() {
    const {weather, location} = this.state;
    return (
      <div className="container main-container">
        <h1>5-days weather forecast</h1>
        <p>This is a simple wather app, using OpenWeatherMap API to display 5-days forecast for {location !== null ? `${location.address.street}, ${location.address.city} ${location.address.countryCode}` : "[waiting for location...]" }</p>
        {weather !== [] ? (
          <WeatherTile forecast={weather} /> ) : null }
      </div>
    );
  }
}
