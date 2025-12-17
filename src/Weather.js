import React, { useState }from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
  const [weatherData, setWeatherData] = useState ({ready:false})
  const [city, setCity] = useState(props.defaultCity)
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
      iconUrl:"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
    });
  }
   function search(){
     const apiKey = "034407t747af2dfd1c31bo02c7fc4156"
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function updateCity(event){
    setCity(event.target.value)
  }
 
  if ( weatherData.ready){
      return(
        <div className="Weather">
            <header>
              <form onSubmit={handleSubmit}>
                 <div className="row">
                     <div className="col-9">
                         <input type="search" placeholder="Enter a City.." className="form-search" autoFocus="on" onChange={updateCity}/>
                      </div>
                       <div className="col-3">
                          <input type="submit" value="Search" className="form-button w-100"/>
                       </div>
                  </div>
              </form> 
            </header>
            <main>
              < WeatherInfo data={weatherData} />   
             </main>
        </div>
    );
  } else {
      search()

   return "Loading..."
  }
   
  
}
