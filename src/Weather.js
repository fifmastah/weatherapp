import { useState } from "react";

const Weather = (props) => {
  const [weatherState, setWeatherState] = useState([
    { date: getMyDay(props.myWeather.data[0].datetime) },
    { date: getMyDay(props.myWeather.data[1].datetime) },
    { date: getMyDay(props.myWeather.data[2].datetime) },
    { date: getMyDay(props.myWeather.data[3].datetime) },
    { date: getMyDay(props.myWeather.data[4].datetime) },
    { date: getMyDay(props.myWeather.data[5].datetime) },
    { date: getMyDay(props.myWeather.data[6].datetime) },
  ]);

  function getMyDay(nums) {
    var newDay = new Date(nums);
    var realDay = newDay.getDay();
    if (realDay == 0) {
      return "Sunday";
    }
    realDay = realDay + 1;
    if (realDay == 1) {
      return "Monday";
    } else if (realDay == 2) {
      return "Tuesday";
    } else if (realDay == 3) {
      return "Wednesday";
    } else if (realDay == 4) {
      return "Thursday";
    } else if (realDay == 5) {
      return "Friday";
    } else if (realDay == 6) {
      return "Saturday";
    }
  }
  return (
    <div className="box-background">
      <div className="weather-boxes">
        {weatherState.map((block) => {
          return (
            <div className="weather-box">
              <i id="degree" className="far fa-circle"></i>
              <i id="weathericon" className="fas fa-cloud-rain"></i>
              <div className="date">{block.date}</div>
              {console.log(block.date)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
