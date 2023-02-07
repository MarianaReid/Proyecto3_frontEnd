import Carousel from 'react-bootstrap/Carousel';

const carouselOp = [
    {
        id: 1,
        imageOp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRSTx0BPPyOCNWO9Mhpo5XAITUAAkhBqxKA&usqp=CAU",
        titleOp: "MENU 1",
        descriptionOp: "Parrillada Argentina"
    },
    {
        id: 2,
        imageOp: "https://www.buffetcrepeecia.com.br/wp-content/uploads/2017/02/feijoada-paio-275x183.jpg",
        titleOp: "MENU 2",
        descriptionOp: "Rica Feijoada Brasileña"
    },
    {
        id: 3,
        imageOp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5hW2w-p78NyBaSTv7YlXezImcGRARjQLvw&usqp=CAU",
        titleOp: "MENU 3",
        descriptionOp: 'Imperdibles Tacos Mexicanos'
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