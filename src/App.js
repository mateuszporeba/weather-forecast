import React, { useState, useEffect } from 'react';
import "./App.css";

import WeatherData from "./components/WeatherData.js";
import BrowseForecast from './components/BrowseForecast.js';

import headerImg from './images/wallpaper_cloud.jpg';

function App() {
  const [data, setData] = useState({});
  const [showForecast, setShowForecast] = useState(false);

  const onForecastData = (forecastObj) => {
    setData(forecastObj)
    setShowForecast(true);
  }
  
  let dataContent = '';
  if (data != null) {
    dataContent = <WeatherData data={data} />
  }

// /{showForecast &&  <WeatherData data={data} />}


  return (
    <div>
      <div className="container" style={{ backgroundImage: `url(${headerImg})` }}>

      </div>
      <div className='headerContainer' ></div>
      <div className='header'>
        <h1 className=''>Weather Forecast</h1>
      </div>

      <BrowseForecast forecastData={onForecastData} />

      {showForecast &&  dataContent}

    </div>
  );
}

export default App;