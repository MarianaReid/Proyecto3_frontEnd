import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './paginas/Admin';
import Productos from './paginas/Productos';




function App() {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState({});

    // useEffect(() => {
    //     if (token) {
    //         getApi();
    //     }
    // }, [token]);

    // const getApi = async () => {
    //     try {
    //         const headers = { 'p-token': token };
    //         const { data } = await axios.get('usuarios/usuarioLogueado', {
    //             headers,
    //         });
    //         setUser(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin/*' element={<Admin user={user} token={token} />} />
                    <Route path='/productos' element={<Productos user={user} token={token} setToken={setToken} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;