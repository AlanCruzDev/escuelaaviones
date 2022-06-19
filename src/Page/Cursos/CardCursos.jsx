import React from 'react'
import img1 from '../../img/Cursos/10.png';
import img2 from '../../img/Cursos/11.png';
import img3 from '../../img/Cursos/12.png';





export const CardCursos = () => {
  return (
    <>
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
              <div className='card'>
                <img src={img1} alt="Avion Arreglo" className='card__foto' />
              </div>
            </div>
            <div className='col'>
              <div className='card'>
                <img src={img2} alt="Avion Arreglo" className='card__foto' />
              </div>
            </div>
            <div className='col'>
              <div className='card'>
                <img src={img3} alt="Avion Arreglo" className='card__foto' />
              </div>
            </div>
        </div>
      </div>
    
    
    </>
  )
}
