import Card from 'react-bootstrap/Card';



const Menu = ({ imageSource, title }) => {
    return (
                <Card >
                    <Card.Img variant="top" src={imageSource} />
                    <Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
    );
}

export default Menu;    