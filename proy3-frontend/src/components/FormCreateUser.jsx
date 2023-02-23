import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Swal from 'sweetalert2';
import { createUsers, updateUser } from '../services/userService';
import { Formik } from 'formik';
import * as yup from 'yup';

const FormCreateUser = ({
    setCreateUser,
    usuarios,
    setUsuarios,
    setUsuariosSearch,
    isEdit,
    usuario,
    isEditLoading,
    userId,
}) => {
    const [newUser, setNewUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();
            if (isEdit) {
                editUser();
            } else {
                crearUsuario();
            }
        }

        setValidated(true);

    };

    
const schemaFormCreateUser = yup.object().shape({
    name: yup.string().required('Campo obligatorio'),
    email: yup.string().email('El mail es inválido').required('Campo obligatorio'),
    password: yup
    .string()
    .required('Campo obligatorio')
    .min(8, 'Debe tener mínimo 8 caracteres')
    .matches(/[a-zA-Z]/, 'Debe tener minúsculas y mayúsculas'),
});

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        setIsLoading(true);
        setNewUser(usuario);
        setIsLoading(false);
    }, [usuario]);

    const crearUsuario = async () => {
        setIsLoading(true);
        const { data } = await createUsers({ ...newUser});
        setNewUser({});
        Swal.fire(
            'Usuario creado!',
            'Presiona ok para continuar',
            'success'
        )
        const allUsers = [...usuarios, data];
        setUsuarios(allUsers);
        setUsuariosSearch(allUsers);
        setIsLoading(false);
        setCreateUser(false);
    };

    const editUser = async () => {
        setIsLoading(true);
        await updateUser(userId, newUser);
        setIsLoading(false);
        Swal.fire(
            'Usuario editado!',
            'Presiona ok para continuar',
            'success'
        )
        navigate('/admin/edit/user');
    };

    return (
        <div>
            <Formik
                    validationSchema={schemaFormCreateUser}
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                >
            <h1>{isEdit ? 'Editar Usuario' : 'Agregar Usuario'}</h1>
            <Loader isLoading={isLoading || isEditLoading}>
                {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors,
                        isSubmitting,
                    }) => (      
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                    feedback={errors.name}
                                    feedbackType="invalid"
                                />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={!!errors.email}
                                    feedback={errors.email}
                                    feedbackType="invalid"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={!!errors.password}
                                    feedback={errors.password}
                                    feedbackType="invalid"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                    </Form.Group>
                    {isEdit ?
                        (<>
                            <Button className='my-3 btn-block' variant="warning" type="submit">
                                Editar
                            </Button>
                            <Button className='my-3 btn-block' variant="danger" type="button" onClick={() => navigate('/admin/edit/user')}>
                                Cancelar
                            </Button>
                        </>)
                        :
                        (<Button className='my-3 btn-block' variant="success" type="submit">
                            Agregar
                        </Button>)}
                </Form>
                )}
            </Loader>
            </Formik>    
        </div>
    );
};

export default FormCreateUser;