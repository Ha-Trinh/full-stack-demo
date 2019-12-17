import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2/'
const getAllDataCountries = () => {
  return axios.get(`${baseURL}all`)
}
const getDataCountriesWeather = (capital) => {
  return axios.get(`http://api.weatherstack.com/current?access_key=fdfec910ca96b0c9ccebdb4d01f596a7&query=${capital}`)
}
const getDataCountriesFilter = (name) => {
  return axios.get(`${baseURL}name/${name}`)
}
export default { getAllDataCountries, getDataCountriesWeather, getDataCountriesFilter }
