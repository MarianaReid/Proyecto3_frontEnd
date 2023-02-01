/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { getOneProduct } from "../Services/productServices";
import FormularioProducto from "./FormularioProducto";


const ProductEdit = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const getProduct = async () => {
    //         setLoading(true);
    //         const { data } = await getOneProduct(id);
    //         setProducto(data);
    //         setLoading(false);
    //     }
    //     getProduct();
    // }, [id]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Admin</h1>
            <FormularioProducto isEdit producto={producto} isEditLoading={loading} productId={id} />
        </div>
    )
};

export default ProductEdit