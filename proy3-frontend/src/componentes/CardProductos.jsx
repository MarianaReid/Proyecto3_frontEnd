import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const CardProductos = (product) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div>
                <Card className="m-3" style={{ width: "18rem", maxHeight: "27rem" }}>
                    <Card.Title className="m-2 text-center">{product.name}</Card.Title>
                    <Card.Img src={product.image} className="limit-height" />
                    <Card.Body className="d-flex flex-column">
                        <div className="mb-1">
                            <Button variant="outline-secondary" className="w-100" disabled> ${product.price}</Button>
                        </div>
                        <div className="">
                            <Button variant="info" className="w-50">Comprar</Button>
                            <Button variant="secondary" className="w-50" onClick={handleShow}>
                                Mostrar
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{product.name}</Modal.Title>
                    </Modal.Header>
                    <Card.Img src={product.image} />
                    <Modal.Body className="d-flex flex-column">
                        <div className="border-bottom border-top mb-3 p-4">
                            <strong>Nombre:</strong> {product.brand}
                        </div>

                        <div className="border-bottom border-top mb-3 p-4">
                            <strong>Categoría:</strong> {product.category}
                        </div>

                        <div className="border-bottom border-top mb-3 p-4">
                            <strong>Precio:</strong> {product.price}
                        </div>

                        <div className="border-bottom border-top p-4 text-justify">
                            <strong>Descripción:</strong> {product.description}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="info">Comprar</Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default CardProductos
