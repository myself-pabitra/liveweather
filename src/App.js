import "./App.css";
import Home from "./components/Home";
import WeatherProvider from "./context/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
