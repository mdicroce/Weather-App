import axios from "axios";
require('dotenv').config();

const options = {
    method: 'GET',
    url: 'https://referential.p.rapidapi.com/v1/country',
    params: {
      fields: 'key,currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code',
      sort: 'name'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIAPI_KEY,
      'x-rapidapi-host': 'referential.p.rapidapi.com'
    }
  };

export const weatherCurrent = (city) => {
  const optionsWeather = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {q: city.city.value, units: 'metric',lang:'es'},
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIAPI_KEY,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    }
    
    return axios.request(optionsWeather).then(response => response)
}
export const weather = (city) => {
    const optionsWeather = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
      params: {q: city.city.value, units: 'metric',lang:'es'},
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIAPI_KEY,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    }
    
    return axios.request(optionsWeather).then(response => response)
}
export const pepe = () => {return axios.request(options).then(function (response) {
	return response.data
}).catch(function (error) {
	console.error(error);
});
}

export const listOfCities = (selectedCountry) => 
{

    const citiesOptions = {
        method: 'GET',
        url: 'https://referential.p.rapidapi.com/v1/city',
        params: {
          fields: 'iso_a2,state_code,state_hasc,timezone,timezone_offset',
          ...selectedCountry,
          sort:'name'
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIAPI_KEY,
          'x-rapidapi-host': 'referential.p.rapidapi.com'
        }
      }
    
    return axios.request(citiesOptions).then(function (response) {
        return response.data
    }).catch(function (error) {
        console.error(error);
    }); 
}