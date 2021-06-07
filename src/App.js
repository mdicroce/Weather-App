import './App.css';
import {pepe, listOfCities, weather} from './services/axios' 
import React, { useEffect, useState } from 'react'
import {DateTime} from 'luxon'
require('dotenv').config()

function App() {
  const [countryInfo, setCountryInfo] = useState([{}])
  const[city,setCity] = useState([])
  const [selected, setSelected] = useState({})
  const [weatherNow, setWeatherNow] = useState('')
  useEffect(()=>{
    pepe()
    .then((response)=>{
      setCountryInfo(response)
    })
  },[])
  useEffect(()=>{
    if(selected.country)
    {
      listOfCities(selected.country.key)
      .then((response)=>{
        setCity(response)
      })
    }
  },[selected.country])
  useEffect(()=>{
    if(selected.city)
    {
      weather(selected)
      .then(response=>setWeatherNow(response.data))
    }
  },[selected])
  const onChangeCountry = (event) => {
    
    const final = JSON.parse(event.target.value)
    setSelected({...selected,country: final})
  }
  const onChangeCity = (event) => 
  {
    const final = JSON.parse(event.target.value)
    setSelected({...selected, city: final})
  }
  return (
    <div className="h-100 container bg-primary">
      {__dirname}
      <img src={`${__dirname}SVG/Nublado.svg`}></img>
      <div className="container p-5">
        {countryInfo && <SelectFrom onChangeHandler= {onChangeCountry} selection={countryInfo} />}
        {city.length>0 && <SelectFrom onChangeHandler= {onChangeCity} selection = {city}/>}
        
        
      </div>
      {weatherNow ? <ShowWeather weather={weatherNow} ciudad={selected.city}/>: ""}
    </div>
  );
}

const SelectFrom = (props) => {
  return (
    <div>
      <select className='mb-3 form-select form-select-sm' onInput={props.onChangeHandler} >
        <option value="" disable hidden>Please Choose...</option>
        {props.selection.map((actual,index)=> {
          return (<option value={JSON.stringify({value: actual.value, key: actual.key, timeZone: actual.timezone})} key={actual.value+index}>{actual.value}</option>)
        })}
      </select>
    </div> 
  )
}

const ShowWeather = (props) => {
  
  return (<div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Day time</th>
          <th scope="col">Temperature</th>
          <th scope="col">Feel Like</th>
          <th scope="col">pressure</th>
          <th scope="col">humidity</th>
          <th scope="col">weather</th>
        </tr>
      </thead>
      <tbody>
        {
          props.weather.list.map((actual)=>{
            
            const dAndH = DateTime.fromMillis(actual.dt*1000).setZone(props.ciudad.timeZone).toLocaleString(DateTime.DATETIME_SHORT)
            return(
              <tr>
                <th scope="row">{dAndH}</th>
                <td>{actual.main.temp}</td>
                <td>{actual.main.feels_like}</td>
                <td>{actual.main.pressure}</td>
                <td>{actual.main.humidity}</td>
                <td>{actual.weather[0].description}</td>
              </tr>
            )
          })
        }
        <tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
export default App;
