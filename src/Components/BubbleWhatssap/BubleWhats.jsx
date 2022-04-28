import React from 'react'
import './bubble.style.css';
import { FaWhatsapp } from "react-icons/fa";
export const BubleWhats = () => {
  return (
    <>
    <a className='btn-cliente' href={'https://api.whatsapp.com/send?phone=5215590543876&text=hola,%20qué%20tal?'}>
      <FaWhatsapp className="icon-cliente" />
    </a>    
    </>
  )
}