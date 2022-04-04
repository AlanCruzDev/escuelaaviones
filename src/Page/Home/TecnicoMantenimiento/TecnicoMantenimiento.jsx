import React from 'react'
import '../home.style.css';
import tecnico from '../../../img/Carusel/Slider-pagina-web.jpg';
import { CardComponent } from '../../../Components/Card/CardComponent';
import { useNavigate } from 'react-router-dom';
import videoavion from '../../../Video/Pexels Videos 4105.mp4';
import './tecnicomante.style.css';


export const TecnicoMantenimiento = () => {

  const navegate = useNavigate();

  const navegarSistemElectro = () => {
    navegate('/sistemaElectro');

  }

  const navegarMotoresAvion=()=>{
    navegate('/motoresplaneadores');

  }

  const navegarLaministeriaAeronaves=()=>{
    navegate('/recubrimientoavion');
  }


  return (
    <div className="contactoimagen">
      <div className='tecnicomantenimiento__home'>
        <video loop autoPlay muted>
          <source src={videoavion} type="video/mp4" />
        </video>
        <div className='text-centro__tecnico'>
          <h2>
            El Comienzo de un gran
            <br />
            Futuro</h2>
        </div>
      </div>
      <CardComponent
        navegarSistemElectro={navegarSistemElectro}
        navegarMotoresAvion={navegarMotoresAvion}
        navegarLaministeriaAeronaves={navegarLaministeriaAeronaves}
      />
    </div>
  )
}
