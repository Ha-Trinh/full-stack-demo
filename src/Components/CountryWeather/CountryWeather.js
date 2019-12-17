import React, { useState, useEffect } from 'react';
import './CountryWeather.css';
import { getDataCountriesWeather } from '../../Service/Service';

const CountryWeather = ({ capital }) => {
  const [countryWeather, setcountryWeather] = useState({})
  useEffect(() => {
    // const dataWeather = getDataCountriesWeather(capital)
    // dataWeather.then(response => {
    //   setcountryWeather(response.data)
    // })
  }, [])

  if (Object.keys(countryWeather).length !== 0) {
    return (
      <div className="Country-weather">
        <h5>Weather in {countryWeather.location.name}</h5>
        <p>Temperature: {countryWeather.current.temperature} Celsius</p>
        <img src={countryWeather.current.weather_icons[0]} className="Country-weather-icon" alt="logo"/>
        <p>Wind: {countryWeather.current.wind_speed} kph direction {countryWeather.current.wind_dir}</p>
      </div>
    )
  } else {
    return (
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    )
  }
}

export default CountryWeather;
