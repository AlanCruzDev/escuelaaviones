import React from 'react'
import videoavion from '../../Video/file.mp4'
import {SeminarioCard} from '../../Components/Seminarios/SeminarioCard';
import {dataoperaciones} from '../RequesitosCarreras/Data/DataSeminarios';
import operaracionesimg from '../../img/Cursos/9.png';
import img2 from '../../img/Cursos/9_segundaParte.png';

// data para mostrar infortmacion del semenirario


export const SeminarioOperaciones = () => {
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
        titulo={'Seminario En Ingenieria de Operaciones'}
        data={dataoperaciones}
        imagen={operaracionesimg}
        im2={img2}
      />
      
    </div>
  )
}
