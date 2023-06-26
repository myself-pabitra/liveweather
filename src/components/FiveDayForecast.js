import React, { useContext } from "react";
import weatherContext from "../context/WeatherContext";
import { WeekDayNames, monthNames } from "../context/module";
const FiveDayForecast = () => {
  const context = useContext(weatherContext);
  const { fiveDayData } = context;

  const { forecastList } = fiveDayData;

  const renderFiveDayForecast = () => {
    const forecastItems = [];
    for (let i = 7, len = forecastList.length; i < len; i += 8) {
      const {
        main: { temp_max },
        weather,
        dt_txt,
      } = forecastList[i];
      const [{ icon, description }] = weather;
      const date = new Date(dt_txt);
      forecastItems.push(
        <li className="card-item" key={i}>
          <div className="icon-wrapper">
            <img
              src={`/images/weather_icons/${icon}.png`}
              width={36}
              height={36}
              alt={description}
              className="weather-icon"
              title={description}
            />
            <span className="span">
              <p className="title-2">{parseInt(temp_max)}&deg;</p>
            </span>
          </div>

          <p className="label-1">
            {date.getDate()} {monthNames[date.getUTCMonth()]}
          </p>
          <p className="label-1">{WeekDayNames[date.getUTCDay()]}</p>
        </li>
      );
    }
    return forecastItems;
  };

  return <ul>{renderFiveDayForecast()}</ul>;
};

export default FiveDayForecast;
