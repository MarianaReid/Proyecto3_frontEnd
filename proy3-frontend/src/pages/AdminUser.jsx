import { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormCreateUser from '../components/FormCreateUser';
import Loader from '../components/Loader';
import { deleteUser, getAllUsers } from '../services/userService';

const AdminUser = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [usuariosSearch, setUsuariosSearch] = useState([]);
    const [term, setTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [createUser, setCreateUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const fetchUsers = async () => {
            const { data } = await getAllUsers();
            // console.log("DATAA:",data.docs);
            setUsuarios(data.docs);
            setUsuariosSearch(data.docs);
        };
        fetchUsers();
        setLoading(false);
    }, []);

    useEffect(() => {
        const search = usuarios.filter(user => user.name?.toLowerCase().includes(term.toLowerCase()));
        setUsuariosSearch(search)
    }, [term, usuarios])

    const deleteUsuario = async (id) => {
        setLoading(true);
        await deleteUser(id);
        Swal.fire(
            'Usuario eliminado!',
            'Presiona ok para continuar',
            'success'
        )
        const filteredUsers = usuarios.filter(
            (user) => user._id !== id
        );
        setUsuarios(filteredUsers);
        setLoading(false);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-1">Panel Administrador</h1>
            <h2 className="text-center mb-4 fw-bolder">USUARIOS</h2>
            <button
                className="btn btn-primary my-3 btn-block"
                onClick={() => setCreateUser(!createUser)}
            >
                {createUser ? 'Ver Tabla de usuarios' : 'Agregar nuevo usuario'}
            </button>
            {createUser ? (
                <FormCreateUser
                    setCreateUser={setCreateUser}
                    usuarios={usuarios}
                    setUsuarios={setUsuarios}
                    setUsuariosSearch={setUsuariosSearch}
                />
            ) : (
                <Loader isLoading={loading}>
                    <InputGroup className="mb-3 my-3">
                        <InputGroup.Text id="basic-addon1">Buscar</InputGroup.Text>
                        <Form.Control
                            placeholder="Usuarios"
                            aria-label="Usuarios"
                            aria-describedby="basic-addon1"
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    </InputGroup>
                    <Table striped bordered hover variant="dark" className='m-auto my-4'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Actiones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosSearch.map((usuario, index) => (
                                <tr key={usuario._id} >
                                    <td>{++index}</td>
                                    <td>{usuario.name}</td>
                                    <td>
                                        <Button
                                            type="button"
                                            className="m-1"
                                            variant="danger"
                                            onClick={() => deleteUsuario(usuario._id)}
                                        >
                                            D
                                        </Button>
                                        <Button
                                            type="button"
                                            className="m-1"
                                            variant="warning"
                                            onClick={() =>
                                                navigate(`/admin/edit/user/${usuario._id}`)
                                            }
                                        >
                                            E
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Loader>
            )}
        </div>
    );
};

export default AdminUser;
