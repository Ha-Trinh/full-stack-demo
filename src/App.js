import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryFilter from './Components/CountryFilter/CountryFilter';
import CountryList from './Components/CountryList/CountryList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import Service from './Service/Service';

function App() {
  const [countriesArray, setContriesArray] = useState([])
  const [countryNameFilter, setCountryName] = useState('')

  useEffect(() => {
    Service.getAllDataCountries()
      .then(response => {
        setContriesArray(response)
      })
  }, [])
  const handleFilterCountry = (name) => {
    setCountryName(name)
    if (name) {
      Service.getDataCountriesFilter(name)
        .then(response => {
          setContriesArray(response.data)
        }).catch(error => {
          setContriesArray([])
        })
    } else {
      Service.getAllDataCountries()
        .then(response => {
          setContriesArray(response)
        })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountryFilter countryName={countryNameFilter} onChangeHandleFilterCountry={handleFilterCountry}/>
        <CountryList countriesArray={countriesArray}/>
        <CountryDetails countriesArray={countriesArray}/>
      </header>
    </div>
  );
}

export default App;
