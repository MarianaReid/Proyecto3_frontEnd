import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardProductos from '../componentes/CardProductos';


const SeccionProductos = ({ token, usuario, setToken }) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const getProductos = async () => {
            const { data } = await axios.get('productos');
            setProductos(data);
        };
        getProductos();
    }, []);

    return (
        <div>
            <Container className="my-5">
                <Row className="my-5">
                    <h2>Nuestros Productos</h2>
                </Row>
                <Row className="flex-row justify-content-center">
                    {productos.map((p) => (
                        <CardProductos producto={p} key={p.id} />
                    )).slice(0, 6)}
                </Row>
                <Row>
                    <Link to='/productos'>
                        <Button className="my-5 justify-content-center"> Ver Más </Button>
                    </Link>
                </Row>
            </Container>
        </div>
    )
}

export default SeccionProductos
