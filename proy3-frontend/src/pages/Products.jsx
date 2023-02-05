import React from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'
import CardProduct from '../components/CardProduct';

const Products = () => {
  const { products } = useLoaderData();

  console.log(products.docs);

  return (
    <>
    <Row className='m-auto my-3'>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Busca tu menu..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Row>

    <Row>
      <h1 className='m-auto text-center'>Menu</h1>
      {
        products.docs.map((product) => (
          <div key={product._id} className="m-auto my-4">
            <CardProduct image={product.image} name={product.name} description={product.description} price={product.price} stock={product.stock} />
          </div>
        ))
      }
    </Row>
    </>
  )
}

export default Products

export const loaderProducts = async () => {
  const res = await fetch("https://proyecto3-rolling-code-los-crack.vercel.app/api/products?limit=20");
  const products = await res.json();

  return { products };
}