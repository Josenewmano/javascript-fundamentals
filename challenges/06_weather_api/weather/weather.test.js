const Weather = require('./weather');


describe(Weather, () => {
  it('gets the weather data fetched from weather api class', () => {
    const mockedapi = {
      fetchWeatherData: (city, callback) => {
        callback({Description: 'clouds', Temperature:  18.4});
      }
    }
    const weather = new Weather(mockedapi);
    weather.fetch('Bristol');
    expect(weather.getWeatherData()).toEqual({
      Description: 'clouds',
      Temperature:  18.4
    });
  });


    it('prints the weather information for the given city', () => {
      const mockedapi = {
        fetchWeatherData: (city, callback) => {
          callback({
            name: 'London',
            weather: [{description: 'Overcast clouds'}],
            main: {temp: 19, feels_like: 18.9, humidity: 73},
          });
        }
      }
      const weather = new Weather(mockedapi);
      weather.fetch('London');
      const display = jest.fn(() => [
        'City: London',
        'Description: Overcast clouds',
        'Temperature: 19',
        'Feels like: 18.9',
        'Humidity: 73%',
      ]);
      expect(weather.display()).toEqual([
        'City: London',
        'Description: Overcast clouds',
        'Temperature: 19',
        'Feels like: 18.9',
        'Humidity: 73%',
      ]);
    })
  });

