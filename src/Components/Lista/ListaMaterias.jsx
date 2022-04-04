import React from 'react';
import './lista.style.css';
import { FcRight } from "react-icons/fc";



export const ListaMaterias = ({data}) => {
  console.log(data);
  return (
    <ul className='list__group'>
      {data.map((valor,index)=>(
        <li className='lsita__item'><FcRight size={30}/>{valor}</li>
      ))} 
    </ul>
  )
}
