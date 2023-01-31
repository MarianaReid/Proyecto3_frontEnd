import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Menu = () => {
    return (
        <Container className="justify-content-xs-center">
            <Row >
                <Col xs={6}>
                    <Card >
                        <Card.Img variant="top" src="https://images.deliveryhero.io/image/pedidosya/products/37228432-aec8fd08-c825-41e7-a5d3-79acb04404fe.jpeg?quality=90&width=1152&webp=1" />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card.ImgOverlay>

                    </Card>
                </Col>
                <Col xs={6}>
                    <Card>
                        <Card.Img variant="top" src="https://images.deliveryhero.io/image/pedidosya/products/37228432-aec8fd08-c825-41e7-a5d3-79acb04404fe.jpeg?quality=90&width=1152&webp=1" />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Card >
                        <Card.Img variant="top" src="https://images.deliveryhero.io/image/pedidosya/products/37228432-aec8fd08-c825-41e7-a5d3-79acb04404fe.jpeg?quality=90&width=1152&webp=1" />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card >
                        <Card.Img variant="top" src="https://images.deliveryhero.io/image/pedidosya/products/37228432-aec8fd08-c825-41e7-a5d3-79acb04404fe.jpeg?quality=90&width=1152&webp=1" />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Menu;