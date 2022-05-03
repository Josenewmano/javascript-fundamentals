const Weather = require('./weather');
const WeatherView = require('./weatherView');
jest.mock('./weatherView');



describe(Weather, () => {
  it('gets the weather data fetched from WeatherApi class', () => {
    const mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback({Description: 'clouds', Temperature:  18.4});
      }
    }
    const mockedWeatherView = new WeatherView();
    const weather = new Weather(mockedApi, mockedWeatherView);
    weather.fetch('Bristol');
    expect(weather.getWeatherData()).toEqual({
      Description: 'clouds',
      Temperature:  18.4
    });
  });


  it('prints the weather information for the given city', () => {
    const mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: 'London',
          weather: [{description: 'Overcast clouds'}],
          main: {temp: 19, feels_like: 18.9, humidity: 73},
        });
      }
    }
    const mockedWeatherView = new WeatherView();
    const weather = new Weather(mockedApi, mockedWeatherView);
    weather.fetch('London');
    weather.display()
    expect(mockedWeatherView.displayWeather).toHaveBeenCalled();
  })
});

