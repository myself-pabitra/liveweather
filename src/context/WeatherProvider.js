import React, { useState, useEffect } from "react";
import weatherContext from "./WeatherContext";

const WeatherProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [weatherResultData, setweatherResultData] = useState(null);
  const [nameCountry, setnameCountry] = useState(null);
  const [AQI, setAQI] = useState(null);
  const [fiveDayData, setfiveDayData] = useState(null);
  const [isSearchActive, setSearchActive] = useState(false);
  // const apiKey = process.env.WEATHER_API_KEY;
  const makeIconURL = (iconId) =>
    `https://openweathermap.org/img/wn/${iconId}@2x.png`;

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
  };

  const searchCity = async () => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    // const apiKey = process.env.WEATHER_API_KEY;

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${api_key}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log("entire data", data);
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchQuery !== "") {
      searchCity();
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [searchQuery]);

  // Fetching Curent weather From API
  const fetchWeatherData = async (lat = "22.5726723", lon = "88.3638815") => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    console.log(url);
    try {
      //   let response = await fetch(url);
      //   let data = await response.json();
      //   console.log("Weather data", data);
      //   setweatherResultData(data);

      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);
      const {
        weather,
        main: { temp, feels_like, pressure, humidity },
        sys: { sunrise: sunriseUnixUTC, sunset: sunsetUnixUTC },
        visibility,
        timezone,
        dt: dateUnix,
      } = data;
      const { description, icon } = weather[0];

      return {
        description,
        iconURL: makeIconURL(icon),
        temp,
        feels_like,
        pressure,
        humidity,
        visibility,
        sunriseUnixUTC,
        sunsetUnixUTC,
        timezone,
        dateUnix,
      };
    } catch (error) {
      console.log(error);
    }
  };
  // fetch city / country from API
  const fetchReverseGeo = async (lat = "22.5726723", lon = "88.3638815") => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`;
    console.log(url);
    try {
      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);

      // Check if the data array is not empty
      if (Array.isArray(data) && data.length > 0) {
        const { name, country, state } = data[0];

        return {
          name,
          country,
          state,
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch AQI data from API
  const fetchAQIData = async (lat = "22.5726723", lon = "88.3638815") => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;

    console.log(url);
    try {
      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);

      // Check if the data array is not empty

      const [
        {
          main: { aqi },
          components: { no2, o3, so2, pm2_5 },
        },
      ] = data.list;

      return {
        aqi,
        no2,
        o3,
        so2,
        pm2_5,
      };
    } catch (error) {
      console.log(error);
    }
  };
  const fiveDayForecast = async (lat = "22.5726723", lon = "88.3638815") => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;

    console.log(url);
    try {
      const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);

      const {
        list: forecastList,
        city: { timezone },
      } = data;
      return {
        forecastList,
        timezone,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleWeatherClick = async (lat, lon) => {
    // console.log("triggered");
    const data = await fetchWeatherData(lat, lon);
    const data2 = await fetchReverseGeo(lat, lon);
    const data3 = await fetchAQIData(lat, lon);
    const data4 = await fiveDayForecast(lat, lon);

    setnameCountry(data2);
    setweatherResultData(data);
    setAQI(data3);
    setfiveDayData(data4);
    console.log(data4);
    // console.log(data);
    // console.log(data3);
  };

  return (
    <weatherContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        showComponent,
        handleWeatherClick,
        isSearchActive,
        toggleSearch,
        weatherResultData,
        nameCountry,
        AQI,
        fiveDayData,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
