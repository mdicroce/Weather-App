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
  return (
    <div className="border flex-fill w-25 m-3 border-3 p-2 rounded border-white bg-light ">
      <header>
        <i className="text-secondary"> {climate.hour}</i>
      </header>
      <div className="d-flex w-100 justify-content-between">
        <div className="w-25">
          <main>
            <h2 className="display-1 text-primary fw-normal">{climate.temp}</h2>
          </main>
          <footer>
            <b>{climate.weather}</b>
          </footer>
        </div>
        <div className="w-25">
          <main >
            <img className="m-2 text-center img-fluid" src={climateSVG[climate.climateImage]} alt={climate.weather}></img>
          </main>
      <footer className="text-center">
            <b>{climate.feels_like}</b>
          </footer>
        </div>
      </div>
      <footer>
        {climate.pop}
      </footer>
    </div>
  )
}
ClimateShow.propTypes = {
  climate: Proptypes.object

}