const api_key = "f55ffb59720c2c98d36ef05506a1b34f";

export const fetchWeatherData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};
export const url = {
  currenWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airpollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reversegeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};

// export const fetchWeatherData = async () => {
//   try {
//     const response = await fetch(
//       `${url}&appid=${process.env.OPEN_WEATHER_API_KEY}`
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// };

// export const fetchWeatherData = async (infoType, searchparams) => {
//   try {
//     const url = new URL(ROOT_URL + infoType);
//     url.search = new URLSearchParams({
//       ...searchparams,
//       appid: api_key,
//     });
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// };
