import React from 'react';
import {Acordion} from '../../Components/Acordion/Acordion';
import {Lista} from '../../Components/Lista/Lista';
import './layout.style.css';
import { FcApproval } from "react-icons/fc";
import {Tabla} from '../../Components/Tabla/Tabla';
import {Requesitos} from '../../Page/RequesitosCarreras/Data/DataRequesitos.js';



export const Layout = ({data,costos,titulo,requesitos}) => {
  return (
    <>
      <div className='container-lg espacio__layout'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='espacio__layout circulo'>
              <FcApproval size={100} className="icono"/>
            </div>
            <h1 className='h1__layout'>Requisitos: (original y copia)</h1>
            {Requesitos.map((value,indez) =>(
               <Lista
                  key={indez}
                  iten ={value}
                  sizeicon={50}
                  sizeletter={'2.2rem'}
               />
            ))}
          </div>
          <div className='col-md-6'>
          <h1 className='text-center h1__layout'>Especialidad: {titulo}</h1>
          <br/>
          <br/>
            <Acordion
              data={data}
            />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-12'>
            <h2 className='h1__layout'>Forma de pago:</h2>  

            { costos.map((valor)=>(
                <Tabla
                  costotoal={valor.CostoTotal}
                  ochopagos={valor.ochopagos}
                  diezpagos={valor.diezpagos}
                
                />
            ))}
          </div>
        </div>
      </div>
      <div className='container'>
      <div className='row'>
          <div className='col-md-12'>
            <div className='atencion__uno'> 
              <h2 className='h2_layout'>El Costo Incluye:</h2>
              <p>Prácticas en un taller autorizado por la AFAC por 240 hrs Diversos trámites ante la AFAC</p>
              <h2 className='h2_layout'>El Costo No Incluye:</h2>
              <p>Examen Psicofísico en Medicina de Aviación</p>
              </div>
          </div>

        </div>
      </div>
    </>
  )
}
