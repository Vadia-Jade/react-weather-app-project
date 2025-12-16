import React, { useState }from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
  const [weatherData, setWeatherData] = useState ({ready:false})
  function handleResponse(response){
    setWeatherData({
      ready:true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
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
                     <h1>Madrid</h1>
                     <ul>
                        <li>Monday: 15:00</li>
                        <li>{weatherData.description}</li>
                     </ul>
                   <div className="row mt-3">
                       <div className="col-6">
                          <img src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                             alt="Cloudy" 
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
  let city = "Lisbon"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
   return "Loading..."
  }
   
  
}
