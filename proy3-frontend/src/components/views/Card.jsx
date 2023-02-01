import { Col, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



const Menu = ({ imageSource, title }) => {
    return (
        <Container className="justify-content-xs-center">
            <Col>
                <Card >
                    <Card.Img variant="top" src={imageSource} />
                    <Card.ImgOverlay>
                        <Card.Body>
                            <h4><Card.Title>{title}</Card.Title></h4>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Container>

    );
}

export default Menu;    