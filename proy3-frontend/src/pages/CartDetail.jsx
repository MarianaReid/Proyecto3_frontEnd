import React, { useState } from 'react'
import { Button, Form, Row, Table } from 'react-bootstrap';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateCart } from '../services/cartsService';
import './cartdetail.css'

const CartDetail = () => {

  const { cart } = useLoaderData();

  const navigate = useNavigate();

  const [cartisActive, setCartisActive] = useState(cart);


  const handleSubmit = (e) => {
    e.preventDefault();
    editisActive();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCartisActive({
      ...cart,
      [name]: value,
    });
  };

  const editisActive = async () => {

    await updateCart(cart._id, cartisActive);

    Swal.fire(
      'Presiona ok para continuar',
    )
    navigate('/admin/edit/pedido');
  }

  return (
    <>
      <Row>
        <Link to="/admin/edit/pedido">
          <Button className='btn-block'>Volver al listado de pedidos</Button>
        </Link>
      </Row>
      <Row className='mt-5 mb-2'>
        <h1>Detalle del pedido</h1>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {cart.productsCart.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.cantidad}</td>
                <td>$ {product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row className='my-3 text-end'>
        <h3 className='fw-bolder'>Total: $ {cart.total}</h3>
      </Row>
      <Row className='my-3'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="isActive">
            <Form.Label>Estado</Form.Label>
            <Form.Select required
              name="isActive"
              value={cartisActive.isActive}
              onChange={handleChange}
            >
              <option value={true}>Completado</option>
              <option value={false}>Pendiente</option>
            </Form.Select>
          </Form.Group>
          <Button 
          variant="success"
          type="submit"
          className='btn-block'
          >
            Enviar
          </Button>
          <Link to="/admin/edit/pedido">
            <Button 
            variant="danger"
            className='btn-block mt-2'
            >
              Cancelar
            </Button>
          </Link>
        </Form>
      </Row>
    </>
  )
}

export default CartDetail

export const loaderCart = async ({ params }) => {
  const res = await fetch(`https://proyecto3-rolling-code-los-crack.vercel.app/api/cart/${params.id}`);

  if (!res.ok)
    // eslint-disable-next-line no-throw-literal
    throw {
      status: res.status,
      statusText: "No encontrado",
    };

  const cart = await res.json();

  return { cart };
}