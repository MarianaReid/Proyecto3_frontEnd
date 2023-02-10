import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormCreateUser from '../components/FormCreateUser';
import { getOneUsers } from '../services/userService';

const UserEdit = () => {
    const { id } = useParams();
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            setLoading(true);
            const { data } = await getOneUsers(id);
            setUsuario(data)
            setLoading(false);
        }
        getUser();
    }, [id]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-1">Panel Administrador</h1>
            <h2 className="text-center mb-4 fw-bolder">USUARIOS</h2>
            <button
                className="btn btn-primary my-3 btn-block"
                onClick={() => navigate('/admin/edit/user')}
            >
                Ver Tabla de usuarios
            </button>
            <FormCreateUser isEdit usuario={usuario} isEditLoading={loading} userId={id} />
        </div>
    );
};

export default UserEdit;
