//BrowserRouter activa el sistema de rutas (permite tener diferentes "páginas"), Routes: Contenedor de todas las rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        //Aqui agrega la ruta de Login asi como la de registro y la importa arriba
      </Routes>
    </BrowserRouter>
  );
}

export default App;