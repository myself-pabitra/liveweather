import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";

// import { fetchWeatherData } from "./services/weatherServices";
// import getFormattedWeatherData from "./services/weatherServices";

function App() {
  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData({ q: "kolkata" });
  //   console.log(data);
  // };
  // fetchWeather();

  // const currentWeather = async () => {
  //   fetchWeatherData("weather", { q: "kolkata" });
  // };
  // currentWeather();
  return (
    <div className="App">
      {/* <Header /> */}
      <Home />
      {/* <SearchResult /> */}
    </div>
  );
}

export default App;
