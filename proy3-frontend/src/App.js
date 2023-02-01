import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes';



const App = () => {

    return (
        <BrowserRouter>
            <PublicRoutes />
        </BrowserRouter>
    );
};

export default App;