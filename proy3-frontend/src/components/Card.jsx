import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Menu = ({ id, imageSource, title }) => {
    return (
        <Card >
            <Card.Img variant="top" src={imageSource} fluid className='m-2' />
            <Card.ImgOverlay>
                <Card.Body>
                    <Link to={`/products/category/${id}`}>
                        <Card.Title className='text-center text-uppercase fw-semibold text-warning bg-dark bg-opacity-75 m-auto'>{title}</Card.Title>
                    </Link>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Menu;    