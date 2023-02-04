import Carousel from 'react-bootstrap/Carousel';

const carouselOp = [
    {
        id: 1,
        imageOp: "https://http2.mlstatic.com/D_NQ_NP_623300-MLA26451197581_112017-O.jpg",
        titleOp: "MENU 1",
        descriptionOp: "Soy un menu"
    },
    {
        id: 2,
        imageOp: "https://img.freepik.com/fotos-premium/plato-verduras-carne-asada_538646-4881.jpg",
        titleOp: "MENU 2",
        descriptionOp: "Soy un menu"
    },
    {
        id: 3,
        imageOp: "https://lavicenta.com.mx/wp-content/uploads/2020/04/carne-asada-820x450.jpg",
        titleOp: "MENU 3",
        descriptionOp: 'Soy un menu'
    }
]

const Opciones = () => {
    return (
        <Carousel>
            {
                carouselOp.map((op) => (
                    <Carousel.Item key={op.id}>
                        <img
                            className="d-block w-100"
                            src={op.imageOp}
                            alt={op.titleOp}
                        />
                        <Carousel.Caption>
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