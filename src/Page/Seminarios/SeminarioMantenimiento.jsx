import React from 'react'
import videoavion from '../../Video/file.mp4'
import {SeminarioCard} from '../../Components/Seminarios/SeminarioCard';
import {datamantenimiento} from '../RequesitosCarreras/Data/DataSeminarios';
import operaracionesimg from '../../img/Cursos/1.png';


export const SeminarioMantenimiento = () => {
  return (
    <div className="contactoimagen">
      <div className='tecnicomantenimiento__home'>
        <video loop autoPlay muted>
          <source src={videoavion} type="video/mp4" />
        </video>
        <div className='text-centro__tecnico'>
          <h2 className='mt-5'>
            Preparate para el Futuro
            </h2>
        </div>
      </div>
      <SeminarioCard
        key={1}
        titulo={'Administracion del Mantenimiento Aeronautico'}
        data={datamantenimiento}
        imagen={operaracionesimg}
      />    
    </div>
  )
}
