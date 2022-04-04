import React from 'react'
import {NavBar} from '../Components/NavBar/Navbar';
import {Home} from '../Page/Home/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import {Sobrecargo} from '../Page/Home/Sobrecargo';
import {TecnicoMantenimiento} from '../Page/Home/TecnicoMantenimiento/TecnicoMantenimiento';
import {SistemaElectroAeronaves} from '../Page/SistemasElectronicos/SistemaElectroAeronaves';
import {MotoresAvion} from '../Page/MotoresAvion/MotoresAvion';
import {RecubrimientoAvion} from '../Page/LaministeriaRecubrimiento/RecubrimientoAvion';



export const RouterHome = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sobrecargo' element={<Sobrecargo/>}/>
        <Route path='/tecnicomantenimiento' element={<TecnicoMantenimiento/>}/>
        <Route path='/sistemaElectro' element={<SistemaElectroAeronaves/>}/>
        <Route path='/motoresplaneadores' element={<MotoresAvion/>}/>
        <Route path='/recubrimientoavion' element={<RecubrimientoAvion/>}/>
        
      </Routes>
    </>
  )
}
