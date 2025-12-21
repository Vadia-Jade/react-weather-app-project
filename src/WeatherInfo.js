import React from "react";
import  "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props){
    return (
        <div className="WeatherInfo">
           <h2>Todays Weather in:</h2>
              <h1>{props.data.city}</h1>
                 <div className="row mt-3">
                      <div className="col-6">
                        <div>
                        <WeatherIcon code ={props.data.icon} size={52}/>
                         </div>
                         <div>
                          <WeatherTemperature celsius={props.data.temperature} />
                         </div>
                      </div>
                      
                     <div className="col-6">
                        <div className="info-weather-description">
                         <ul>
                             <li>
                              <FormattedDate date={props.data.date} timezone={props.data.timezone} />
                              </li>
                              <br />
                             <li>Humidity: {props.data.humidity}%</li>
                             <li>Wind: {props.data.wind} km/h</li>
                             <li className="text-capitalize">{props.data.description}</li>
                         </ul>
                     </div>
                     </div>
              </div>
        </div>
    );
}
