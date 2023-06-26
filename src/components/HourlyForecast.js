import React, { useContext } from "react";
import weatherContext from "../context/WeatherContext";
import { getHours, mps_to_kmh } from "../context/module";
const HourlyForecast = () => {
  const context = useContext(weatherContext);
  const { fiveDayData } = context;

  const renderWeatherForecast = () => {
    return fiveDayData.forecastList.slice(0, 7).map((data, index) => {
      const {
        dt: dateTimeUnix,
        main: { temp },
        weather,
        wind: { deg: windDireaction, speed: windSpeed },
      } = data;
      const [{ icon, description }] = weather;
      return (
        <li className="slider-item" key={index}>
          <div className="card card-sm slider-card">
            <p className="body-3">
              {getHours(dateTimeUnix, fiveDayData.timezone)}
            </p>
            <img
              src={`/images/weather_icons/${icon}.png`}
              alt={description}
              className="weather-icon"
              width={48}
              height={48}
              loading="lazy"
              title=""
            />
            <p className="body-3">{`${parseInt(temp)}°c`}</p>
          </div>
        </li>
      );
    });
  };

  const renderWindForecast = () => {
    return fiveDayData.forecastList.slice(0, 7).map((data, index) => {
      const {
        dt: dateTimeUnix,
        weather,
        wind: { deg: windDireaction, speed: windSpeed },
      } = data;
      const [{ icon, description }] = weather;
      return (
        <li className="slider-item" key={index}>
          <div className="card card-sm slider-card">
            <p className="body-3">
              {getHours(dateTimeUnix, fiveDayData.timezone)}
            </p>
            <img
              src="/images/weather_icons/direction.png"
              alt={description}
              className="weather-icon"
              style={{
                transform: `rotate(${windDireaction}deg)`,
              }}
              width={48}
              height={48}
              loading="lazy"
              title=""
            />
            <p className="body-3">{parseInt(mps_to_kmh(windSpeed))}km/h</p>
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <ul className="slider-list" data-temp>
        {renderWeatherForecast()}
      </ul>

      <ul className="slider-list" data-wind>
        {renderWindForecast()}
      </ul>
    </>
  );
};

export default HourlyForecast;
