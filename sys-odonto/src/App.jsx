import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './pages/Cadastro/Cadastro';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Cadastro",
      element: <Cadastro />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/PaginaInicial",
      element: <PaginaInicial />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
