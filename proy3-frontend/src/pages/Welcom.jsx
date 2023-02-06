import React from 'react'
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const Welcom = () => {
    const { apiUser } = useLoaderData();
    return (
        <>
            <Row className='m-auto my-5'>
                <h2>{apiUser.name}</h2>
                <h1>Bienvenido su cuenta se encuentra activa 🚀</h1>
                <h4>Puede ingresar haciendo clic en el botón de abajo</h4>
                <Link to="/login" className='btn btn-success m-auto'>Ingresar</Link>
            </Row>
        </>
    )
}

export default Welcom

export const loaderWelcom = async ({ params }) => {
    const res = await fetch(`https://proyecto3-rolling-code-los-crack.vercel.app/api/user/${params.id}`);

    if (!res.ok)
        // eslint-disable-next-line no-throw-literal
        throw {
            status: res.status,
            statusText: "No encontrado",
        };

    const apiUser = await res.json();

    return { apiUser };
}