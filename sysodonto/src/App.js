import './App.css';
import { Navigate } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro'
import Routes from './Services/Routes';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/Cadastro",
      element: <Cadastro/>
    },
  ]);

  return (
    <>
       <RouterProvider router={router} /> 
    </>
  );
}

export default App;
