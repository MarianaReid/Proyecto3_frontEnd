import { Navigate, Route } from "react-router-dom";
import AdminNav from '../componentes/AdminNav';
import AdminUsuarios from '../componentes/AdminUsuarios';
import CrearProducto from '../componentes/CrearProducto';
import AdminListaProductos from '../componentes/AdminListaProductos';
import AdminMensaje from '../componentes/AdminMensaje';


const Admin = ({ token, usuario }) => {

    return (
        <>
            <AdminNav />
            <div className="d-flex">
                <Navigate>
                    <Route path='/admin/usuarios'>
                        <AdminUsuarios token={token} />
                    </Route>
                    <Route path='/admin/productos'>
                        <CrearProducto token={token} />
                    </Route>
                    <Route path='/admin/listaProductos'>
                        <AdminListaProductos token={token} />
                    </Route>
                    <Route path='/admin/mensajes'>
                        <AdminMensaje token={token} />
                    </Route>
                </Navigate>
            </div>
        </>
    )
}

export default Admin
