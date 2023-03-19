import Carousel from 'react-bootstrap/Carousel';
// como importar css de carrusel
import "./carrusel.css";

const carouselOp = [
    {
        id: 1,
        imageOp: "https://cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/HIFE3WWWW5E4XP2T6DQOOQD5J4.jpg",
        titleOp: "Asado",
        descriptionOp: "Argentino"
    },
    {
        id: 2,
        imageOp: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/DEORVD7DUVE2XFAPCFPGZJ76H4.jpg",
        titleOp: "Feijoada",
        descriptionOp: "Brasileña"
    },
    {
        id: 3,
        imageOp: "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2019/05/taco-mexicano.jpg?fit=1200%2C675&ssl=1",
        titleOp: "Tacos",
        descriptionOp: 'Mexicanos'
    }
]

const Opciones = () => {
    return (
        <Carousel className="carousel-img">
            {
                carouselOp.map((op) => (
                    <Carousel.Item key={op.id}>
                        <img
                            src={op.imageOp}
                            alt={op.titleOp}
                        />
                        <Carousel.Caption className="carousel-caption">
                            <h3>{op.titleOp}</h3>
                            <p>{op.descriptionOp}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default Opciones;