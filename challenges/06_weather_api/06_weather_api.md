# A Weather program

## Objectives

- Test-drive a program that fetches data from an API.

You'll now work on a program that will display the current weather for a given city. How
could we get this kind of data?

Well, thankfully for us, there is an API for that! You'll find that there are APIs for all
sorts of things, including the weather.

## The OpenWeather API

We'll use the [OpenWeather API](https://openweathermap.org/api). You'll need to create an
account before being able to use the API (a free account should be enough).

Once your account is created, head to the [API keys
section](https://home.openweathermap.org/api_keys) page on the website, where you'll find
your API key. Copy that key somewhere safe on your laptop, but be mindful of _not_
including it in a file pushed on your coding challenge Github repository. Ideally, this
key shouldn't leave your computer (or your pair's computer)!

**Once again, take the habit of _not saving_ your API keys and secrets into a file
committed with git.**

<details>
  <summary>Here's a way to exclude the API key from git</summary>

1. Create a file `apiKey.js` that exports the value:

```js
// file: apiKey.js
module.exports = "a3d9eb01d4de82b9b8d0849ef604dbed";
```

2. Import this file from the other file where you need it:

```js
// file: index.js
const apiKey = require('./apiKey');

// ...
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}
```

3. Make sure the file `apiKey.js` is added to the `.gitignore` file so git won't commit
   it:

```bash
$ echo "apiKey.js" >> .gitignore
```

</details>

## Testing one request

**Work through the following challenge in a new project directory**:

```bash
mkdir weather
cd weather
npm init -y
npm add got@11
```

You can try having a look at what data this API can return by going to the following URL
(your API key should replace the placeholder, including brackets):

```
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid={YOUR API KEY HERE}
```

We can try the following code to test the API and get weather for a given location:

```javascript
// file: index.js

const got = require("got");
const apiKey = "a3d9eb01d4de82b9b8d0849ef604dbed"; // include our key
const city = "London";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
});

console.log("Requesting weather data");
```

Let's have a look at the above code example together:

- First, we're building the URL to call with `got`. This URL contains our API key (so the
  server on the other end can "know" it's our account requesting the API - and who to
  charge for it), and the city we want to get weather data for.
- The _callback_ function passed to `then` will be executed once the response is
  received. We then use `JSON.parse(response.body)` to transform the JSON string received
  into a JavaScript _object_, that we assign to `weatherData`.
- We can use `console.log` to print the object on the terminal and inspect it.

If you run the file above with `node index.js`, you should see a similar output in your
terminal:

```javascript
{
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 292.15,
    feels_like: 292.01,
    temp_min: 290.25,
    temp_max: 293.53,
    pressure: 1010,
    humidity: 73
  },
  visibility: 10000,
  wind: { speed: 4.63, deg: 250 },
  clouds: { all: 100 },
  dt: 1627375477,
  sys: {
    type: 2,
    id: 2019646,
    country: 'GB',
    sunrise: 1627359414,
    sunset: 1627415813
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200
}
```

We can start to see some interesting things in here. The `main` and `weather` objects
contained in `weatherData` are probably the most interesting, if we wanted to start
somewhere.

1. Print to the console the values in `main.temp` and `weather[0].main` (the values you
   have will probably be different, unless you have the same cloudy weather!)

## Challenge

1. Implement the class `WeatherApi` that fetches the current weather for a given city
   using `got`. It should also accept a callback function, which will get called once the
   data has been received and parsed to an object:

```js
const api = new WeatherApi();

api.fetchWeatherData("London", (weatherData) => {
  console.log(weatherData);
});
```

2. Test-drive the class `Weather`, which uses the class `WeatherApi` to get the weather
   for a given city. Make sure the dependency on `WeatherApi` is mocked.

```js
const api = new WeatherApi();
const weather = new Weather(api);

weather.fetch("Bristol");

weather.getWeatherData();
```

You'll now if it works if (in order of important to less important):

- The code above works and you get the correct weather data from `getWeatherData()`.
- Your tests pass.
- You can break the class `WeatherApi` and your unit tests for `Weather` still pass.

## Make it yours!

Well done for completing this module — if you're willing to go further, there's [an
additional (bonus) section where you'll build a small web server](./07_web_server.md) to
run the Thermostat class you worked on earlier, using the express library. Alternatively,
have a look at the additional steps below — or ask your coach for some more challenge!

- **User-friendly breakdown of the weather in the terminal** — implement a new method
  `displayWeather()` that prints a nicely formatted breakdown of the weather for the
  given city, for example:
  ```
  City:         London
  Weather:      Clouds
  Temperature:  18.4
  Feels like:   16.0
  Humidity:     64%
  ```
- **Extract the method above into a new class `WeatherView`**, updating the unit tests
  of `Weather` to mock the dependency on the new class.
- **Create a command-line interface to ask the program user to enter a city name**,
  before fetching and displaying the weather information for this city. [You can use the
  `readline` package, as described here, to ask for user
  input.](https://nodejs.org/api/readline.html#rlquestionquery-options-callback)
- **Make the `Weather` class periodically (let's say every 5 seconds) fetch the latest
  weather data from the API**, and refresh the data stored by the `Weather` class. You
  can use `setInterval` for this.

[Next Challenge](07_web_server.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/06_weather_api.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/06_weather_api.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/06_weather_api.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/06_weather_api.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=challenges/06_weather_api.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
