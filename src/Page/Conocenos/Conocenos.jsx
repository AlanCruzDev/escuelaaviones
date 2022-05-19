import React from 'react'
import './conocenos.style.css';
import imgicono from '../../img/Conocenos/275121010_962755581278549_2471186426558327665_n.jpg';

export const Conocenos = () => {
  return (
    <>
      <div className='conocernosimagen'>
        <div className='posicion__imagen'>
          <img src={imgicono} className='img__cee' />
        </div>

        <div className='conocernos__texto'>
          <h1>Acerca de CEEAEN.Sl</h1>
        </div>

        <div className='conocernos__parafo'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>

              <p className='text-center'>
                Somos una organización educativa dedicada a la formación Aeronáutica, en
                diferentes niveles profesionales. La calidad de la formación es competitiva a nivel
                nacional.
                Organizamos eventos profesionales para atender la demanda de información que se
                tienen en la agenda global aeronáutica.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='contenedor__equipo'>
        <h1 className='text-center'>Nuestro Equipo</h1>
        <div className="row mt-5">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Relaciones institucionales</h5>
                <p className="card-text">RR. II. Alicia Mejía</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Directora CEEAEM</h5>
                <p className="card-text">Lic. América Castillo</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Soporte acádemico</h5>
                <p className="card-text">Lc. Nayely Castillo</p>

              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Responsable del CEEAEM</h5>
                <p className="card-text">Mtro en I. Alejandro Castillo</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
