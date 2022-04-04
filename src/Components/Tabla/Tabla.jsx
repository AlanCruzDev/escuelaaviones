import React from 'react'
import './tabla.css';

export const Tabla = ({costotoal,ochopagos,dii}) => {
  return (
    <table border="1" className='mt-5'>
      <thead className='text-center'>
        <tr>
          <th>
            Costo Total
          </th>
          <th>
            $ 36,48.00
          </th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="un">
            Mensualidad
          </td>
          <td className="un">
            8 pagos de $ 4,560.00
          </td>
        </tr>

        <tr>
          <td className="un">
            Mensualidad
          </td>
          <td className="un">
            10 pagos (fin de semana) de $ 3,648.00
          </td>
        </tr>
      </tbody>
    </table>
  )
}
