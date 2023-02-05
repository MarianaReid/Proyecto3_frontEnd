import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.css";
import { Image } from 'react-bootstrap';

const Error = () => {
    return (
        <section className="fondo text-center">
      <div className="container pt-4">
        {/* <img src={error} className='logo' alt='imagen de error'></img> */}
        <Image src='https://i.postimg.cc/76cT4ZbD/error.jpg' fluid className='logo'/>
        <h3 className="pt-5 letra">Ooops...! No se encontro lo que estas buscando</h3>
        <Link to='/' className='ov-btn-slide-bottom'>VOLVER A INICIO</Link>
      </div>
      {/* <div className="container-notfound container">
        <h3 className="notfound pt-5">No se encontro lo que estas buscando</h3>
        <Link to="/" className="btn btn-dark bg-black my-3 botonVolver">{props.usuarioLogueado.perfil ? "Volver a Inicio" : "Volver a Comprar"}</Link>
      </div> */}
    </section>
  );
};

export default Error;
