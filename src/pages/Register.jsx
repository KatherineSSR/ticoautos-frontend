import { useState } from 'react'; //useState sirve para guardar datos que pueden cambiar
import api from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

const handleImageChange = (e) => {
  setProfileImage(e.target.files[0]);
};

  //handleSubmit: función que se ejecuta cuando el usuario da clic en "Registrarse"
  //e.preventDefault() evita que la página se recargue
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //FormData:forma de enviar tanto texto como archivos. Axios detecta que es FormData y pone el header correcto (multipart/form-data)
      const formData = new FormData(); 
      formData.append('username', username);
      formData.append('password', password);
      formData.append('name', name);
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }
      const response = await api.post('/auth/register', formData);
      if (response.status === 201) {
        setMessage('Usuario registrado exitosamente');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage('Error: Username ya existe o faltan datos');
      } else {
        setMessage('Error en el servidor');
      }
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
           <label>Imagen de perfil:</label>
           <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
        />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;