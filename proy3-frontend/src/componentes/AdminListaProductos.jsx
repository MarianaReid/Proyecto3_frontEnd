import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal, Row, Table } from 'react-bootstrap';


const AdminListaProductos = ({ token, producto }) => {

    const [editarProducto, setEditarProducto] = useState({});
    const [productos, setProductos] = useState([]);
    const [show, setshow] = useState(false);
    const [showProducto, setshowProducto] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setshow(false);
    const handleCloseProd = () => setshowProducto(false);
    const getProductos = async () => {
        const headers = { "x-auth-token": token };
        const { data } = await axios.get("produc", { headers });
        setProductos(data);
    }
    useEffect(() => {
        getProductos();
    }, []);

    const borrarProducto = async (id) => {
        const headers = { "x-auth-token": token };
        await axios.delete(`productos/${id}`, { headers });
        getProductos();
    };

    const actualizarProducto = async (producto) => {
        setEditarProducto(producto)
        setshow(true);
    };

    const showModalProd = async (producto) => {
        setEditarProducto(producto)
        setshowProducto(true);
    };


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const headers = { "x-auth-token": token };
            axios.put(`productos/$(editProducto.id)`, editarProducto, { headers });
            getProductos();
            setshow(false);
        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = (event) => {
        const { nombre, valor } = event.target;
        const producto = { ...editarProducto, [nombre]: valor };
        setEditarProducto(producto);
    };

    return (
        <div className='container my-3'>
            <h1>Productos</h1>

            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Nombre:</th>
                        <th>Categoria</th>
                        <th>Precio:</th>
                        <th>Descripción:</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((p) => (
                        <tr key={p.id}>
                            <td className="text-center">{p.nombre} </td>
                            <td className="text-center">{p.categoria}</td>
                            <td className="text-center">{p.precio} </td>
                            <td className="text-center">{p.descripcion} </td>
                            <td className="text-center">
                                <button onClick={() => borrarProducto(p.id)} type="button" className="btn btn-danger">
                                    <i class="fa-regular fa-trash"></i>
                                </button>
                                <button onClick={() => actualizarProducto(p)} type="button" className="btn btn-danger">
                                    <i class="fa-regular fa-pen"></i>
                                </button>
                                <button onClick={() => showModalProd(p)} type="button" className="btn btn-danger">
                                    <i class="fa-regular fa-check"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody >
            </Table >


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="nombre"
                                onChange={(event) => handleChange(event)}
                                required
                                type="text"
                                placeholder="Nombre del Producto"
                                defaultValue={editarProducto.name}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                name="imagen"
                                onChange={(event) => handleChange(event)}
                                required
                                type="text"
                                placeholder="Imagen"
                                defaultValue={editarProducto.imagen}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control
                                name="Categoria"
                                onChange={(event) => handleChange(event)}
                                required
                                type="text"
                                placeholder="Categoria"
                                defaultValue={editarProducto.categria}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                name="precio"
                                onChange={(event) => handleChange(event)}
                                required
                                type="text"
                                placeholder="Precio"
                                defaultValue={editarProducto.precio}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                name="descripcion"
                                onChange={(event) => handleChange(event)}
                                required
                                type="text"
                                placeholder="Descripción"
                                defaultValue={editarProducto.descripcion}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Row>
                            <Button type="submit">Editar Producto</Button>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{editarProducto.name}</Modal.Title>
                </Modal.Header>
                <Card.Img src={editarProducto.imagen} />
                <Modal.Body className="d-flex flex-column">
                    <div className="border-bottom border-top mb-3 p4">
                        <strong>Categoría:</strong> {producto.categoria}
                    </div>
                    <div className="border-bottom border-top mb-3 p4">
                        <strong>Precio:</strong> {producto.precio}
                    </div>
                    <div className="border-bottom border-top p4 text-justify">
                        <strong>Descripción:</strong> {producto.descripcion}
                    </div>
                </Modal.Body >
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseProd}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default AdminListaProductos;