import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2/'
const getAllDataCountries = () => {
  const request = axios.get(`${baseURL}all`)
  return request.then(response => response.data)
}
const getDataCountriesWeather = (capital) => {
  return axios.get(`http://api.weatherstack.com/current?access_key=fdfec910ca96b0c9ccebdb4d01f596a7&query=${capital}`)
}
const getDataCountriesFilter = (name) => {
  return axios.get(`${baseURL}name/${name}`)
}
export default { getAllDataCountries, getDataCountriesWeather, getDataCountriesFilter }
