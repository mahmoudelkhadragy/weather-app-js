
// API_KEY for maps api
let API_KEY = "c672fa3bf4ca3c80994c638591fd9b57";


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  
  console.log(FULL_URL);
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((res)=>{
    return res.json();
  })
  
}
console.log(getWeatherData('cairo'));



searchCity = () => {
  const city = document.getElementById('city-input').value;
  if(city === "") return;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((err)=>{
    console.log(err);
  })

}


showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerHTML = weatherData.name? weatherData.name : "No Name"
  document.getElementById("weather-type").innerHTML = weatherData.weather[0].main
  document.getElementById("temp").innerHTML = weatherData.main.temp
  document.getElementById("min-temp").innerHTML = weatherData.main.temp_min
  document.getElementById("max-temp").innerHTML = weatherData.main.temp_max
}

