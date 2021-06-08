import AguaNieve from '../SVG/AguaNieve.svg'
import Fog from '../SVG/Fog.svg'
import Granizo from '../SVG/Granizo.svg'
import LigeramenteNublado from '../SVG/LigeramenteNublado.svg'
import Lluvia from '../SVG/Lluvia.svg'
import LluviaFuerte from '../SVG/LluviaFuerte.svg'
import LluviaLigera from '../SVG/LluviaLigera.svg'
import lluviaysol from '../SVG/lluviaysol.svg'
import MedianamenteNublado from '../SVG/MedianamenteNublado.svg'
import MuyNublado from '../SVG/MuyNublado.svg'
import nieve from '../SVG/nieve.svg'
import Nublado from '../SVG/Nublado.svg'
import Soleado from '../SVG/Soleado.svg'
import Tormenta from '../SVG/Tormenta.svg'
import TormentaFuerte from '../SVG/TormentaFuerte.svg'

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
        <i class="text-secondary"> {climate.hour}</i>
      </header>
      <div class="d-flex w-100 justify-content-between">
        <div class="w-25">
          <main>
            <h2 class="display-1 text-primary fw-normal">{climate.temp}</h2>
          </main>
          <footer>
            <b>{climate.weather}</b>
          </footer>
        </div>
        <div class="w-25">
          <main >
            <img class="m-2 text-center img-fluid" src={climateSVG[climate.climateImage]} alt={climate.weather}></img>
          </main>
          <footer class="text-center">
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