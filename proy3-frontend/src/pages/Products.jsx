import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useLoaderData } from 'react-router-dom'
import CardProduct from '../components/CardProduct';

const Products = () => {
  const [dato, setDato] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // const { products } = useLoaderData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://proyecto3-rolling-code-los-crack.vercel.app/api/products?page=${page}`);
        setHasMore(data.page < data.totalPages);
        setDato((prevDato) => prevDato.concat(data.docs));
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [page])

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

      <InfiniteScroll
      dataLength={dato.length}
      hasMore={hasMore}
      next={() => setPage(prevPage => prevPage + 1)}
      loader={<h4>Cargando...</h4>}
      >
      {
      dato.length > 0 ? 
      (
        dato.map((product) => (
          <div key={product._id} className="m-auto my-4">
            <CardProduct _id={product._id} image={product.image} name={product.name} description={product.description} price={product.price} stock={product.stock} />
          </div>
        ))
      ):
      (
        <h3>No se encuentran resultados</h3>
      )
      }
      </InfiniteScroll>

    </Row>
    </>
  )
}

export default Products

// export const loaderProducts = async () => {
//   const res = await fetch(`https://proyecto3-rolling-code-los-crack.vercel.app/api/products`);
  
//   if(!res.ok)
//   // eslint-disable-next-line no-throw-literal
//   throw {
//       status: res.status,
//       statusText: "No encontrado",
//   };
  
//   const products = await res.json();

//   return { products };
// }