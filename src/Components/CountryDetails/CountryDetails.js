import React from 'react';
import './CountryDetails.css';
import CountryWeather from '../CountryWeather/CountryWeather';

const CountryDetails = ({ countriesArray }) => {
  const countryInfo = () => {
    if (countriesArray.length === 1) {
      const countryDetails = countriesArray[0];

      const contryLanguages = () => {
        return countriesArray[0].languages.map(lang => <li className="country-lang" key={lang.name}>{lang.name}</li>)
      }

      return (
        <div className="Country-details">
          <h2>{countryDetails.name}</h2>
          <h5>{countryDetails.nativeName}</h5>
          <p>Capital: {countryDetails.capital}</p>
          <p>Population: {countryDetails.population}</p>
          <h5>Languages:</h5>
          <ul>
            {contryLanguages()}
          </ul>
          <div className="Country-flag">
            <img src={countryDetails.flag} className="Country-flag-content" alt="logo"/>
          </div>
          <CountryWeather capital={countryDetails.capital}/>
        </div>
      )
    }
  }
  return (
    <div className="Country-content">
      {countryInfo()}
    </div>
  );
}

export default CountryDetails;
