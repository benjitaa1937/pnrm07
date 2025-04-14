import React from 'react';
import { Panorama } from '../types';

interface PanoramaCardProps {
  panorama: Panorama;
}

const PanoramaCard: React.FC<PanoramaCardProps> = ({ panorama }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={panorama.imageUrl}
        alt={panorama.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{panorama.title}</h3>
        <p className="text-gray-600 mb-4">{panorama.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-primary font-bold">${panorama.price.toLocaleString()}</span>
            <span className="ml-2 text-gray-500">/ persona</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-700">{panorama.rating}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {panorama.companyType.map((type) => (
            <span
              key={type}
              className="px-2 py-1 bg-secondary text-white text-sm rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
        <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default PanoramaCard; 