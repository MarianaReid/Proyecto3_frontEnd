import React from 'react'
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CardPageProduct from '../components/CardPageProduct';

const ProductMenu = () => {

  const { product } = useLoaderData();

  console.log(product);

  return (
    <>
      <Row>
        <CardPageProduct _id={product._id} image={product.image} name={product.name} description={product.description} price={product.price} stock={product.stock} />
      </Row>
    </>
  )
}

export default ProductMenu

export const loaderProduct = async ({ params }) => {
  const res = await fetch(`https://proyecto3-rolling-code-los-crack.vercel.app/api/product/${params._id}`);
  const product = await res.json();

  return { product };
}