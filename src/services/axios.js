import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://referential.p.rapidapi.com/v1/country',
    params: {
      fields: 'key,currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code'
    },
    headers: {
      'x-rapidapi-key': '1b44a8727emsh408e48b272336cbp14accajsn7a2b31e3c852',
      'x-rapidapi-host': 'referential.p.rapidapi.com'
    }
  };

export const weather = (city) => {
    const optionsWeather = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
      params: {q: city.city.value, units: 'metric',lang:'es'},
      headers: {
        'x-rapidapi-key': '1b44a8727emsh408e48b272336cbp14accajsn7a2b31e3c852',
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

export const listOfCities = (selectedCountry) => {
    const citiesOptions = {
        method: 'GET',
        url: 'https://referential.p.rapidapi.com/v1/city',
        params: {
          fields: 'iso_a2,state_code,state_hasc,timezone,timezone_offset',
          iso_a2: selectedCountry,
        },
        headers: {
          'x-rapidapi-key': '1b44a8727emsh408e48b272336cbp14accajsn7a2b31e3c852',
          'x-rapidapi-host': 'referential.p.rapidapi.com'
        }
      }
    
    return axios.request(citiesOptions).then(function (response) {
        return response.data
    }).catch(function (error) {
        console.error(error);
    }); 
}