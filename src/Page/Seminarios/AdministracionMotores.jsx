import React from 'react'
import videoavion from '../../Video/file.mp4'
import {SeminarioCard} from '../../Components/Seminarios/SeminarioCard';
import {datamantenimiento} from '../RequesitosCarreras/Data/DataSeminarios';
import operaracionesimg from '../../img/Cursos/8_primeraParte.png';
import img2 from '../../img/Cursos/8_segundaParte.png';



export const AdministracionMotores = () => {
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
        titulo={'Administracion de Motores con enfoque operacional'}
        data={datamantenimiento}
        imagen={operaracionesimg}
        im2={img2}
      />    
    </div>
  )
}
