# A Node.js module for the Dark Sky API (previously known as Forecast.io).

*Based on Brian Hines's [weatherman.io](https://github.com/projectweekend/weatherman.io).*

### Install it

```
 npm install weatherwoman
```


### Require it
```javascript
var weatherwoman = require("weatherwoman");
```


### Create a weatherwoman

```javascript
var carolKirkwood = new weatherwoman("your-dark-sky-api-key");
```


### Create a weatherwoman with options

```javascript
var options =
{
    units: "uk",
    exclude: ["minutely", "alerts"],
    extend: "hourly"
};

var carolKirkwood = new weatherwoman("your-dark-sky-api-key", options);
```

Detailed information about each of these options is available in the Dark Sky developer docs: [https://darksky.net/dev/docs](https://darksky.net/dev/docs)


### Do the forecast from a location

```javascript
var forecastOptions =
{
    latitude: 41.8854710,
    longitude: -87.6430260
};

carolKirkwood.doForecast(forecastOptions, function(err, weatherReport)
{
    if (err)
    {
        // handle any errors
    }
    // do something with the weatherReport
});
```


### Do the forecast for a specific time (Unix timestamp)

```javascript
var forecastOptions =
{
    latitude: 41.8854710,
    longitude: -87.6430260,
    time: 1395347280
};

carolKirkwood.doForecast(forecastOptions, function (err, weatherReport)
{
    if (err)
    {
        // handle any errors
    }
    // do something with the weatherReport
});
```
