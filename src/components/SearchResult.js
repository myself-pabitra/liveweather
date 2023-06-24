import React, { useState, useContext } from "react";
import weatherContext from "../context/WeatherContext";

const SearchResult = (props) => {
  // const [weatherResultData, setweatherResultData] = useState([]);

  const context = useContext(weatherContext);
  const { searchResults, handleWeatherClick, toggleSearch } = context;

  const handleMultipleClicks = (event) => {
    event.preventDefault();
    const { lat, lon } = event.currentTarget.dataset;
    handleWeatherClick(lat, lon); // Pass lat and lon as arguments
    toggleSearch();
    // handleLatLonClick(lat, lon); // Pass lat and lon as arguments
  };

  return (
    <ul className="view-list" data-search-list>
      {searchResults.map((result) => (
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
            onClick={handleMultipleClicks}
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
