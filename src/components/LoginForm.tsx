import React, { useState } from 'react';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:4000/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login exitoso');
      
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error de login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
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
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Entrar</button>
    </form>
  );
};

export default LoginForm;
