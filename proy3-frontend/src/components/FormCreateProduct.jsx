import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createProducts, updateProduct } from '../services/productsService';
import Loader from '../components/Loader';
import Swal from 'sweetalert2';
import { getAllCategories } from '../services/categoriesService';

const FormCreateProduct = ({
    setCreateProduct,
    productos,
    setProductos,
    setProductosSearch,
    isEdit,
    producto,
    isEditLoading,
    productId,
}) => {
    const [newProduct, setNewProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [selectCategories, setSelectCategories] = useState('')
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        setIsLoading(true);
        setNewProduct(producto);
        setIsLoading(false);
    }, [producto]);

    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await getAllCategories();
            const { docs } = data;
            // console.log("DATAACATE:",docs);
            setCategories(docs);
        };
        fetchCategories();
    }, []);

    const crearProducto = async () => {
        setIsLoading(true);
        const { data } = await createProducts({ ...newProduct, categories: selectCategories });
        setNewProduct({});
        Swal.fire(
            'Producto creado!',
            'Presiona ok para continuar',
            'success'
        )
        const allProducts = [...productos, data];
        setProductos(allProducts);
        setProductosSearch(allProducts);
        setIsLoading(false);
        setCreateProduct(false);
    };

    const editProduct = async () => {
        setIsLoading(true);
        await updateProduct(productId, newProduct);
        setIsLoading(false);
        Swal.fire(
            'Producto editado!',
            'Presiona ok para continuar',
            'success'
        )
        navigate('/admin');
    };

    return (
        <div>
            <h1>{isEdit ? 'Editar Producto' : 'Agregar Producto'}</h1>
            <Loader isLoading={isLoading || isEditLoading}>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={newProduct?.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="text"
                            value={newProduct?.price}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Imágen</Form.Label>
                        <Form.Control
                            type="text"
                            value={newProduct?.image}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="stock">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type="text"
                            value={newProduct?.stock}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Select onChange={(e) => setSelectCategories(e.target.value)}>
                        <option value=''>Selecciona la categoria</option>
                        {categories.map((category) => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </Form.Select>
                    {isEdit ?
                        (<>
                            <Button className='my-3 btn-block' variant="warning" type="button" onClick={editProduct}>
                                Editar
                            </Button>
                            <Button className='my-3 btn-block' variant="danger" type="button" onClick={() => navigate('/admin')}>
                                Cancelar
                            </Button>
                        </>)
                        :
                        (<Button className='my-3 btn-block' variant="success" type="button" onClick={crearProducto}>
                            Agregar
                        </Button>)}
                </Form>
            </Loader>
        </div>
    );
};

export default FormCreateProduct;