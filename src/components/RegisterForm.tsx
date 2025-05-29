import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('http://localhost:4000/api/register', { email, password });
      setSuccess('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al registrar usuario');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Registrarse</h2>
      {success && <div className="text-green-600 mb-2">{success}</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
