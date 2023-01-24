import React from 'react';
import { Form, Card, Button} from 'react-bootstrap';
import "./Registro.css"

const Registro = () => {
    return (
        <div className=" justify-content-center  px-20  py-20 ">
        <Card className="rounded bg-form px-0">
            <div className="bg-dark rounded p-4">
                <h1 className="title-typography text-center text-light">
                    Complete el formulario para registrarse
                </h1>
            </div>
            <Form
                className="container formRegistro"
            >
                <div className="row py-4">
                    <div className="col-12 ">
                        <Form.Group
                            className="mb-3 text-light"
                            controlId="formAdmin"
                        >
                            <Form.Label>Nombre completo*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="entre (8 y 40) caracteres."
                            />
                        </Form.Group>
                    </div>
                    <div className="col-12 ">
                        <Form.Group
                            className="mb-3 text-light"
                            controlId="formEmail"
                        >
                            <Form.Label>Email *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ej: mario23@gmail.com"
                            />
                        </Form.Group>
                    </div>
                    <div className="col-12 ">
                        <Form.Group
                            className="mb-3 text-light"
                            controlId="formClave"
                        >
                            <Form.Label>Contraseña *</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ej: Mario123.*"
                            />
                        </Form.Group>
                    </div>
                </div>
                <Button
                    variant="outline-light"
                    className="mb-3 botonRegistro"
                    type="submit"
                >
                    Registrar
                </Button>
            </Form>
        </Card>
    </div>
);
};

export default Registro;