import React, { useState, useEffect } from "react";
import Header from "./Header";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <>
      <Header />
      <main>
        {/* container */}
        <article className="container" data-container>
          <div className="container-left">
            {/*  Current weather section */}
            <section
              className="section current-weather"
              aria-label="current weather"
              data-current-weather
            >
              <div className="card card-lg current-weather-card">
                <h2 className="title-2 card-title">Now</h2>
                <div className="wrapper">
                  <p className="heading">25&deg;c</p>

                  <img
                    src="/images/weather_icons/01d.png"
                    alt="Overcast clouds"
                    width="64"
                    height="64"
                    className="weather-icon"
                  />
                </div>
                <p className="body-3">Overcast Clouds</p>
                <ul className="meta-list">
                  <li className="meta-item">
                    <span className="m-icon">calendar_today</span>
                    <p className="title-3 meta-text">Thursday 16, Feb</p>
                  </li>
                  <li className="meta-item">
                    <span className="m-icon">location_on</span>
                    <p className="title-3 meta-text">London, GB</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Forcast weather section  */}

            <section
              className="section forecast"
              aria-labelledby="forecast-label"
              data-5-day-forecast
            >
              <h2 className="title-2" id="forecast-label">
                5 days Forecast
              </h2>
              <div className="card card-lg forecast-card">
                <ul>
                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src="/images/weather_icons/01n.png"
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">23 Feb</p>
                    <p className="label-1">Saturday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src="/images/weather_icons/01n.png"
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">23 Feb</p>
                    <p className="label-1">Saturday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src="/images/weather_icons/01n.png"
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">23 Feb</p>
                    <p className="label-1">Saturday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src="/images/weather_icons/01n.png"
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">23 Feb</p>
                    <p className="label-1">Saturday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src="/images/weather_icons/01n.png"
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">23 Feb</p>
                    <p className="label-1">Saturday</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="container-right">
            {/* highlights */}
            <section
              className="section highlights"
              aria-labelledby="highlights-label"
              data-highlights
            >
              <div className="card card-lg">
                <h2 className="title-2" id="highlights-label">
                  Todays Highlights
                </h2>
                <div className="highlight-list">
                  <div className="card card-sm highlight-card one">
                    <h3 className="title-3">Air Quality Index</h3>

                    <div className="wrapper">
                      <span className="m-icon">air</span>

                      <ul className="card-list">
                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="title-1">
                            PM<sub>2.5</sub>
                          </p>
                        </li>

                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="title-1">
                            PM<sub>2.5</sub>
                          </p>
                        </li>

                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="title-1">
                            PM<sub>2.5</sub>
                          </p>
                        </li>

                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="title-1">
                            PM<sub>2.5</sub>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <span className="badge aqi-1 label-1" title="aqi message">
                      Good
                    </span>
                  </div>

                  <div className="card card-sm highlight-card two">
                    <h3 className="title-3">Sunrise & Sunset</h3>
                    <div className="card-list">
                      <div className="card-item">
                        <span className="m-icon">clear_day</span>
                        <div>
                          <p className="label-1">Sunrise</p>
                          <p className="label-1">6:30 AM</p>
                        </div>
                      </div>
                      <div className="card-item">
                        <span className="m-icon">clear_night</span>
                        <div>
                          <p className="label-1">Sunset</p>
                          <p className="label-1">5:54 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Humidity</h3>
                    <div className="wrapper">
                      <span className="m-icon">humidity_percentage</span>
                      <p className="title-1">
                        60<sub>%</sub>
                      </p>
                    </div>
                  </div>
                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Preassure</h3>
                    <div className="wrapper">
                      <span className="m-icon">airwave</span>
                      <p className="title-1">
                        1052<sub>hpa</sub>
                      </p>
                    </div>
                  </div>
                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Visibility</h3>
                    <div className="wrapper">
                      <span className="m-icon">visibility</span>
                      <p className="title-1">
                        10<sub>km</sub>
                      </p>
                    </div>
                  </div>
                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Feels Like</h3>
                    <div className="wrapper">
                      <span className="m-icon">thermostate</span>
                      <p className="title-1">
                        25&deg;<sub>c</sub>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hourly Forecast */}

            <section
              className="section hourly-forecast"
              aria-label="hourly forecast"
              data-hourly-forecast
            >
              <h3 className="title-2">Today at</h3>
              <div className="slider-container">
                <ul className="slider-list" data-temp>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/01n.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/01n.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/01n.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/01n.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/01n.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/01n.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/01n.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                </ul>

                <ul className="slider-list" data-wind>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/direction.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">12km/h</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/direction.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">12km/h</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/direction.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">12km/h</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/direction.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">12km/h</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/direction.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">12km/h</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/direction.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">12km/h</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src="/images/weather_icons/direction.png"
                        alt=""
                        className="weather-icon"
                        width={48}
                        height={48}
                        loading="lazy"
                        title=""
                      />
                      <p className="body-3">12km/h</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            {/* FOOTER SECTION */}

            <footer className="footer">
              <p className="body-3">
                Copyright 2023 Pabitra. All Rights reserved.
              </p>
              <p className="body-3">
                Powered By
                <a
                  href="https://openweathermap.org/api"
                  title="Free OpenWeather API"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/openweather.png"
                    alt="OpenWeather"
                    width={150}
                    height={30}
                    loading="lazy"
                  />
                </a>
              </p>
            </footer>
          </div>
          {/* loading */}
          <div className="loading" data-loading></div>
        </article>
      </main>
      {/* #404 SECTION */}
      {/* error content */}
      <section className="error-content" data-error-content>
        <h2 className="heading">404</h2>
        <p className="body-1">Page not found!</p>
        <a href="/" className="btn-primary">
          <span className="span">Go Home</span>
        </a>
      </section>
    </>
  );
};

export default Home;
