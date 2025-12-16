import React from "react";
import "./Weather.css";

export default function Weather(){
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
                        <li>Cloudy</li>
                     </ul>
                   <div className="row mt-3">
                       <div className="col-6">
                          <img src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
                             alt="Cloudy" 
                            />
                              <span className="temperature">11</span>
                               <span className="unit">°C|°F</span>
                        </div>
                 
                     <div className="col-6">
                         <ul>
                            <li>Precipitation: 10%</li>
                           <li>Humidity: 80%</li>
                           <li>Wind: 5 km/h</li>
                        </ul>
                    </div>
                 </div>
             </main>
             <footer>
                <p>
                  This Project was Coded by Jade Coster and is open-sourced on {""}
                  <a href="https://github.com/Vadia-Jade/react-weather-app-project" target="_blank" rel="noreferrer">GitHub</a> {""}
                  and is hosted on {""} 
                  <a href="https://stalwart-medovik-544a4b.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
               </p>
            </footer>
        </div>
    );
}
