var expect = require("chai").expect;
var weatherwoman = require("../lib/weatherwoman");

describe("weatherwoman", function()
{
	var carolKirkwood = new weatherwoman("dark-sky-api-key");
	describe("creating an instance with an API key", function()
	{
		it("should have an API Key", function(done)
		{
			expect(carolKirkwood).to.have.a.property("_apiKey", "dark-sky-api-key");
			done();
		});
	});

	describe("creating an instance without an API key", function()
	{
	    it("should throw an error", function (done)
	    {
	        expect(weatherwoman).to.throw("weatherwoman requires a Dark Sky API key");
	        done();
	    });

	});

	describe("the API URL", function()
	{
		var carolKirkwood = new weatherwoman("dark-sky-api-key");
		var apiUrl = carolKirkwood._requestUrl(41.885471, -87.643026);
		it("should be formatted correctly", function (done)
		{
			expect(apiUrl).to.equal("https://api.darksky.net/forecast/dark-sky-api-key/41.885471,-87.643026");
			done();
		});
	});

	describe("creating an instance with options", function()
	{
		var options =
		{
			units: "us",
			exclude: ["hourly", "minutely"],
			extend: "hourly"
		};
		var carolKirkwood = new weatherwoman("dark-sky-api-key", options);
		it("should have populated the _darkSkyOptions property", function(done)
		{
			expect(carolKirkwood._darkSkyOptions).to.equal(options);
			done();
		});
	});
});
