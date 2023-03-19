import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './card.css';


const Menu = ({ id, imageSource, title }) => {
    return (
        <Link to={`/products/category/${id}`}>
            <Card className='card-css'>
                <Card.Img variant="top" src={imageSource} className='card-img-css' />
                <Card.ImgOverlay className='card-imgoverlay-css'>
                    <Card.Body>
                        <Card.Title className='card-title-css'>
                            <p>{title}</p>
                        </Card.Title>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </Link>
    );
}

export default Menu;    