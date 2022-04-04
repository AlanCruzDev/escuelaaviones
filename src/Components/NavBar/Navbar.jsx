import React from "react";
import {Link} from 'react-router-dom';
import './navbar.style.css';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{background:'white'}}>
      <span className="navbar-toggler-icon" style={{background:'white'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Carreras Aeronauticas
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link className="nav-link"   to="/tecnicomantenimiento">Tecnico en Mantenimiento</Link></li>
            <li><Link className="nav-link text-white"   to="/sobrecargo">Tsu Sobrecargo</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};
