// City input and search button 
var cityInput = $('#cityInput')
var searchBtn = $('#searchBtn')


// grid container Two City (temp, wind, humidty)
var city = $('#city')
var temperature = $('#temp')
var wind = $('#wind')
var humidity = $('#humidity')

// City History 
var cityHistory = $('#cityHistory')

// Five Day forecast 
var fiveForecast = $('#fiveDayForecast')

// API key for OpenWeatherMap
var apiKey = '4c83d66135f28f1b211c3a2e9338ac0e'

function getCurrentWeather(cityName, callback) {
  // API call URL for current weather data
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey;

  // Make API call to OpenWeatherMap
  $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data);
     
      callback(data);

      
      displayCityInfo(cityName, data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus + ": " + errorThrown);
    }
  });
}

searchBtn.on('click', function() {
  var cityName = cityInput.val();
  getCurrentWeather(cityName, function(data) {
    // Do something with the weather data
  });
});

  
 

  function displayCityInfo(cityName, data) {
    city.text(cityName);
    updateWeatherData(data);
  }
  
  function updateWeatherData(data) {
    // Get and display temperature
    var temp = data.main.temp;
    temperature.text("🌡️ Temperature: " + temp + " °C");
  
    // Get and display humidity
    var humid = data.main.humidity;
    humidity.text("💦 Humidity: " + humid + "%");
  
    // Get and display wind speed
    var windSpeed = data.wind.speed;
    wind.text("🌬️ Wind Speed: " + windSpeed + " m/s");

    
  }
// function displayFiveDayForecast(data) {
  
// }


  