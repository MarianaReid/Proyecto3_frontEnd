/* eslint-disable no-empty-pattern */
import { Container, Image } from 'react-bootstrap';
import SobreNos from '../componentes/SobreNos';
import imagenSobreNos from "../Imagenes/imagenSobreNos.jpeg";
// import Navbar from '../componentes/Navbar';

const SobreNosotros = ({}) => {
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
            <SobreNos></SobreNos>
        </>
    )
}

export default SobreNosotros