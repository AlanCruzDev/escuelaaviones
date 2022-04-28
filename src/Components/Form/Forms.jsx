import React from 'react'
import './form.style.css';


export const Forms = () => {
  return (
    <form>
      <label htmlFor="">Nombre</label>
      <input type="text" name="nombre"/>
      
      <label htmlFor="">Apellido Paterno</label>
      <input type="text" name="fistname"/>
      
      <label htmlFor="">Apellido Materno</label>
      <input type="text" name="lastname"/>

      
      <label htmlFor="">Edad</label>
      <input type="number" name="age"/>

      <label htmlFor="">Telefono</label>
      <input type="tel" name="phone"/>

      <label htmlFor="">Correo Electronico</label>
      <input type="email" name="emai"/>
      <button className='form__button'>Registrarse</button>
    </form>
  )
}
