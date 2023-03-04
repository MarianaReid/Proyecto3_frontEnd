import { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormCreateProduct from '../components/FormCreateProduct';
import Loader from '../components/Loader';
import { getAllProducts, deleteProduct } from '../services/productsService';

const AdminProduct = () => {
    const [productos, setProductos] = useState([]);
    const [productosSearch, setProductosSearch] = useState([]);
    const [term, setTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [createProduct, setCreateProduct] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const { data } = await getAllProducts();
            // console.log("DATAA:",data.docs);
            setProductos(data.docs);
            setProductosSearch(data.docs);
        };
        fetchProducts();
        setLoading(false);
    }, []);

    useEffect(() => {
        const search = productos.filter(prod => prod.name.toLowerCase().includes(term.toLowerCase()));
        setProductosSearch(search)
    }, [term, productos])

    const deleteProducto = async (id) => {
        setLoading(true);
        await deleteProduct(id);
        Swal.fire(
            'Producto eliminado!',
            'Presiona ok para continuar',
            'success'
        )
        const filteredProducts = productos.filter(
            (producto) => producto._id !== id
        );
        setProductos(filteredProducts);
        setLoading(false);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-1">Panel Administrador</h1>
            <h2 className="text-center mb-4 fw-bolder">PRODUCTOS</h2>
            <button
                className="btn btn-primary my-3 btn-block"
                onClick={() => setCreateProduct(!createProduct)}
            >
                {createProduct ? 'Ver Tabla de productos' : 'Agregar nuevo producto'}
            </button>
            {createProduct ? (
                <FormCreateProduct
                    setCreateProduct={setCreateProduct}
                    productos={productos}
                    setProductos={setProductos}
                    setProductosSearch={setProductosSearch}
                />
            ) : (
                <Loader isLoading={loading}>
                    <InputGroup className="mb-3 my-3">
                        <InputGroup.Text id="basic-addon1">Buscar</InputGroup.Text>
                        <Form.Control
                            placeholder="Productos"
                            aria-label="Productos"
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
                            {productosSearch.map((producto, index) => (
                                <tr key={producto._id} >
                                    <td>{++index}</td>
                                    <td>{producto.name}</td>
                                    <td>
                                        <Button
                                            type="button"
                                            className="m-1"
                                            variant="danger"
                                            onClick={() => deleteProducto(producto._id)}
                                        >
                                            D
                                        </Button>
                                        <Button
                                            type="button"
                                            className="m-1"
                                            variant="warning"
                                            onClick={() =>
                                                navigate(`/admin/edit/product/${producto._id}`)
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

export default AdminProduct;
