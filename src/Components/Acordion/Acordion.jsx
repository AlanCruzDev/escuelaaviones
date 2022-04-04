import React,{useEffect} from 'react'
import './Acordion.style.css';
import {ListaMaterias} from '../Lista/ListaMaterias';



export const Acordion = ({data}) => {

  useEffect(()=>{
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
      }
    }
  },[]);

  console.log(data);

  const llenarData=()=>{

    return (
      <>
        { data.map((valor)=>(
          <>
            <button class="accordion">{valor.Icono}  {valor.Titulo}</button>
              <div class="panel">
                { (!valor.Damas) 
                      ?  
                        (<p>{valor.Descripcion}</p>) 
                      : 
                        (
                          <>
                            <p>{valor.Tamaño}</p>
                            <p>{valor.Damas}</p>
                            <p>{valor.Caballeros}</p>
                          </>
                        )
                }

                { (!valor.materias)
                      ? null
                      : (
                        <ListaMaterias
                          data={valor.materias}
                        />   
                      )
                }
              </div>          
          </> 
        ))} 
      </>
    );

  }




  return (
    <>
      {llenarData()}
    </>
  )
}
