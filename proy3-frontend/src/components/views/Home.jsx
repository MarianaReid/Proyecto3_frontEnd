import Menu from "./Card"
import Opciones from "./Carrusel"
import { Container, Row, Col } from 'react-bootstrap';
import entrada from './img/entrada.jpg'
import platoprincipal from './img/platoprincipal.jpg'
import postre from './img/postre.jpg'
import bebidas from './img/bebidas.jpg'
import OffCanvas from "./Navbar";
import Footer from "./Footer";


const home = [
  {
    id: 1,
    title: 'Entrada',
    image: entrada
  },
  {
    id: 2,
    title: 'Plato Principal',
    image: platoprincipal
  },
  {
    id: 3,
    title: 'Postre',
    image: postre
  },
  {
    id: 4,
    title: 'Bebidas',
    image: bebidas
  },
]


const Home = () => {

  return (
    <>
      <OffCanvas />
      <Opciones />
      <Container>
        <Row className="text-center">
          <h2>Categorias</h2>
        </Row>
        <Row>
            {
              home.map((home) => (
                <Col key={home.id} xs={6}>
                  <Menu title={home.title} imageSource={home.image} />
                </Col>
              ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Home

