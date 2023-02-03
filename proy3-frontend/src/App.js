import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

    return (
        
        <BrowserRouter>
            <PublicRoutes />
        </BrowserRouter>
    );
};

export default App;