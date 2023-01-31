import { Navigate } from "react-router-dom";
import { useContextState } from "../context/ContextState";


const PrivateRoutes = ({ children }) => {
    const { contextState } = useContextState();
    return (
        contextState.userLogged && contextState.userData.role === 'ADMIN' ? children : <Navigate to='/admin' />
    )
}

export default PrivateRoutes