// const api_key = process.env.WEATHER_API_KEY;
const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
const ROOT_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infoType, searchparams) => {
  const url = new URL(ROOT_URL + infoType);
  url.search = new URLSearchParams({
    ...searchparams,
    appid: api_key,
  });
  //   return fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => data);
  let data = await fetch(url);
  let parsedData = await data.json();
  //   console.log(parsedData);
  return parsedData;
};
const formatCurrentWeather = (parsedData) => {
  //   console.log(parsedData);
  const {
    coord: { lat, lon },
    main: { temp, feels_like, pressure, humidity },
    wind: { speed },
    sys: { country, sunrise, sunset },
    name,
    dt,
    weather,
    visibility,
  } = parsedData;
  const { description: detailed, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    pressure,
    humidity,
    visibility,
    speed,
    country,
    sunrise,
    sunset,
    name,
    dt,
    detailed,
    icon,
  };
};
const getFormattedWeatherData = async (searchparams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchparams
  ).then(formatCurrentWeather);

const { lat, lon } = getFormattedWeatherData;

  return formattedCurrentWeather;
};
export default getFormattedWeatherData;
