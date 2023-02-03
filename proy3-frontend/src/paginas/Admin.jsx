import { Link, Navigate, Route } from "react-router-dom";
import AdminNav from '../componentes/AdminNav';
import AdminUsuarios from '../componentes/AdminUsuarios';
import CrearProducto from '../componentes/CrearProducto';
import AdminListaProductos from '../componentes/AdminListaProductos';


const Admin = () => {
    
    return (
        <>
            <AdminNav />
            <div className="d-flex">
                <Navigate>
                    <Route path='/admin/usuarios'>
                        <AdminUsuarios  />
                    </Route>
                    <Route path='/admin/productos'>
                        <CrearProducto />
                    </Route>
                    <Route path='/admin/listaProductos'>
                        <AdminListaProductos />
                    </Route>
                </Navigate>
            </div>
        </>
    )
}

export default Admin
