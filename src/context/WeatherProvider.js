import React, { useState, useEffect } from "react";
import weatherContext from "./WeatherContext";

const WeatherProvider = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [weatherResultData, setweatherResultData] = useState([]);
  const [isSearchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
  };

  const searchCity = async () => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
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
  const fetchWeatherData = async (lat, lon) => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    console.log(url);
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log("Weather data", data);
      setweatherResultData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleWeatherClick = (lat, lon) => {
    console.log("triggered");
    fetchWeatherData(lat, lon);
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
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
