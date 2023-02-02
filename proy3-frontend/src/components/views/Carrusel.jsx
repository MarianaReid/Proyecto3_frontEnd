import Carousel from 'react-bootstrap/Carousel';

const Opciones = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.deliveryhero.io/image/pedidosya/products/27474453-d04362a6-de29-430a-bf97-bb1cc4d9e7b6.jpeg?quality=90&width=1152&webp=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.deliveryhero.io/image/pedidosya/products/27474453-d04362a6-de29-430a-bf97-bb1cc4d9e7b6.jpeg?quality=90&width=1152&webp=1"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.deliveryhero.io/image/pedidosya/products/27474453-d04362a6-de29-430a-bf97-bb1cc4d9e7b6.jpeg?quality=90&width=1152&webp=1"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Opciones;