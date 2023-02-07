import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardPageProduct = ({ _id, image, name, description, price, stock }) => {
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
                    <Link to={"/building"}>
                        Añadir al carrito
                    </Link>
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardPageProduct