import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
           <footer>
                <p>
                  This Project was Coded by Jade Coster and is open-sourced on {""}
                  <a href="https://github.com/Vadia-Jade/react-weather-app-project" target="_blank" rel="noreferrer">GitHub</a> {""}
                  and is hosted on {""} 
                  <a href="https://stalwart-medovik-544a4b.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
               </p>
            </footer>
      </div>
    </div>
  );
}


