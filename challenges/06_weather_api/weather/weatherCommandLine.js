const readline = require('readline');
const WeatherApi = require('./weatherApi');
const WeatherView = require('./weatherView');
const Weather = require('./weather');
const got = require('got');

const rl = readline.createInterface(process.stdin, process.stdout);
const api = new WeatherApi();
const view = new WeatherView();
const weather = new Weather(api, view);
const display = () => {
  console.log(weather.display());
}
const end = () => {
  rl.close();
}


rl.question('What city do you want to know the weather for? ', (city) => {
  console.log(`Your city is ${city}`);  
  weather.fetch(city)
  setTimeout(display, 1000);
  setTimeout(end, 2000);
});

