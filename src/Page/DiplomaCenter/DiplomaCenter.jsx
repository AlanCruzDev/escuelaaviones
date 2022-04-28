import React from 'react'
import graduate from '../../img/Diploma/graduation-995042_1280.jpg';
import './diplome.style.css';
import img1 from '../../img/Diploma/WhatsApp Image 2022-04-05 at 5.04.21 PM (2).jpeg';
import img2 from '../../img/Diploma/img2.jpeg';

export const DiplomaCenter = () => {
  return (
    <>
      <div className='contactoimagen'>
        <img src={graduate} alt="graduate" />
        <div className='text-centro__mantenimiento'>
          <h2 className='text-white'>
            Diplomados</h2>
        </div>
      </div>
      <main className='container main__diplome'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center h1__diplomado'>Honores</h1>
            <p className='p_diplomado'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum ab impedit ullam optio in nesciunt consequatur, similique labore deserunt animi consectetur quisquam! Voluptates similique repudiandae, quasi officiis eos accusantium.</p>
          </div>
        </div>
        <div className='container main__diplome'>
          <div className='row row-cols-1 row-cols-md-2 g-4'>
            <div className='col'>
            <div className='card' style={{maxWidth:'60rem'}}>
                <img src={img1} alt="primerimagen" className="card-img-top"/>
                <div className='card-body'>
                  <h5 className='card-title'>Titulo</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repudiandae atque fugit et molestiae quae aliquid totam, dolores hic iste temporibus. Perferendis et numquam, quis impedit modi rerum! Nostrum, eligendi!</p>
                </div>
              </div>
            </div>
            <div className='col'>
            <div className='card' style={{maxWidth:'60rem'}}>
                <img src={img2} alt="primerimagen" className="card-img-top"/>
                <div className='card-body'>
                  <h5 className='card-title'>Titulo</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repudiandae atque fugit et molestiae quae aliquid totam, dolores hic iste temporibus. Perferendis et numquam, quis impedit modi rerum! Nostrum, eligendi!</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  )
}
