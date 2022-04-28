class WeatherView {

  displayWeather(data) {
    const description = [
    `City: ${data.name}`,
    `Description: ${data.weather[0].description}`,
    `Temperature: ${Math.round((data.main.temp) * 10) / 10 }`,
    `Feels like: ${Math.round((data.main.feels_like) * 10) / 10}`,
    `Humidity: ${data.main.humidity}%`,
    ];

    return description
  }

}

module.exports = WeatherView;