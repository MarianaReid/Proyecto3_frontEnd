import { Navigate, Outlet } from 'react-router-dom'
import { getLocalStorage } from '../utils/LocalStorageHelper';

const LayoutProtected = () => {

    const UserLogged = getLocalStorage("token");
    const UserDate = getLocalStorage("userLogged");

    if (!UserLogged) {
        return <Navigate to="/" />
    } else if (!(UserDate.role === "ADMIN")) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default LayoutProtected