const WeatherApi = require('./weatherApi');
const WeatherView = require('./weatherView');

class Weather {

  constructor(api) {
    this.api = api;
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
    let view = new WeatherView
    return view.displayWeather(this.data);
  }

}

module.exports = Weather;
