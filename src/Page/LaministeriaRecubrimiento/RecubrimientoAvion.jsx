import React from 'react'
import avionrecubrimiento from '../../img/RecubrimientoAvion/plane-601589_1280.jpg';
import {Layout} from '../RequesitosCarreras/Layout';
import {datacostosmotorores,datamotores} from '../RequesitosCarreras/Data/DataLaministeria';



export const RecubrimientoAvion = () => {
  return (
    <div className="contactoimagen">
        <img src={avionrecubrimiento} alt="sistemaElectro" />
        <div className='text-centro__mantenimiento'>
          <h2 className='text-white'>
            LAMINISTERIA Y RECUBRIMIENTO DE
            <br />
            AERONAVES</h2>
        </div>
        <Layout
          key={"LAMINISTERIA Y RECUBRIMIENTO DE AERONAVES"}
          data={datamotores}
          costos={datacostosmotorores}
          titulo={"LAMINISTERIA Y RECUBRIMIENTO DE AERONAVES"}
        />
      </div>
  )
}
