import { useState } from "react";
  import { useEffect } from "react";

const Weather = (props) => {
  const [weatherState, setWeatherState] = useState([
    { date: getMyDay(props.myWeather.data[0].datetime), htemp: celsToFahren(props.myWeather.data[0].max_temp)},
    { date: getMyDay(props.myWeather.data[1].datetime), htemp: celsToFahren(props.myWeather.data[1].max_temp)},
    { date: getMyDay(props.myWeather.data[2].datetime),htemp: celsToFahren(props.myWeather.data[2].max_temp)},
    { date: getMyDay(props.myWeather.data[3].datetime) ,htemp: celsToFahren(props.myWeather.data[3].max_temp)},
    { date: getMyDay(props.myWeather.data[4].datetime), htemp: celsToFahren(props.myWeather.data[4].max_temp)},
    { date: getMyDay(props.myWeather.data[5].datetime), htemp: celsToFahren(props.myWeather.data[5].max_temp)},
    { date: getMyDay(props.myWeather.data[6].datetime) ,htemp: celsToFahren(props.myWeather.data[6].max_temp)}
  ]);



  function celsToFahren(cels) {
    cels = (9*cels+(32*5))/5;
    return (Math.round(cels));
  }


  function getMyDay(nums) {
    var newDay = new Date(nums);
    var realDay = newDay.getDay();
    if (realDay == 0) {
      return "Monday";
    } else if (realDay == 1) {
      return "Tuesday";
    } else if (realDay == 2) {
      return "Wednesday";
    } else if (realDay == 3) {
      return "Thursday";
    } else if (realDay == 4) {
      return "Friday";
    } else if (realDay == 5) {
      return "Saturday";
    } else if (realDay == 6) {
      return "Sunday"
    }


  }
  return (
    <div className="box-background">
      <div className="weather-boxes">
        { weatherState.map((block) => {
          return (
            <div className="weather-box">
              <i id="degree" className="far fa-circle"></i>
              <i id="weathericon" className="fas fa-cloud-rain"></i>
              <div className="date">{block.date}</div>
              <div className="htemp">{block.htemp}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
