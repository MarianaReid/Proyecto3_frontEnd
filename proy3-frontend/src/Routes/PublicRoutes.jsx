import Productos from "../componentes/Productos";
import SobreNosotros from "../paginas/SobreNosotros";
import FormularioProducto from '../paginas/FormularioProducto';
import Admin from '../paginas/Admin';
import { Route, Routes } from "react-router-dom";
import ProductEdit from "../paginas/ProductEdit";


const PublicRoutes = () => {


    return (
        <>
            {/* <Navbar title="Sabores Latinos" /> */}
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/sobre-nosotros' element={<SobreNosotros />} />
                {/* <Route path='/contacto' element={<Contacto />} /> */}
                <Route path='/productos' element={<Productos />} />
                <Route path='/formulario' element={<FormularioProducto />} />
                {/* <Route path='*' element={<NotFound />} /> */}
                <Route path='/admin' exact element={<Admin />} />
                <Route path='/admin/edit/product/:id' exact element={<ProductEdit />} />
            </Routes>
        </>
    )
}

export default PublicRoutes