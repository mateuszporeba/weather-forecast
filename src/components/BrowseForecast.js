import React, { useState, useEffect } from 'react';
import InputField from './InputField.js'
import "./BrowseForecast.css";

import bacgroundImage from '../images/clouds_bacground.jpg';


export default function BrowseForecast(props) {

  const [inputValue, setInputValue] = useState("London");

  const OnInputData = (inputCity) => {
    setInputValue(inputCity);
  }

  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //     .then(res => res.json())
  //     .then(data => props.forecastData(data))
  //     .catch(error => console.log("ERROR"));
  // }, [inputValue]);

  // const checkForecast = () => {
  //   fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //     .then(res => {
  //       if (res.status === 200) {
  //         res.json();
  //         console.log('res.json() works');
  //       } else {
  //         throw new Error('Something went wrong');
  //       }
  //       console.log(res);
  //       console.log(res.ok);
  //       console.log(res.status);
  //     })
  //     .then(data => props.forecastData(data))
  //     .then(data => console.log(data))
  //     .catch(error => console.log("ERROR"));
  // }
  // const checkForecast = async () => {
  //   await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //     .then(res => {
  //       console.log(res.status)
  //       if (res.status !== 200) {
  //         console.log('tutaj');
  //         throw new Error('Something went wrong');
  //       }
  //       console.log('res ' + res);
  //       res.json();
  //       console.log('res ' + res);
  //     })
  //     .then(data => {
  //       props.forecastData(data)
  //       console.log(data);
  //     }
  //     )
  //     .then(data => console.log(data))
  //     .catch(error => console.log("ERROR"));
  // }
  // const checkForecast1 = () => {
  //     fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
  //       .then(res => res.json())
  //       .then(data => props.forecastData(data))
  //       .then(data => console.log(data))
  //       .catch(error => console.log("ERROR"));
  // }
  const [forecast, setForecast] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    const result = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + inputValue + '&appid=' + process.env.REACT_APP_API_KEY)
    result.json().then(json => {
      props.forecastData(json);
      setForecast(false);
    })
  }
  fetchData();
}, [forecast]);

  const clickHandler = () => {
    setForecast(true);

    console.log('klik');
    //checkForecast(inputValue);
  }

  return (
    <div className='browseForecastContainer'>

      <InputField forecastInputValue={OnInputData} recommendedCityClick={clickHandler} />

      <div className='buttonPadding'   >
        <button className='' onClick={clickHandler}>
          Check Forecast!
        </button>
      </div>

    </div >
  )
}
