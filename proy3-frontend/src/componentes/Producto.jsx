import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Productos from '../pages/Productos'


const Producto = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('productos');
            setProductos(data);
        };
        getProducts();
    }, []);
    return (
        <div>
            <Container className="my-5">
                <Row className="flex-column justify-content-center">
                    {productos.map((p) => (
                        <Productos Productos={p} key={p.id}/>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Producto
