import React from 'react'
import imgelectro from '../../img/SistemaElectronicos/pexels-daniel-torobekov-5262805.jpg';
import './sistemaelectro.style.css';
import {Layout} from '../RequesitosCarreras/Layout';
import {datacostosmotorores,datamotores} from '../RequesitosCarreras/Data/DataMotoles';




export const SistemaElectroAeronaves = () => {
  return (
      <div className="contactoimagen">
        <img src={imgelectro} alt="sistemaElectro" />
        <div className='text-centro__mantenimiento'>
          <h2 className='text-white'>
            Sistemas Electronicos de
            <br />
            Aeronaves</h2>
        </div>
        <Layout
          costos={datacostosmotorores}
          data={datamotores}
          key={'Sistemas Electronicos de Aeronaves'}
          titulo={'Sistemas Electronicos de Aeronaves'}
        />
      </div>
  )
}
