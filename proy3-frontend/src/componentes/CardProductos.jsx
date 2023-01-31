import { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap";


const CardProductos = ({ producto }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    <div>
        <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Title className="m-2 text-center">{producto.nombre}</Card.Title>
            <Card.Img src={producto.imagen} className="limit-height" />
            <Card.Body>
                <div>
                    <Button variant="outline-secondary" className="w-100" disable>{producto.precio}</Button>
                </div>
                <div>
                    <Button variant="success" className="w-50">show</Button>
                    <Button variant="primary" className="w-50">Comprar</Button>
                </div>

            </Card.Body>
        </Card>
        <Modal
            show={show}
            onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{producto.name}</Modal.Title>
            </Modal.Header>
            <Card.Img src={producto.imagen} />
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}> Comprar </Button>
                <Button variant="secondary" onClick={handleClose}> Cerrar </Button>
            </Modal.Footer>
        </Modal>
    </div>
}


export default CardProductos