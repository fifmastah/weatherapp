import "./index.css";
import Weather from "./Weather";
import Icon from "./Icon";
import { useState } from "react";
import { useEffect } from "react";
const fetch = require("node-fetch");

function App() {
  const [weatherValue, setWeatherValue] = useState("");
  const [acquired, setAcquired] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("prevented");
      fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${weatherValue}&key=21aa134183484e29af75f9b2368e6177`
      )
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setAcquired(data);
        });
    }
  };

  return (
    <div className="App">
      <div className="app-content">
        <div className="weather-searchbar">
          <form id="myform">
            <input
              type="text"
              id="input-field"
              name="user_weather-location"
              required
              value={weatherValue}
              onChange={(e) => {
                setWeatherValue(e.target.value);
              }}
              onKeyPress={(e) => handleKeyPress(e)}
            />
          </form>
          <Icon />
        </div>
        <div>
          {acquired && (
            <div>
              <Weather myWeather={acquired} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
