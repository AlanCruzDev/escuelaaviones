import React from 'react'
import { FcInfo } from "react-icons/fc";
import { Acordion } from '../../Components/Acordion/Acordion';


export const SeminarioCard = ({ titulo, data, imagen,im2 }) => {
  return (
    <>
      <div className='container barra__dezplazadora'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='espacio__layout circulo'>
              <FcInfo size={100} className="icono" />
            </div>
            <h1 className='h1__layout'>{titulo}</h1>

          </div>
          <div className='col-md-6'>
            <br />
            <br />
            <br />
            <div style={{
              marginTop: '10rem'
            }}>
              <Acordion
                data={data}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div style={{
              marginTop:'15rem'
            }}>
                <img src={imagen} alt="Seminario"  className='card__foto'/>
            </div> 
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div style={{
              marginTop:'4rem'
            }}>
                <img src={im2} alt="Seminario"  className='card__foto'/>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}
