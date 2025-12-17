import React, { useState }from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const [weatherData, setWeatherData] = useState ({ready:false})
  function handleResponse(response){
  
    setWeatherData({
      ready:true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round( response.data.wind.speed *  3.6),
      date:new Date(response.data.time * 1000),
      icon:response.data.condition.icon,
      iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
    });
    
  }
  if ( weatherData.ready){
      return(
        <div className="Weather">
            <header>
              <form>
                 <div className="row">
                     <div className="col-9">
                         <input type="search" placeholder="Enter a City.." className="form-search" autoFocus="on"/>
                      </div>
                       <div className="col-3">
                          <input type="submit" value="Search" className="form-button w-100"/>
                       </div>
                  </div>
              </form> 
            </header>
            <main>
                     <h2>Todays Weather in:</h2>
                     <h1>{weatherData.city}</h1>
                     <ul>
                        <li>
                          <FormattedDate date={weatherData.date} />
                        </li>
                        <li className="text-capitalize">{weatherData.description}</li>
                     </ul>
                   <div className="row mt-3">
                       <div className="col-6">
                          <img src={weatherData.iconUrl}
                             alt={weatherData.description}
                            />
                              <span className="temperature">{Math.round(weatherData.temperature)}</span>
                               <span className="unit">°C|°F</span>
                        </div>
                     <div className="col-6">
                         <ul>
                           <li>Humidity: {weatherData.humidity}%</li>
                           <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                 </div>
             </main>
        </div>
    );
  } else {
  const apiKey = "034407t747af2dfd1c31bo02c7fc4156"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

   return "Loading..."
  }
   
  
}
