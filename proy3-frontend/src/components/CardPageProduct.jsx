import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AgregarCarrito } from '../pages/Pedidos/HelperCarrito'

const CardPageProduct = ({ _id, product, image, name, description, price, stock }) => {
    const navigate = useNavigate();

    return (
        <Card className='m-auto my-3'>
            <Card.Header className='m-auto text-center'>{name}</Card.Header>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>${price}</ListGroup.Item>
                <ListGroup.Item>Stock {stock}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link>
                    {
                        stock === 0 ?
                            <Button variant='danger' disabled>Sin Stock</Button>
                            :
                            <Button variant='success' onClick={() => {
                                AgregarCarrito(product);
                                navigate("/products/pedidos");
                            }
                            }>Añadir al carrito</Button>
                    }
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardPageProduct