import React from 'react';
import Registro from './components/views/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/views/Navbar';

const App = () => {
    return (
        <div>
            <NavScroll></NavScroll>
           <Registro></Registro>
        </div>
    );
};

export default App;