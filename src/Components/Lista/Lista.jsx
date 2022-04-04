import React from 'react'
import './lista.style.css';
import { FcApprove } from "react-icons/fc";

export const Lista = () => {
  return (
    <ul className='list__group'>
        <li className='lsita__item'><FcApprove size={50}/>Certificado de Bachillerato</li>
        <li className='lsita__item'><FcApprove size={50}/>Acta de nacimiento</li>
        <li className='lsita__item'><FcApprove size={50}/>Cartilla liberada SMN</li>
        <li className='lsita__item'><FcApprove size={50}/>CURP</li>
        <li className='lsita__item'><FcApprove size={50}/>INE</li>
        <li className='lsita__item'><FcApprove size={50}/>Comprobante de domicilio</li>
    </ul>
  )
}
