import React from 'react';
import './CountryFilter.css';

const CountryFilter = ({ countryName, onChangeHandleFilterCountry }) => {
  const onChangeHandle = (event) => {
    onChangeHandleFilterCountry(event.target.value)
  }
  return (
    <div className="Country-filter">
      <p className="Country-filter-title">
        Find Countries
      </p>
      <input type="text"
             className="Country-filter-input"
             placeholder="Country" value={countryName} onChange={onChangeHandle}/>
    </div>
  );
}

export default CountryFilter;
