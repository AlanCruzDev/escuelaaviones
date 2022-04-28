import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../../img/Carusel/carruselbarner.jpeg';
import img2 from '../../img/Carusel/wing-221526_1280.jpg';
import img3 from '../../img/Carusel/WhatsApp Image 2022-04-05 at 5.41.01 PM.jpeg';
import img4 from '../../img/Carusel/carrera-sobrecargo-de-aviacion.jpg';
import img5 from '../../img/Carusel/Slider-pagina-web.jpg';



import './carrusel.styles.css';


export const Carruselmagens = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block img__carusel"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className='texto__carusel'>
                    <h1>Liderazgo Estratégico y Formación como
                        Tripulante de Cabina (TCP Sobrecargo)</h1>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block img__carusel"
                    src={img2}
                    alt="First slide"
                />
                <Carousel.Caption className='texto__carusel'>
                    <h1>Liderazgo Estratégico y Formación como
                        Tripulante de Cabina (TCP Sobrecargo)</h1>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block img__carusel"
                    src={img3}
                    alt="First slide"
                />
                <Carousel.Caption className='texto__carusel'>
                    <h1>Liderazgo Estratégico y Formación como
                        Tripulante de Cabina (TCP Sobrecargo)</h1>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block img__carusel"
                    src={img4}
                    alt="First slide"
                />
                <Carousel.Caption className='texto__carusel'>
                    <h1>Liderazgo Estratégico y Formación como
                        Tripulante de Cabina (TCP Sobrecargo)</h1>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block img__carusel"
                    src={img5}
                    alt="First slide"
                />
                <Carousel.Caption className='texto__carusel'>
                    <h1>Liderazgo Estratégico y Formación como
                        Tripulante de Cabina (TCP Sobrecargo)</h1>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>




    )
}
