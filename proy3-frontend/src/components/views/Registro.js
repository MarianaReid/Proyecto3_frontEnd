import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import "./Registro.css"
import { cantidadCaracteres, validarClave, validarEmail, validarNombre } from './helperUsuario';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Registro = ({ setUsuarioLogueado }) => {
    const [nombre, setnombre] = useState('');
    const [email, setemail] = useState('');
    const [clave, setclave] = useState('');

    const [msjError, setMsjError] = useState(false);
    const [msjErrorUsuario, setMsjErrorUsuario] = useState(false);
    const [msjErrorClave, setMsjErrorClave] = useState(false);
    const [msjErrorEmail, setMsjErrorEmail] = useState(false);
    const [msjErrorEmailRepetido, setMsjErrorEmailRepetido] = useState(false);
    const [msjErrorNombre, setMsjErrorNombre] = useState(false);

    // const URL = ? falta saber la url del backend en usuarios

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validarNombre(nombre)) setMsjErrorNombre(false);
        else setMsjErrorNombre(true);

        if (validarClave(clave)) setMsjErrorClave(false);
        else setMsjErrorClave(true);

        if (cantidadCaracteres(nombre, 8, 40)) setMsjErrorUsuario(false);
        else setMsjErrorUsuario(true);

        if (validarEmail(email)) setMsjErrorEmail(false);
        else setMsjErrorEmail(true);

        if (
            cantidadCaracteres(nombre, 8, 40) &&
            validarClave(clave) &&
            validarEmail(email) &&
            validarNombre(nombre)
        ) {
            setMsjError(false);
            const nuevoUsuario = {
                nombre,
                email,
                password: clave,
                estado: true,
                perfil: false,
            };

            try {
                const parametroPeticion = {
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevoUsuario),
                };
                const respuesta = await fetch(
                    URL + '/nuevo',
                    parametroPeticion
                );
                if (respuesta.status === 201) {
                    const data = await respuesta.json();

                    localStorage.setItem(
                        // app del localstorage
                        JSON.stringify(data)
                    );
                    setUsuarioLogueado(data);
                    // mandar email

                    Swal.fire({
                        title: 'Registro exitoso',
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                    }).then((result) => {
                        navigate(-2);
                    });
                } else {
                    setMsjErrorEmailRepetido(true)
                }
            } catch (error) {
                Swal.fire(
                    'Se produjo un error',
                    'No se pudo realizar su registro, por favor intente nuevamente en unos minutos, muchas gracias.',
                    'error'
                );
            }
        } else {
            setMsjError(true);
        }
    };


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