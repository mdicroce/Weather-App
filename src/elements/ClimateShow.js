import Fog from '../SVG/Fog.svg'
import LigeramenteNublado from '../SVG/LigeramenteNublado.svg'
import Lluvia from '../SVG/Lluvia.svg'
import LluviaFuerte from '../SVG/LluviaFuerte.svg'
import MuyNublado from '../SVG/MuyNublado.svg'
import nieve from '../SVG/nieve.svg'
import Nublado from '../SVG/Nublado.svg'
import Soleado from '../SVG/Soleado.svg'
import Tormenta from '../SVG/Tormenta.svg'
import Proptypes from 'prop-types'
import React from 'react'
import climateShow from './ClimateShow.module.css'


const climateSVG = {
    '01d' : Soleado,
    '01n' : Soleado,
    '02d' : LigeramenteNublado,
    '02n' : LigeramenteNublado,
    '03d' : Nublado,
    '03n' : Nublado,
    '04d' : MuyNublado,
    '04n' : MuyNublado,
    '09d' : LluviaFuerte,
    '09n' : LluviaFuerte,
    '10d' : Lluvia,
    '10n' : Lluvia,
    '11d' : Tormenta,
    '11n' : Tormenta,
    '13d' : nieve,
    '13n' : nieve,
    '50d' : Fog,
    '50n' : Fog

}

export const ClimateShow = (props) => {
  const climate = JSON.parse(props.climate)
  const styleWithWidth = climateShow.climateFigure + " "

  if(props.children)
  {
    return (
      <div className={climateShow.climateClass}>
      <div className="d-flex w-100 justify-content-between">
        <div className="w-25 text-left" style={claseAux}>
          <header>
            <h2>{props.children ? props.children : ""}</h2>
            <i className="text-secondary"> {climate.hour}</i>
          </header>
          <main>
            <h2 className="display-4 text-primary fw-normal" style={{"marginLeft":"-0.25rem"}}>{climate.temp}</h2>
          </main> 
        </div>
        <div className={"d-flex flex-column justify-content-center align-content-center "+styleWithWidth} style={claseAux}>
          <main className={"w-75 align-self-center me-3 "+climateShow.climateAuxiliar}>
            <img className="m-2 text-center" src={climateSVG[climate.climateImage]} alt={climate.weather} style={claseAux2}></img>
          </main>
        </div>
      </div>
      <footer className="d-flex justify-content-between">
        <div className="w-25">
          <b className="h5">{climate.weather}</b>
        </div>
        <div className={"w-25 text-center "+climateShow.climateFigure}>
          <b className="h5 text-center">Feels Like: {climate.feels_like}</b>
        </div>
      </footer>
    </div>
    )
  }
  return (
    <div className={climateShow.climateClass}>
      <div className="d-flex w-100 justify-content-between">
        <div className="w-25 text-left" style={claseAux}>
          <header>
            <h2>{props.children ? props.children : ""}</h2>
            <i className="text-secondary"> {climate.hour}</i>
          </header>
          <main>
            <h2 className="display-6 text-primary fw-normal" style={{"marginLeft":"-0.25rem"}}>{climate.temp}</h2>
          </main>
        </div>
        <div className="d-flex flex-column justify-content-center align-content-center w-50" style={claseAux}>
          <main className="w-75 align-self-center me-3">
            <img className="m-2 text-center" src={climateSVG[climate.climateImage]} alt={climate.weather} style={claseAux2}></img>
          </main>
        </div>
      </div>
      <footer className="d-flex justify-content-between">
        <div className="w-50">
          <b className="h6">{climate.weather}</b>
        </div>
        <div className="w-50 text-center">
          <b className="h6 text-center">Feels Like: {climate.feels_like}</b>
        </div>
      </footer>
    </div>
  )
}
const claseAux = {
  
  
}
const claseAux2 = {
  'heigth' : 'auto',
  'width' : '100%'
}
ClimateShow.propTypes = {
  climate: Proptypes.object,
  children: Proptypes.string

}