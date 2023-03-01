import { Image } from "react-bootstrap"
import imagenAndressa from '../img/Andressa.jpg';
import imagenEmanuel from '../img/Emmanuel.jpeg';
import imagenVeronica from '../img/Veronica.jpg';
import imagenEnzo from '../img/Enzo.jpeg';
import imagenMariana from '../img/Mariana.jpeg';
import imagenEsteban from '../img/Esteban.jpeg';
import imagenSobrenos from '../img/logo.png';
import '../css/aboutus.css';


const Aboutus = () => {
    return (
        <>
        <Image className="imgUp" src={imagenSobrenos}/>
        <br />
        <div>
            <h1>QUIENES SOMOS</h1>
                    <h2>SOMOS UN CONCEPTO</h2>
                    <p>🔹Modernos en el estilo y clásicos en el sabor.</p>
                    <p>🔹Un equipo de profesionales que hemos creado el restaurante donde nos gustaría comer a diario y en las ocasiones especiales. Con menú o a la carta. Con amigos o con clientes, con tiempo para disfrutar o con algo más de prisa porque el trabajo lo requiere.</p>
                    <p>🔹Firmes defensores de que calidad no está en el precio, sino en el producto.</p>
                    <p>🔹Exigentes porque también somos consumidores y estamos convencidos de que la experiencia debe resultar completa.</p>
            
        </div>
        <br />
        <div>
            <h2>NUESTRO EQUIPO</h2>
            <br />
        </div>
        <div className="contenedor-imagenes">
            <div>
            <h3>Andressa</h3>
            <Image className="imgprofile" src={imagenAndressa} />
            </div>
            <div>
            <h3>Emanuel</h3>
            <Image className="imgprofile" src={imagenEmanuel} />
            </div>
            <div>
            <h3>Veronica</h3>
            <Image className="imgprofile" src={imagenVeronica} />
            </div>
            <div>
            <h3>Enzo</h3>
            <Image className="imgprofile" src={imagenEnzo} />
            </div>
            <div>
            <h3>Mariana</h3>
            <Image className="imgprofile" src={imagenMariana} />
            </div>
            <div>
            <h3>Esteban</h3>
            <Image className="imgprofile" src={imagenEsteban} />
            </div>
        </div>
        </>
    )
}

export default Aboutus