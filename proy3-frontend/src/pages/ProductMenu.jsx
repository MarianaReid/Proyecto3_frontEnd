import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CardPageProduct from '../components/CardPageProduct';
import { AgregarCarrito } from './Pedidos/HelperCarrito';

const ProductMenu = () => {

  const { product } = useLoaderData();

  return (
    <>
      <Row>
        <Link to="/products">
        <Button className='btn-block'>Volver</Button>
        </Link>
        <CardPageProduct _id={product._id} image={product.image} name={product.name} description={product.description} price={product.price} stock={product.stock} />
        <Button onClick={() => AgregarCarrito(product) }>ADD</Button>
      </Row>
    </>
  )
}

export default ProductMenu

export const loaderProduct = async ({ params }) => {
  const res = await fetch(`https://proyecto3-rolling-code-los-crack.vercel.app/api/product/${params.id}`);
  
  if(!res.ok)
    // eslint-disable-next-line no-throw-literal
    throw {
        status: res.status,
        statusText: "No encontrado",
    };
  
  const product = await res.json();

  return { product };
}