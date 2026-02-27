import { useState } from 'react'; //useState sirve para guardar datos que pueden cambiar
import api from '../services/api';

//CAMBIAR TODOS LOS MENSAJES

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); 

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try {
            const response = await api.post('/auth/login', { username, password }); 

            if (response.status === 200) { 

                const token = response.data.token; // Devuelve el token cuando el login da respuesta de OKA OKA

                if (token) {
                    sessionStorage.setItem("token", token); // Guarda el token en sessionStorage para usarlo en futuras solicitudes
                }

                setMessage('Login exitoso'); // CAMBIAR FORMA DE MENSAJE POR UN CUADRITO DE EXITO ARRIBA 
            }

        } catch (error) {
            if (error.response && error.response.status === 401) { 
                setMessage('Error: Credenciales incorrectas'); 
            } else {
                setMessage('Error en el servidor'); 
            }           
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;