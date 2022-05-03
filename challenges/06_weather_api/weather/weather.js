const WeatherApi = require('./weatherApi');
const WeatherView = require('./weatherView');

class Weather {

  constructor(api, view) {
    this.api = api;
    this.view = view;
  };

  fetch(city) {
    this.api.fetchWeatherData(city, (response) => {
      this.data = response
    })
  };

  getWeatherData() {
    return this.data
  };

  display() {
    return this.view.displayWeather(this.data);
  }

}

module.exports = Weather;

const api = new WeatherApi();
const view = new WeatherView();
const weather = new Weather(api, view);

weather.fetch('London');
console.log(weather.data)

