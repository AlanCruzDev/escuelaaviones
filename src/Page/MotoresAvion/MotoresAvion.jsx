import React from 'react'
import avionmotor from '../../img/MotoresAvion/WhatsApp Image 2022-04-05 at 5.31.07 PM.jpeg';
import {Layout} from '../RequesitosCarreras/Layout';
import {datacostosmotorores,datamotores} from '../RequesitosCarreras/Data/DataMotores';
export const MotoresAvion = () => {
  return (
    <div className="contactoimagen">
        <img src={avionmotor} alt="sistemaElectro" />
        <div className='text-centro__mantenimiento'>
          <h2 className='text-white'>
            MOTORES Y PLANEADORES
            <br />
            ALA FIJA</h2>
        </div>
        <Layout
          key={"MOTORES Y PLANEADORES ALA FIJA"}
          data={datamotores}
          costos={datacostosmotorores}
          titulo={"MOTORES Y PLANEADORES ALA FIJA"}
        />
      </div>
  )
}
