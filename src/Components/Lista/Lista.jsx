import React from 'react'
import './lista.style.css';
import { FcApprove } from "react-icons/fc";

export const Lista = ({iten,sizeicon,sizeletter}) => {
  return (
    <ul className='list__group'>
        <li className='lsita__item' style={{
          fontSize:`${sizeletter}`
        }}><FcApprove size={sizeicon}
        />{iten}</li>
    </ul>
  )
}
