import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Modal, Row, Table } from "react-bootstrap";
import { Form } from "react-router-dom";

const AdminProductos = ({ token, product }) => {
    const [editProduct, setEditProduct] = useState({})
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleClose = () => setShow(false);
    const handleCloseProduct = () => setShowProduct(false);
    const getProducts = async () => {
        const headers = { "p-token": token };
        const { data } = await axios.get("products");
        setProducts(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (id) => {
        const headers = { "p-token": token };
        await axios.delete(`products/${id}`);
        getProducts();
    };

    const updateProduct = async (product) => {
        setEditProduct(product)
        setShow(true);
    };

    const showProductModal = async (product) => {
        setEditProduct(product)
        setShowProduct(true);
    };

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        setValidated(true);
        e.preventDefault();
        if (form.checkValidity() === false) {
            return e.stopPropagation();
        }

        try {
            const headers = { "p-token": token };
            await axios.put(`products/${editProduct.id}`, editProduct);
            getProducts();
            setShow(false)

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const product = { ...editProduct, [name]: value };
        setEditProduct(product);
    };
    return (
        <div>
            <div className="container my-3">
                <h1>Productos</h1>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr className="text-center">
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td className="text-center"> {p.name} </td>
                                <td className="text-center"> {p.category} </td>
                                <td className="text-center"> {p.price} </td>
                                <td className="text-center w-25"> {p.description} </td>
                                <td className="text-center">
                                    <Button variant="danger" onClick={() => deleteProduct(p.id)}>Borrar</Button>

                                    <Button variant="warning" onClick={() => updateProduct(p)}>Editar</Button>

                                    <Button variant="info" onClick={() => showProductModal(p)}>Mostrar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    name="name"
                                    value={editProduct.name}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="Nombre del producto"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    name="image"
                                    value={editProduct.image}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="http://imagen.jpg"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control
                                    name="category"
                                    value={editProduct.category}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="Categoría"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    name="price"
                                    value={editProduct.price}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="number"
                                    placeholder="Precio"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    name="description"
                                    value={editProduct.description}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="Descripción"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                                <Button type="submit" className="mx-auto btn-info">
                                    Editar producto
                                </Button>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    name="name"
                                    value={deleteProduct.name}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="Nombre del producto"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    name="image"
                                    value={deleteProduct.image}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="http://imagen.jpg"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Control
                                    name="category"
                                    value={deleteProduct.category}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="Categoría"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    name="price"
                                    value={deleteProduct.price}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="number"
                                    placeholder="Precio"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    name="description"
                                    value={deleteProduct.description}
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="Descripción"
                                />
                                <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                                <Button type="submit" className="mx-auto btn-info">
                                    Borrar producto
                                </Button>
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
                    show={showProduct}
                    onHide={handleCloseProduct}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{deleteProduct.name}</Modal.Title>
                    </Modal.Header>
                    <Card.Img src={deleteProduct.image} />
                    <Modal.Body className="d-flex flex-column">
                        <div className="border-bottom border-top mb-3 p-4">
                            <strong>Nombre:</strong> {deleteProduct.brand}
                        </div>

                        <div className="border-bottom border-top mb-3 p-4">
                            <strong>Categoría:</strong> {deleteProduct.category}
                        </div>

                        <div className="border-bottom border-top mb-3 p-4">
                            <strong>Precio:</strong> {deleteProduct.price}
                        </div>

                        <div className="border-bottom border-top p-4 text-justify">
                            <strong>Descripción:</strong> {deleteProduct.description}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="info" onClick={handleCloseProduct}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default AdminProductos