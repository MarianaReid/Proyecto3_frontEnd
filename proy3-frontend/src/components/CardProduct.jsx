import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const CardProduct = ({ _id, image, name, description, price, stock }) => {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
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
                    <Link to={"/building"}>
                        Añadir al carrito
                    </Link>
                </Card.Link>
                <Card.Link>
                    <Link to={`/products/${_id}`}>
                        Ver más
                    </Link>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardProduct