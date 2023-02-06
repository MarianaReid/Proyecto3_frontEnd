import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardProduct from '../components/CardProduct';

const Products = ({ search }) => {
  const [dato, setDato] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchUrl = search
        ? `https://proyecto3-rolling-code-los-crack.vercel.app/api/products?page=${page}&search=${search}`
        : `https://proyecto3-rolling-code-los-crack.vercel.app/api/products?page=${page}`;
        const { data } = await axios.get(searchUrl);
        setHasMore(data.page < data.totalPages);
        setDato((prevDato) => prevDato.concat(data.docs));
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [search, page])

  return (
    <>

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