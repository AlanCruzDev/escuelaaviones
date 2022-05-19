import React from 'react'
import { Carruselmagens } from '../../Components/Carrusel/Carruselmagens';
import imgmantenimiento from '../../img/Icons/mantenimiento.png';
import sobrecargaavion from '../../img/Icons/sobrecarga.png';
import imganescursos from '../../img/Home/cursos-de-cap.jpg';
import {CardHome} from '../../Components/Card/CardHome';
import {useNavigate} from 'react-router-dom';



export const Home = () => {
const navegate = useNavigate();

const navegateDiplome=()=>{
  navegate('/tecnicomantenimiento');
}

const navegateairplonesobre=()=>{
  navegate('/sobrecargo');

}

  return (
    <>
      <Carruselmagens />
      <section className='container section__carreras'>
        <h2>Carreras Técnico Aeronáuticas</h2>
        <div className='row' style={{ marginTop: '10rem' }}>
          <div className='col-md-6'>
            <img src={imgmantenimiento} alt="mantenimiento" className='w-25 carreras' onClick={navegateDiplome}/>
            <p className='subtitulo__carrera'>Tecnico en Mantenimiento</p>
          </div>
          <div className='col-md-6'>
            <img src={sobrecargaavion} alt="mantenimiento" className='w-25 carreras'  onClick={navegateairplonesobre}/>
            <p className='subtitulo__carrera'>Sobrecargo de Aviacion</p>
          </div>
        </div>
      </section>
      <div className='img-container top_seccion'>
        <img src={imganescursos} alt="imagen de cursos" className='img-fluid' />
        <div className='text-cusrso'>
          <h2 className='text-white'>
            Nuestros Cursos</h2>
          <p>El CEEAEM está certificado por la Agencia Federal de aviación Civil</p>
        </div>
      </div>
      <main className='section__carreras'>
        <h2>Instalaciones</h2>
        <div className='container' style={{marginTop:'10rem'}}>
          <CardHome/>
        </div>
      </main>
    </>
  )
}
