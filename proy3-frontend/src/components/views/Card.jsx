import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



const Menu = ({ imageSource, Title }) => {
    return (
        <Container className="justify-content-xs-center">
            <Col>
                <Card >
                    <Card.Img variant="top" src={imageSource} />
                    <Card.ImgOverlay>
                        <Card.Body>
                            <h4><Card.Title>{Title}</Card.Title></h4>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Container>

    );
}

export default Menu;    