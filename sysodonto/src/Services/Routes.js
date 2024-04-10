import react from 'react';
import {BrowserRouter as Route, Router, Routes} from 'react-router-dom';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';

const App = () => {
    return(
        <Router>
            <Routes>                
                <Route Component={ Login } path="/" exact/>
                <Route Component={ Cadastro } path="/Cadastro"/>
            </Routes>
        </Router>
    )
}

export default Routes;