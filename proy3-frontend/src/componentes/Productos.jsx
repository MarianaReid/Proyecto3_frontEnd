import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Producto from './Productos';


const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
            const getProduct = async () => {
                const { data } = await axios.get('productos');
                setProductos(data);
        };
        getProduct();
    }, []);

    return (
        <div className="container my-5">
            <Row>
                {productos.map((p) => 
                <Producto Producto={p} key={p.id} />)}
            </Row>
        </div>
    )
}

export default Productos
