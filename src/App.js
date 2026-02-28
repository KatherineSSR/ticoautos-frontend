//BrowserRouter activa el sistema de rutas (permite tener diferentes "páginas"), Routes: Contenedor de todas las rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       {/*  <Route path="/register" element={<Register />} /> */}
       {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;