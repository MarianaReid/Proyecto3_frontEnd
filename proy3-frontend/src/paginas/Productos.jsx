import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardProductos from "../componentes/CardProductos";
import Navbar from '../componentes/Navbar'


const Productos = ({ token, usuario, setToken }) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const getProductos = async () => {
            const { data } = await axios.get('productos');
            setProductos(data);
        }
        getProductos();
    }, []);

    return (
        <>
            <Navbar token={token} usuario={usuario} setToken={setToken} />
            <div className="tituloProd">
                <Container>
                    <Row>
                        <h3>Nuestros Productos</h3>
                    </Row>
                </Container>
            </div>

            <div>
                <Row className="flex-row justify-content-center">
                    {productos.map((p) => (
                        <CardProductos producto={p} key={p.id} />
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Productos
