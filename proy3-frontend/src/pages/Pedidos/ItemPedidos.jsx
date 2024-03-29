import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatMoneda } from './HelperCarrito';
import { Badge, Button } from 'react-bootstrap';


const ItemPedidos = ({ producto, quitarProducto, restarUno, sumarUno, modTotal, setModTotal }) => {

  const [cant, setCant] = useState(producto.cantidad);

  return (
    <tr>
      <td className='itemPedido'>{producto.name}</td>
      <td className='itemPedido'>
        <Button variant='outline-light'><Badge bg="secondary" onClick={() => {
          setCant((cant - 1) > 0 ? cant - 1 : 1);
          setModTotal(!modTotal);
          restarUno(producto)
        }}>-</Badge></Button>
        {cant}

        {
          cant === producto.stock ? <Badge bg="danger" className='' >Maximo</Badge> : null
        }

        {
          cant === producto.stock ? null :(
            <Button variant='outline-light'><Badge bg="secondary" onClick={() => {
              setCant((cant + 1) >= producto.stock ? producto.stock : cant + 1);
              setModTotal(!modTotal);
              sumarUno(producto)
            }}>+</Badge></Button>
          )
        }
      </td>
      <td className='itemPedido'>{formatMoneda(producto.price)}</td>
      <td className='itemPedido'>{formatMoneda(producto.price * producto.cantidad)}</td>
      <td>
        <Button variant="danger" onClick={() => { quitarProducto(producto) }}><FontAwesomeIcon className="botont" icon={faTrash} /></Button>{' '}
      </td>
    </tr>
  );
};

export default ItemPedidos;