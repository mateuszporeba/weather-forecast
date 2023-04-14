import React from 'react'

import Table from 'react-bootstrap/Table';
import './WeatherData.css';
export default function WeatherData(props) {

    const data = props.data;

    const weatherImg = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    //colSpan={2}
    return (
        <div className='dataContainer'>

            <h2>WeatherData</h2>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Temperature</th>
                        <th>Wind</th>
                        <th>Desciption</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Actual: {data.main.temp} °C</td>
                        <td>Wind:    {data.wind.speed}</td>
                        <td><img src={weatherImg}></img></td>
                    </tr>
                    <tr>
                        <td>Min: {data.main.temp_min} °C</td>
                        <td></td>
                        <td>{data.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td>Max: {data.main.temp_max} °C</td>
                        <td ></td>
                        <td>1</td>
                    </tr>
                </tbody>

            </Table>
            <div className='dataContainerBacground'>
            </div>

        </div >
    )
}
