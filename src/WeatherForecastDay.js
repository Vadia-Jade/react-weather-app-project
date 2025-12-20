import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props){
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return`${temperature}`;
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}`
    }
    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    return(
        <div>
        <div className="forecast-day">{day()}</div>
           <WeatherIcon code={props.data.condition.icon} size={34}/>
          <div className="forecast-temp">
          <span className="forecast-temp-max">{maxTemperature()}°</span>
          <span className="forecast-temp-min">{minTemperature()}°</span>
         </div>
        </div>
    );
}