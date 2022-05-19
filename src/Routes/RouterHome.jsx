import React, { useEffect } from 'react'
import { NavBar } from '../Components/NavBar/Navbar';
import { Home } from '../Page/Home/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import { Sobrecargo } from '../Page/Home/Sobrecargo';
import { TecnicoMantenimiento } from '../Page/Home/TecnicoMantenimiento/TecnicoMantenimiento';
import { SistemaElectroAeronaves } from '../Page/SistemasElectronicos/SistemaElectroAeronaves';
import { MotoresAvion } from '../Page/MotoresAvion/MotoresAvion';
import { RecubrimientoAvion } from '../Page/LaministeriaRecubrimiento/RecubrimientoAvion';
import { ModalInformacion } from '../Components/Modal/ModalInformacion';
import { Openclosemodal } from '../Hooks/Openclosemodal';
import {BubleWhats} from '../Components/BubbleWhatssap/BubleWhats';
import {DiplomaCenter} from '../Page/DiplomaCenter/DiplomaCenter';
import {Aulas} from '../Page/Aulas/Aulas';
import {Footer} from '../Components/Footer/Footer';
import {Localizacion} from '../Page/Localizacion/localizacion';
import {Conocenos} from '../Page/Conocenos/Conocenos';



export const RouterHome = () => {

  const { state, showModal, hideModal } = Openclosemodal();

  useEffect(() => {
    showModal()
  }, [])


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sobrecargo' element={<Sobrecargo />} />
        <Route path='/tecnicomantenimiento' element={<TecnicoMantenimiento />} />
        <Route path='/sistemaElectro' element={<SistemaElectroAeronaves />} />
        <Route path='/motoresplaneadores' element={<MotoresAvion />} />
        <Route path='/recubrimientoavion' element={<RecubrimientoAvion />} />
        <Route path='/diplomado' element={<DiplomaCenter/>}/>
        <Route path='/aulas' element={<Aulas/>}/>
        <Route path='/localizacion' element={<Localizacion/>}/>
        <Route path='/conocenos' element={<Conocenos/>}/>

      </Routes>
      <BubleWhats/>
      <ModalInformacion
        handleClose={hideModal}
        show={state.show} />
        <Footer/>
    </>
  )
}
