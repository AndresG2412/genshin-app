// src/routes.js
import Home from './pages/Home.jsx';
import Guies from './pages/Guies.jsx';
import Farm from './pages/Farm.jsx';
import Teams from './pages/Teams.jsx';

// Definimos un array de objetos de ruta
const appRoutes = [
  {
    path: '/', // La ruta en la URL
    element: <Home />, // El componente a renderizar
  },
  {
    path: '/farm',
    element: <Farm />,
  },
  {
    path: '/guies',
    element: <Guies />,
  },
  {
    path: '/teams', // La ruta en la URL
    element: <Teams />, // El componente a renderizar
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
];

export default appRoutes;