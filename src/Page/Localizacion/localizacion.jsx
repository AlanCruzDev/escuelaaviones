import React from 'react'
import img1 from '../../img/Localizacion/double-decker-2795557_1280.jpg';
import {Mapa} from '../../Components/Map/Mapa';





export const Localizacion = () => {
  return (
    <>
    <div className='contactoimagen'>
        <img src={img1} alt="graduate" />
        <div className='text-centro__mantenimiento'>
          <h2 className='text-white '>
            <br />
            Visitanos</h2>
        </div>
      </div>
      <main style={{marginTop:'150px'}}>
        <div className='text-center'>
          <h1
            style={{
              fontFamily:'initial',
              fontSize:'40px',
              color:'#483D8B'
            }}
          >Aqui Nos Encontramos</h1>

        </div>
        <div className='mt-5'>
          
        <Mapa/>

        </div>
      </main>
    
    </>
  )
}
