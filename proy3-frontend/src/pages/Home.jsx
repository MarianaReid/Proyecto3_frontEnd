import Menu from "../components/Card"
import entrada from '../components/img/entrada.jpg'
import platoprincipal from '../components/img/platoprincipal.jpg'
import postre from '../components/img/postre.jpg'
import bebidas from '../components/img/bebidas.jpg'
import { Row, Col, Button } from 'react-bootstrap';


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

        <Row className="d-grid m-auto my-3">
          <Button variant="outline-dark" size="lg">
            <i className="fa-sharp fa-solid fa-magnifying-glass">
              <span className="mx-3">Buscador de productos</span>
            </i>
          </Button>
        </Row>
    </>
  )
}

export default Home

