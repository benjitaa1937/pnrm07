import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
           <img src={logo} alt="Panorama Logo" className="h-20 w-auto" /> 
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/favorites"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Favoritos
            </Link>
            <Link
              to="/profile"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Perfil
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-colors"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;