import React from 'react'
import { Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CardProduct from '../components/CardProduct';

const Category = () => {
  const { category } = useLoaderData();

  console.log("CATEGORY:", category);

  console.log("CATEGORY/PRODUCTS:", category.products);

  return (
    <>
      <Row className='text-center mb-4'>
        <h1 className='fw-bold'>{category.name}</h1>
        <Image src={category.image} thumbnail className='w-50 m-auto'/>
      </Row>

    <hr />

      <Row>
        <h1 className='m-auto text-center'>Menu</h1>
        {category.products.length > 0 ?
          (
            category.products.map((product) => (
              <div key={product._id} className="m-auto my-4">
                <CardProduct _id={product._id} image={product.image} name={product.name} description={product.description} price={product.price} stock={product.stock} />
              </div>
            ))
          ) :
          (
            <h3>No se encuentran resultados</h3>
          )
        }
      </Row>
    </>
  )
}

export default Category

export const loaderCategory = async ({ params }) => {
  const res = await fetch(`https://proyecto3-rolling-code-los-crack.vercel.app/api/category/${params.id}`);

  if (!res.ok)
    // eslint-disable-next-line no-throw-literal
    throw {
      status: res.status,
      statusText: "No encontrado",
    };

  const category = await res.json();

  return { category };
}