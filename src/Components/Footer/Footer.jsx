import React from 'react';
import './Footer.style.css';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

export const Footer = () => {

  const navegation=useNavigate();

  const navegationLocation=(rutanombre)=>{
    navegation(rutanombre);
  }


  return (
    <footer className="foooter__aipssa">
      <div className="container">
        <div className='row'>
          <div className='col-md-12'>
          <h1 className="text-white text-center mt-5">Nuestras Redes Sociales</h1>
          <div className="contenedor__redessociales">
                <a className="icon__facebook" href="">
                  <FaFacebookF className="icon-cliente" />
                </a>
                <a className="icon__facebook" style={{background:'#FF0000'}} href="">
                  <FaYoutube className="icon-cliente" />
                </a>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <h1 className='text-white'>Acerca de Nosotros</h1>
            <ul className='mt-5'>
              <li className='text-white li__footer' onClick={() => {navegationLocation('/conocenos')}}>Conocenos</li>
              <li className='text-white li__footer'  onClick={()=>{navegationLocation('/localizacion')}}>Nos Encontramos</li>
            </ul>

          </div>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>

          </div>
        </div>
      </div>
    </footer>
  )
}
