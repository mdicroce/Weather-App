import './App.css';
import {weatherCurrent, listOfCities, weather} from './services/axios' 
import React, { useEffect, useState } from 'react'
import {DateTime} from 'luxon'
import {ClimateShow} from './elements/ClimateShow'
import clouds from './IMG/clouds.jpg'

require('dotenv').config()

function App() {
  const[city,setCity] = useState([])
  const [selected, setSelected] = useState({})
  const [weatherNow, setWeatherNow] = useState('')
  const [currentWeather, setCurrentWeather] = useState('')

  useEffect(()=>{
    if(selected.city)
    {
      weather(selected)
      .then(response=>setWeatherNow(response.data))
      weatherCurrent(selected)
      .then(response => setCurrentWeather(response.data))
    }
    
  },[selected])

  const onChangeHandler = (event) => {
    setCity(event.target.value);
  }
  const onSubmitHandler = (event) =>{
    event.preventDefault();
    listOfCities({name: city})
    .then(response => setSelected({city: response[0]}))
    
  }
  const onChangeCity = (event) => 
  {
    const final = JSON.parse(event.target.value)
    setSelected({...selected, city: final})
  }
  return (
    <div style={style1}className="">
      <header >
        
       <h1 className="text-center display-1 mb-1">Weather App </h1>

      </header>
      <div className="container p-5">
        <CityFinder cityValue={city} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
      </div>
      <div style={style1} className="bg-primary">
        {currentWeather ? <ShowWeather weather={currentWeather} ciudad={selected.city}/>: ""}
        {weatherNow ? <ShowWeather weather={weatherNow} ciudad={selected.city}/>: ""}

      </div>
    </div>
  );
}







const CityFinder = (props) =>{
  return(
    <div className="container ">
      <form>
        <input value={props.cityValue} onChange={props.onChangeHandler} className="form-control" type="search"/>
        <button type="submit" className="btn btn-primary w-100" onClick={props.onSubmitHandler}>Search City</button>
      </form>
    </div>
  )
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
  const mapFunction = (actual) => {
    const dAndH = DateTime.fromMillis(actual.dt*1000).setZone(props.ciudad.timeZone).toLocaleString(DateTime.DATETIME_SHORT)
      const climate = {
        hour : dAndH,
        temp : actual.main.temp,
        feels_like : actual.main.feels_like,
        climateImage : actual.weather[0].icon,
        weather: actual.weather[0].description,
        pop: actual.pop
      }
      return(
        <ClimateShow climate={JSON.stringify(climate)}/>
      )

  }
  return (<div className="d-flex flex-sm-wrap container">
  {
    props.weather.list ? 
      props.weather.list.map(mapFunction)
      :
      mapFunction(props.weather)
  }
  </div>
  )
}

const style1 = {
  
}
export default App;
