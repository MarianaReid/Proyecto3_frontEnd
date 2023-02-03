/* eslint-disable no-empty-pattern */
import { Container, Image } from 'react-bootstrap';
import imagenSobreNos from "../Imagenes/imagenSobreNos.jpeg";
// import Navbar from '../componentes/Navbar';
import imagenAndressa from '../Imagenes/Andressa.jpg';
import imagenEmanuel from '../Imagenes/Emmanuel.jpeg';
import imagenMariana from '../Imagenes/Mariana.jpeg';
import imagenEnzo from '../Imagenes/Enzo.jpeg';
import imagenVeronica from "../Imagenes/Veronica.jpg"
import imagenEsteban from "../Imagenes/Esteban.jpeg"


const SobreNosotros = ({ token, usuario, setToken }) => {
    return (
        <>
            {/* <Navbar token={token} usuario={usuario} setToken={setToken} /> */}
            <Image src={imagenSobreNos} fluid />
            <div className="container">
                <h1 className="text-center">Sobre Nosotros</h1>
                <div>
                    <Container className="text-justify">
                        <p>Sabores Latinos en un restorant para disfrutar en familia y disfrutar de los platos más ricos de Latinoamerica, con materia prima de calidad y la mejor atención. Tambien hacemos envios a domicilio. Desde nuestra pagina puedes realizar tu pedido y pueden disfrutar de una buena comida en casa.</p>
                    </Container>
                </div>
                <h1 className="text-center"> Nuestro Staff </h1>
            </div>
            <div>
            <Image src= {imagenAndressa} />
            <div>
                <h3>Andressa Arcocha</h3>
            </div>
        </div><div>
                <Image src= {imagenEmanuel}/>
                <div>
                    <h3>Emanuel Rizza</h3>
                </div>
            </div>
            <div>
                <Image src= {imagenVeronica}/>
                <div>
                    <h3>Veronica Menichetti</h3>
                </div>
            </div><div>
                <Image src= {imagenEnzo}/>
                <div>
                    <h3>Enzo Lobo</h3>
                </div>
            </div>
            <div>
                <Image src= {imagenEsteban}/>
                <div>
                    <h3>Esteban Orrego</h3>
                </div>
            </div><div>
                <Image src= {imagenMariana}/>
                <div>
                    <h3>Mariana Reid</h3>
                </div>
            </div>
        </>
    )
}

export default SobreNosotros