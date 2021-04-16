const Weather = (props) => {


const myWeather = props.myWeather.current.temp_f

return (

<div>

<i id = "degree" className ="far fa-circle"></i>
<i id = "weathericon" className ="fas fa-cloud-rain"></i>
<div className = "day">{Math.round(myWeather)^("o")}</div>

</div>

)

}


export default Weather
