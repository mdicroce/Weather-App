import './App.css';
import {weatherCurrent,listOfCities, weather} from './services/axios' 
import React, { useState } from 'react'
import {DateTime} from 'luxon'
import {ClimateShow} from './elements/ClimateShow'
import Proptypes from 'prop-types'
import dotenv from 'dotenv'
dotenv.config()


function App() {
  const[city,setCity] = useState([])
  const [selected, setSelected] = useState({})
  const [weatherNow, setWeatherNow] = useState('')
  const [currentWeather, setCurrentWeather] = useState('')
  const [charging, setCharging] = useState(false)



  const onChangeHandler = (event) => {
    setCity(event.target.value);
  }
  const onSubmitHandler = (event) =>{

    
    setCharging(true);
    event.preventDefault();
    listOfCities({name: city})
    .then(response => response ? setSelected({city: response[0]}): "")
    weather({city: city})
    .then((response => { setWeatherNow(response.data)}))
    weatherCurrent({city:city})
    .then((response) => {
      
      setCharging(false)
      setCurrentWeather(response.data)
    })
    }
    
    
    return (
      <div style={style1}className="">
        <header >
          
         <h1 className="text-center display-1 mb-1">Weather App </h1>
  
        </header>
        <div className="container p-5">
          <CityFinder cityValue={city} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler}/>
        </div>
        <div className="container">
          {selected.city ?  <h2 className=" p-2">{selected.city.value}</h2> : ""}
          {currentWeather ? <ShowWeather weather={currentWeather} ciudad={selected.city}/>: ""}
          {weatherNow ? <ShowWeather weather={weatherNow} ciudad={selected.city}/>: ""}
          {charging &&  <Spinner className="" />}
        </div>
      </div>
    );
  }
  





const Spinner = () => {
   return (
     <div className=" d-flex justify-content-center w-100">
      <div className="mx-auto spinner-border text-primary" role="status">
        <span className=" visually-hidden">Loading...</span>
      </div>

     </div>
   )
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
CityFinder.propTypes = {
  cityValue : Proptypes.string,
  onChangeHandler: Proptypes.func,
  onSubmitHandler: Proptypes.func
}

const ShowWeather = (props) => {
  const ifActual = props.weather.list ? false : true
  const mapFunction = (actual) => {
    const dAndH = DateTime.fromMillis(actual.dt*1000).setZone(props.ciudad.timeZone ? props.ciudad.timeZone : "Europe/London").toLocaleString(DateTime.DATETIME_SHORT)
      const climate = {
        hour : dAndH,
        temp : actual.main.temp,
        feels_like : actual.main.feels_like,
        climateImage : actual.weather[0].icon,
        weather: actual.weather[0].description,
        pop: actual.pop
      }
      return(
          
          <ClimateShow climate={JSON.stringify(climate)}>
            {ifActual && "Clima Actual"}
          </ClimateShow>
      )

  }
 
  return (<div className="d-flex flex-wrap container">
  {
    props.weather.list ? 
      props.weather.list.map(mapFunction)
      :
      mapFunction(props.weather)
  }
  </div>
  )
}
ShowWeather.propTypes = {
  weather: Proptypes.object,
  ciudad: Proptypes.object
}

const style1 = {
  
}
export default App;
