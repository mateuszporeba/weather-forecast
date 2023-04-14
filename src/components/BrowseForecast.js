import React, { useState, useEffect } from 'react';
import InputField from './InputField.js'
import "./BrowseForecast.css";

import bacgroundImage from '../images/clouds_bacground.jpg';


export default function BrowseForecast(props) {

  const [inputValue, setInputValue] = useState("London");

  const OnInputData = (inputCity) => {
    setInputValue(inputCity);
  }

  const checkForecast = () => {

    fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
      .then(res => res.json())
      .then(data => {
        props.forecastData(data);
      })
      .catch(error => console.log("ERROR"));
  }

  const clickHandler = () => {
    checkForecast(inputValue);
  }
  return (
    <div className='browseForecastContainer'>

      <InputField forecastInputValue={OnInputData} />

      <div className='buttonPadding'   >
        <button className='' onClick={clickHandler}>
          Check Forecast!
        </button>
      </div>

    </div >
  )
}
