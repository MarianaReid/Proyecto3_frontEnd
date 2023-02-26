import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import { formatMoneda } from './HelperCarrito';

const ItemPedidos = ({producto, quitarProducto, restarUno, sumarUno}) => {


    return (
         <tr>
              <td className='itemPedido'>{producto.name}</td>
              <td className='itemPedido'>
                <Button variant='outline-light'><Badge bg="secondary" onClick={()=>restarUno(producto)}>-</Badge></Button>
                {producto.cantidad}
                <Button variant='outline-light'><Badge bg="secondary" onClick={()=>sumarUno(producto)}>+</Badge></Button>
              </td>
              <td className='itemPedido'>{formatMoneda(producto.price)}</td>
              <td className='itemPedido'>{formatMoneda(producto.price*producto.cantidad)}</td>
              <td>
              <Button variant="danger" onClick={()=>{quitarProducto(producto)}}><FontAwesomeIcon className="botont" icon={faTrash}/></Button>{' '}
              </td>
            </tr>
    );
};

export default ItemPedidos;