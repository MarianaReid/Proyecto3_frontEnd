import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormCreateProduct from '../components/FormCreateProduct';
import { getOneProduct } from '../services/productsService';

const ProductEdit = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const { data } = await getOneProduct(id);
            setProducto(data)
            setLoading(false);
        }
        getProduct();
    }, [id]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Panel Administrador</h1>
            <button
                className="btn btn-primary my-3 btn-block"
                onClick={() => navigate('/admin')}
            >
                Ver Tabla de productos
            </button>
            <FormCreateProduct isEdit producto={producto} isEditLoading={loading} productId={id} />
        </div>
    );
};

export default ProductEdit;
