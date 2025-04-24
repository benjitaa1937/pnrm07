import React, { useState, useEffect } from 'react';
import { WeatherData } from '../types';

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de datos del clima
    const mockWeather: WeatherData = {
      temperature: 22,
      condition: 'Soleado',
      icon: '☀️'
    };

    // Simulamos un delay de la API
    setTimeout(() => {
      setWeather(mockWeather);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Clima actual</h3>
          <p className="text-gray-600">{weather?.condition}</p>
        </div>
        <div className="text-4xl">{weather?.icon}</div>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold text-primary">{weather?.temperature}°C</p>
      </div>
    </div>
  );
};

export default WeatherWidget; 
