import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../componentes/AdminNavbar";
import AdminUsuarios from '../componentes/AdminUsuarios';
import CrearProducto from '../componentes/CrearProducto';
import AdminListaProductos from '../componentes/AdminListaProductos';



const Admin = ({ token, user }) => {
    // if (!token || user.rol === 'client') {
    //     return <Link to="/" />
    // }

    return (
        <div>
            <AdminNavbar />
            <div className="d-flex">
                <Routes>
                    <Route path='/admin/users' element={<AdminUsuarios token={token} />} />
                    <Route path='/admin/products' element={<CrearProducto token={token} />} />
                    <Route path='/admin/productslist' element={<AdminListaProductos token={token} />} />
                </Routes>

            </div>

        </div>
    )
}

export default Admin

