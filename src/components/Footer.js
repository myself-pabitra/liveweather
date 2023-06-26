import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="body-3">Copyright 2023 Pabitra. All Rights reserved.</p>
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
  );
};

export default Footer;
