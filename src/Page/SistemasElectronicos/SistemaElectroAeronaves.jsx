import React from 'react'
import imgelectro from '../../img/SistemaElectronicos/WhatsApp Image 2022-04-05 at 5.32.51 PM.jpeg';
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
