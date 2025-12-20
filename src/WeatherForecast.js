import React, { useState, useEffect } from "react";
import axios from "axios"
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props){
    let[loaded, setLoaded]= useState(false);
    let [forecast , setForecast] = useState (null);

    useEffect (() => {
        setLoaded(false);
    },[props.coordinates]);

    function handleResponse(response){
      setForecast(response.data.daily);
      setLoaded(true);
    }
    if (loaded) {
        console.log(forecast);
          return(
             <div className="WeatherForecast">
                <h2>The forecast for the next five days is :</h2>
              <div className="row">
                 {forecast.map(function (dailyForecast, index) {
                if (index < 6 ) {
                  return(
                     <div className="col" key={index}>
                       <WeatherForecastDay data={dailyForecast} />
                    </div>
                  ); 
                } else{
                    return null;
                }
            })}
        </div>
    </div>
    ); 
   } else {
      let apiKey = "034407t747af2dfd1c31bo02c7fc4156";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
    } 
}