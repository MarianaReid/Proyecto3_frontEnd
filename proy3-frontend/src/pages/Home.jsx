import Menu from "../components/Card"
import { Row, Col, Button } from 'react-bootstrap';
import Opciones from "../components/Carrusel"
import { Link, useLoaderData } from "react-router-dom"
import './home.css'

const Home = () => {

  const { categories } = useLoaderData();

  return (
    <>
      <Row>
        <Opciones />
      </Row>

      <Row className="text-center">
        <h2 className="fw-bold" >Categorías</h2>
      </Row>
      <Row>
        {
          categories.docs.map((cat) => (
            <Col key={cat._id} xs={6}>
              <Menu id={cat._id} title={cat.name} imageSource={cat.image} />
            </Col>
          ))}
      </Row>

      <Row>
        <Link to="/products" className="link-css">
          <Button>
            <i className="fa-sharp fa-solid fa-magnifying-glass">
            </i>
            <span>Buscador de productos</span>
          </Button>
        </Link>
      </Row>
    </>
  )
}

export default Home

export const loaderCategories = async () => {
  const res = await fetch("https://proyecto3-rolling-code-los-crack.vercel.app/api/categories?limit=20&page=1");

  if (!res.ok)
    // eslint-disable-next-line no-throw-literal
    throw {
      status: res.status,
      statusText: "No encontrado",
    };

  const categories = await res.json();

  return { categories };
}