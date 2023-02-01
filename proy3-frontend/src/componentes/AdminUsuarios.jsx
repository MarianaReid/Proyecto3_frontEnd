// import axios from "axios";
// import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


const AdminUsuarios = ({ usuarios }) => {
    // const [usuarios, setUsuarios] = useState([]);
    // useEffect(() => {
    //     const getUsuarios = async () => {
    //         const headers = { 'x-auth-token': token }
    //         const { data } = await axios.get('users', { headers });
    //         setUsuarios(data);
    //     };
    //     getUsuarios();
    // }, [token]);
    return (
        <div className="container my-3">
            <h1>Usuarios</h1>

            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center">
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Estado</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((u) => (
                            <tr key={u.id}>
                                <td className="text-center">{u.nombre}</td>
                                <td className="text-center">{u.email}</td>
                                <td className="text-center">{u.password}</td>
                                <td className="text-center">{u.estado}</td>
                                <td className="text-center">{u.rol}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AdminUsuarios
