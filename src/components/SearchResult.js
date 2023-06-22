import React, { useState } from "react";

const SearchResult = (props) => {
  const [weatherResultData, setweatherResultData] = useState([]);

  // Check if searchResults prop is defined before mapping over it
  if (!props.searchResults) {
    return null;
  }

  const fetchWeatherData = async (lat, lon) => {
    const api_key = "f55ffb59720c2c98d36ef05506a1b34f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log("Weather data", data);
      setweatherResultData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleWeatherClick = (event) => {
    event.preventDefault();
    const { lat, lon } = event.currentTarget.dataset;
    fetchWeatherData(lat, lon);
  };

  return (
    <ul className="view-list" data-search-list>
      {props.searchResults.map((result) => (
        <li className="view-item" key={result.lat}>
          <span className="m-icon">location_on</span>
          <div>
            <p className="item-title">{result.name}</p>
            <p className="label-2 item-subtitle">
              {result.state} {result.country}
            </p>
          </div>
          <a
            href={`#/weather?lat=${result.lat}&lon=${result.lon}`}
            className="item-link has-state"
            onClick={handleWeatherClick}
            data-lat={result.lat}
            data-lon={result.lon}
            aria-label={`${result.name} weather`}
          >
            {" "}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
