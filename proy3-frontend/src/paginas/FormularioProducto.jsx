import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, Form, Row } from 'react-bootstrap';




const FormularioProducto = ({ token }) => {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        try {
            const headers = { "x-auth-token": token };
            const response = axios.post("productos", input, {
                headers,
            });
            <Alert key="info" variant="info">
                Producto Publicado
            </Alert>
        } catch (error) {
            console.log(error);
        }
    };
        const handleChange = (event) => {
            const { name, value } = event.target;
            const changedInput = { ...input, [name]: value};
            setInput(changedInput);
        }
    
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="validationCustom01">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        name="nombre"
                                        onChange={(event)=> handleChange(event)}
                                        required
                                        type="text"
                                        placeholder="Nombre del Producto"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group  controlId="validationCustom02">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control
                                        name="imagen"
                                        onChange={(event)=> handleChange(event)}
                                        required
                                        type="text"
                                        placeholder="Imagen"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group  controlId="validationCustom02">
                                    <Form.Label>Categoría</Form.Label>
                                    <Form.Control
                                        name="categoria"
                                        onChange={(event)=> handleChange(event)}
                                        required
                                        type="text"
                                        placeholder="Categoria"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group  controlId="validationCustom02">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        name="precio"
                                        onChange={(event)=> handleChange(event)}
                                        required
                                        type="text"
                                        placeholder="Precio"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group  controlId="validationCustom02">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        name="descripcion"
                                        onChange={(event)=> handleChange(event)}
                                        required
                                        type="text"
                                        placeholder="Descripción"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Row>
                            <Button type="submit">Publicar Producto</Button>
                            </Row>
                        </Form>
        </div>
    )
}

export default FormularioProducto
