import React from 'react';
import { Alert, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
    return (
        <section className="container-fluid color-texto">
            <div className="row rowLadrillo sectionLogin">
                <article className="col-12 col-md-6 bg-login px-5 pb-3">
                <h3 className="mt-5 text-center">Ingrese su email y contraseña</h3>
                <Form className="mt-4">
            <Form.Group className="mb-3 p-3 bg-grupo" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="custom-input"
                type="text"
                placeholder="tumail@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3 p-3 bg-grupo" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className="custom-input"
                type="password"
              />
              <a href="#" className="ms-1">Olvidé la contraseña</a>
              <br />
            </Form.Group>
            <Button variant="outline-light" type="submit" className="me-1 botonLogin">
              Ingresar
            </Button>
            <Button
              variant="outline-light"
              className="botonLogin"
            >
              Cancelar
            </Button>
          </Form>
                </article>
            </div>
        </section>
    );
};

export default Login;
