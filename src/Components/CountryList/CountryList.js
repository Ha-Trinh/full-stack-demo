import React, { useState } from 'react';
import './CountryList.css';
import CountryDetails from '../CountryDetails/CountryDetails';

const CountryList = ({ countriesArray }) => {
  const [countryDetails, setcountryDetails] = useState('')
  function showCountryDetails(name) {
    setcountryDetails(name)
  }
  function hideCountryDetails() {
    setcountryDetails('')
  }

  const countriesList = () => {
    if (countriesArray.length > 1) {
      return countriesArray.map(country =>
        <li className="country-item" key={country.name}>
          <div className="country-item-content">
            <img src={country.flag} className="country-flag-content" alt="logo"/>
            {country.name }
            {countryDetails !== country.name && <button className="btn-show-details" onClick={() => showCountryDetails(country.name)}>Show Details</button>}
            {countryDetails === country.name && <button className="btn-show-details" onClick={() => hideCountryDetails()}>Hide Details</button>}
          </div>
          {countryDetails === country.name &&  <CountryDetails countriesArray={[country]}/>}
        </li>)
    }
  }

  return (
    <div className="Country-list">
      <ul>
        {countriesList()}
      </ul>
    </div>
  );
}

export default CountryList;
