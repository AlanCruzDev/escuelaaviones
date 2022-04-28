import React from 'react'
import './modal.style.css';
import {Forms} from '../Form/Forms';
import {Lista} from '../Lista/Lista';
import {carreras} from './Data';

export const ModalInformacion = ({ handleClose, show}) => {

  const showHideClassName = show ? "modalmask display-block" : "modalmask display-none";

  return (
    <div className={showHideClassName}>
      <div class="modalbox movedown">
        <div className='row'>
          <div className='col-md-6'>
            <div className='encuenta__izq'>
              <h2>ESTUDIA EN EL CENTRO DE FORMACIÓN DE LA PRINCIPAL AEROLÍNEA DE MÉXICO​</h2> 
              <div className='row m-lg-5'>
                <div className='col-md-5'>
                    <h2 className='carerrar__title'>Carreras</h2>
                </div>
                <div className='col-md-7'>
                  {
                    carreras.map((valor,index)=>(
                      <Lista
                        key={index}
                        iten={valor}
                        sizeicon={25}
                        sizeletter={'1.5rem'}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 der_modal'> 
           <button className='close' onClick={()=>{handleClose()}}>X</button>
           <div className='encuenta'>
              <h2>COMPÁRTENOS TUS DATOS PARA RECIBIR MÁS INFORMACIÓN</h2>
              <Forms/>
           </div>
          </div>
        </div>
        </div>
    </div>
  );
}
