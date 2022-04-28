import React from 'react'
import { Carousel } from 'react-bootstrap';
import aula from '../../img/Aulas/teaching-661748_1280.jpg';
import salon1 from '../../img/Aulas/salon1.jpeg';
import salon2 from '../../img/Aulas/salon2.jpeg';
import salon3 from '../../img/Aulas/salon3.jpeg';
import mante from '../../img/Aulas/Mantenimiento.jpeg';
import silla from '../../img/Aulas/sillas.jpeg';
import herra from '../../img/Aulas/herramientas.jpeg';


import './aulas.style.css';



export const Aulas = () => {
  return (
    <div className='contactoimagen'>
      <img src={aula} alt="aula" />
      <div className='text-centro__mantenimiento'>
        <h2 className='text-white'>
          Instalaciones Escolares
          <br /></h2>
      </div>
      <div className='container main__diplome'>
        <h1 className='text-center display-1 aulas__titulo'>Salones</h1>
        <Carousel fade className='mt-5'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={salon1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='display-1'>Salon 1</h3>
              <p className='h3'>5 AULAS EQUIPADAS PARA EL DESARROLLO DE LAS PRACTICAS ESCOLARES POR CADA UNA DE LAS CARRERAS Y CONTAN CON UNA BIBLIOTECA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={salon2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className='display-1'>Salon 2</h3>
              <p className='h3'>5 AULAS EQUIPADAS PARA EL DESARROLLO DE LAS PRACTICAS ESCOLARES POR CADA UNA DE LAS CARRERAS Y CONTAN CON UNA BIBLIOTECA</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={salon3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='display-1'> Salon 3</h3>
              <p className='h3'>5 AULAS EQUIPADAS PARA EL DESARROLLO DE LAS PRACTICAS ESCOLARES POR CADA UNA DE LAS CARRERAS Y CONTAN CON UNA BIBLIOTECA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={salon1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='display-1'>Salon 4</h3>
              <p className='h3'>5 AULAS EQUIPADAS PARA EL DESARROLLO DE LAS PRACTICAS ESCOLARES POR CADA UNA DE LAS CARRERAS Y CONTAN CON UNA BIBLIOTECA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={salon1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='display-1'>Salon 5</h3>
              <p className='h3'>5 AULAS EQUIPADAS PARA EL DESARROLLO DE LAS PRACTICAS ESCOLARES POR CADA UNA DE LAS CARRERAS Y CONTAN CON UNA BIBLIOTECA</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='card cuerpo__equipoServicio mt-5'>
          <div className='card-body'>
            <section className="container">
              <div className="row p-5">
                <div className="col-md-4">
                  <h1 className="text-center display-1">Servicio Tecnico Especializado</h1>
                  <p className="h3 mt-5">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur eligendi mollitia, praesentium eum animi nostrum, eveniet exercitationem id at quidem, earum veritatis totam ullam quam? Enim aliquam eaque placeat.
                  </p>
                </div>
                <div className="col-md-8">
                  <img src={mante} alt="marca equipo" />
                </div>
              </div>
              <div className="row p-5 mt-5">
                <div className="col-md-8">
                  <img src={herra} alt="marca equipo" />
                </div>
                <div className="col-md-4">
                  <h1 className="text-center display-1">
                    Taller de Herramientas
                  </h1>
                  <p className="h3 mt-5">
                    Personal altamente capacitado especializado en la instalación,
                    servicio técnico y mantenimiento de equipos para laboratorio.
                  </p>
                </div>
              </div>
              <div className="row p-5">
                <div className="col-md-4 mt-5">
                  <h1 className="text-center display-1">Simulacion Avion</h1>
                  <p className="h3 mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sit facere sapiente id cumque, rerum maxime quo iusto, eligendi laudantium earum voluptates qui, aliquid mollitia odit. Deserunt, nam. Adipisci, saepe.
                  </p>
                </div>
                <div className="col-md-8">
                  <img src={silla} alt="marca equipo" />
                </div>
              </div>

            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
