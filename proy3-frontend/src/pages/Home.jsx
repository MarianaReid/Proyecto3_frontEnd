import Menu from "../components/Card"
import { Row, Col, Button } from 'react-bootstrap';
import Opciones from "../components/Carrusel"
import { Link, useLoaderData } from "react-router-dom"

const Home = () => {

  const { categories } = useLoaderData();

  console.log(categories.docs);

  return (
    <>
      <Row>
        <Opciones />
      </Row>

      <Row className="text-center">
        <h2>Categorias</h2>
      </Row>
      <Row>
        {
          categories.docs.map((cat) => (
            <Col key={cat._id} xs={6}>
              <Menu id={cat._id} title={cat.name} imageSource={cat.image} />
            </Col>
          ))}
      </Row>

      <Row className="m-auto my-3">
        <Link to="/products" className="d-grid">
          <Button variant="outline-dark" size="lg">
            <i className="fa-sharp fa-solid fa-magnifying-glass">
              <span className="mx-3">Buscador de productos</span>
            </i>
          </Button>
        </Link>
      </Row>
    </>
  )
}

export default Home

export const loaderCategories = async () => {
  const res = await fetch("https://proyecto3-rolling-code-los-crack.vercel.app/api/categories?limit=20&page=1");
  
  if(!res.ok)
  // eslint-disable-next-line no-throw-literal
  throw {
      status: res.status,
      statusText: "No encontrado",
  };
  
  const categories = await res.json();

  return { categories };
}