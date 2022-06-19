import React from 'react';
import './Card.style.css';
import graduatingstudents from '../../img/Instalaciones/alumnos.jpeg';
import sillasimg from '../../img/Instalaciones/sillas.jpeg';
import {useNavigate} from 'react-router-dom';


export const CardHome = () => {

  const navegate = useNavigate();

  const navegatediplome=()=>{
    navegate('/diplomado');
  }

  const navegateAulas=()=>{
    navegate('/aulas');
  }
  

  return (
    <div className='row row-cols-1 row-cols-md-2 g-4'>
      <div className='col'>

        <div id="circle-shape-example">
          <img src={graduatingstudents} alt="A photograph of sliced kiwifruit on a while plate" class="curve" /><h1 className='titulo__cardhome'>Infraestructura</h1>
          <p style={{fontSize:'1.4rem'}}>Contamos con la infraestructura necesaria para satisfacer a nuestros clientes, con aulas un salon de simulacion y un taller de practicas para los tecnicos de mantenimiento</p>
          <button className='btn btn-info text-white' onClick={navegatediplome}  style={{
            fontSize:'1.3rem',
            fontWeight:'bold'
          }}>Ir</button>
        </div>
      </div>
      <div className='col'>

        <div id="circle-shape-example">
          <img src={sillasimg} alt="A photograph of sliced kiwifruit on a while plate" class="curve" /><h1 className='titulo__cardhome'>Aulas</h1>
          <p style={{fontSize:'1.4rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsum reprehenderit aperiam modi, quod totam velit minus, laudantium est, explicabo dignissimos voluptatibus eveniet cumque consequatur sequi a deleniti dolorum fuga.</p>
          <button className='btn btn-info text-white' onClick={navegateAulas} style={{
            fontSize:'1.3rem',
            fontWeight:'bold'
          }}>Ir</button>
        </div>
      </div>
    </div>
  )
}
