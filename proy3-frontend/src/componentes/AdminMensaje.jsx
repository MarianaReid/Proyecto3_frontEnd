import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


const AdminMensaje = ({ token }) => {
    const [mensajes, setMensajes] = useState([]);

    const getMensajes = async () => {
        const headers = { 'x-auth-token': token }
        const { data } = await axios.get('mensajes', { headers });
        setMensajes(data);
    };
    useEffect(() => {
        getMensajes();
    }, []);

    const deleteMensaje = async (id) => {
        const confirmar = window.confirm('¿Estás seguro que deseas eliminar el mensaje?')
        if (confirmar) {
            const headers = { 'x-auth-token': token };
            await axios.delete(`mensajes/${id}`, { headers });
            getMensajes();
        }
    };

    return (
        <div className="container my-3">
            <h1>Mensajes</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center">
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Tipo</th>
                        <th>Contenido</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mensajes.map((m) => (
                            <tr key={m.id}>
                                <td className="text-center"> {m.nombre} </td>
                                <td className="text-center"> {m.email} </td>
                                <td className="text-center"> {m.tipo} </td>
                                <td className="text-center"> {m.contenido} </td>
                                <td className="text-center">
                                    <button onClick={() => deleteMensaje(m.id)} type="button" className="btn btn-danger">
                                        <i class="fa-solid fa-trash-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AdminMensaje;
