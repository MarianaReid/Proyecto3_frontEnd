import { Route } from "react-router-dom"
import Admin from "../paginas/Admin"



const PrivateRoutes = () => {

    return (
        <Route path='/admin' element={<Admin />} />
    )
}

export default PrivateRoutes