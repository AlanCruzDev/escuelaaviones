import React from 'react'
import img4 from '../../img/Carusel/carrera-sobrecargo-de-aviacion.jpg';
import './home.style.css';
import {Layout} from '../RequesitosCarreras/Layout';
import {datacostosmotorores,datamotores} from '../RequesitosCarreras/Data/DataLaministeria';




export const Sobrecargo = () => {
  return (
    <div className="contactoimagen">
      <img src={img4} alt="sobrecargo" />
      <div className='text-centro'>
        <h2>SOBRECARGO DE AVIACIÓN</h2>
      </div>
      <Layout
          costos={datacostosmotorores}
          data={datamotores}
          key={'Sistemas Electronicos de Aeronaves'}
          titulo={'Sobrecargo de aviacion'}
        />
      
    </div>
  )
}
