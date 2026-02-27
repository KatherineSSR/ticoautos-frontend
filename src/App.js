//BrowserRouter activa el sistema de rutas (permite tener diferentes "páginas"), Routes: Contenedor de todas las rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;