var request = require("request");
var is = require( "is_js" );

var WeatherWoman = function (apiKey, _darkSkyOptions)
{
    if (!apiKey) throw new Error("weatherwoman requires a Dark Sky API key");
    this._apiKey = apiKey;
    this._url = "https://api.darksky.net/forecast/" + this._apiKey;
    this._darkSkyOptions = _darkSkyOptions ? _darkSkyOptions : null;
};

WeatherWoman.prototype._requestUrl = function(latitude, longitude, time)
{
    var requestUrl = this._url + "/" + latitude + "," + longitude;
    if (is.not.undefined(time)) requestUrl = requestUrl + "," + time;
    return requestUrl;
};

WeatherWoman.prototype._forecast = function(options, done)
{
    var requestOptions =
    {
        url: this._requestUrl(options.latitude, options.longitude, options.time),
        json: true
    };
    if (this._darkSkyOptions !== null) requestOptions.qs = this._darkSkyOptions;
    request(requestOptions, function(err, res, body)
    {
        if (err) return done(err);
        return done(null, body);
    });
};

WeatherWoman.prototype.doForecast = function(options, done)
{
    var hasLatLon = is.number(options.latitude) && is.number(options.longitude);
    var hasInvalidTime = is.not.undefined(options.time) && is.not.number(options.time);
    if (!hasLatLon) throw new Error("'options' argument must include 'latitude' and 'longitude' as numbers");
    if (hasInvalidTime) throw new Error("'options.time' argument must be a Unix timestamp");
    return this._forecast(options, done);
};

module.exports = WeatherWoman;
