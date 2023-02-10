import { Navigate, Outlet } from 'react-router-dom'
import { getLocalStorage } from '../utils/LocalStorageHelper';

const LayoutProtected = () => {

    const UserLogged = getLocalStorage("token");
    const UserDate = getLocalStorage("userLogged");

    if (!UserLogged) {
        return <Navigate to="/error" />
    } else if (!(UserDate.role === "ADMIN")) {
        return <Navigate to="/error" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default LayoutProtected