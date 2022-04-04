import React from 'react'
import arreglo from '../../img/Card/arreglo.jpg';
import componentes from '../../img/Card/electrico.jpg';
import repiza from '../../img/Card/repeiza.jpg';
import './Card.style.css';


export const CardComponent = ({navegarSistemElectro, navegarMotoresAvion,navegarLaministeriaAeronaves}) => {

  return (
    <>
      <div className='container barra__dezplazadora'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <div className='card'>
              <img src={arreglo} alt="Avion Arreglo" className='card__foto' />
              <div className='card-body mt-4 card__componentes'>
                <h1 className='text-center'>Motores y Planeadores Alfa Fija</h1>
                <h3 className='mt-4'>Objetivo</h3>
                <p className='card-text'>
                  Contar con los conocimientos, habilidades y destrezas necesarias para efectuar el mantenimiento preventivo y
                  correctivo en los sistemas de planeadores y motores de las aeronaves de ala fija, aplicando los procedimientos
                  establecidos por la reglamentación aeronáutica y los manuales de los fabricantes.
                </p>
                <div className='text-center'>
                  <button className='btn btn-primary w-50' onClick={()=>{navegarMotoresAvion()}}>Saber mas</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={componentes} alt="" className='card__foto' />
              <div className='card-body mt-4 card__componentes'>
                <h1 className='text-center'>Sistemas Electronicos de Aeronaves</h1>
                <h3 className='mt-4'>Objetivo</h3>
                <p className='card-text'>
                  Contar con los conocimientos, habilidades y destrezas necesarias para efectuar el mantenimiento preventivo y
                  correctivo en los sistemas de navegación, comunicaciones, instrumentos y vuelo automático de las aeronaves de ala fija,
                  aplicando los procedimientos establecidos por la reglamentación aeronáutica y los manuales de los fabricantes.
                </p>
                <div className='text-center'>
                  <button className='btn btn-primary w-50' onClick={()=>{navegarSistemElectro()}}>Saber mas</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={repiza} alt="" />
              <div className='card-body mt-4 card__componentes'>
                <h1 className='text-center'>Laministeria y Recubrimientos de Aeronaves</h1>
                <h3 className='mt-4'>Objetivo</h3>
                <p className='card-text'>
                  Contar con los conocimientos, habilidades y destrezas necesarias para efectuar el mantenimiento preventivo y
                  correctivo en los sistemas de navegación, comunicaciones, instrumentos y vuelo automático de las aeronaves de ala fija,
                  aplicando los procedimientos establecidos por la reglamentación aeronáutica y los manuales de los fabricantes.
                </p>
                <div className='text-center'>
                  <button className='btn btn-primary w-50' onClick={()=>{navegarLaministeriaAeronaves()}}>Saber mas</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
