import React, { useState, useEffect } from 'react';
import { mockPanoramas } from '../data/mockData';
import PanoramaCard from '../components/PanoramaCard';
import WeatherWidget from '../components/WeatherWidget';
import { Category, CompanyType } from '../types';
import toast, { Toast } from 'react-hot-toast';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedCompanyType, setSelectedCompanyType] = useState<CompanyType | 'all'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(50000);

  useEffect(() => {
    const toastId = 'welcome-toast';
    toast.custom(
      (t: Toast) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } bg-blue-600 text-white p-4 rounded-lg shadow-lg w-[320px] flex flex-col items-center`}
        >
          <h3 className="text-lg font-semibold mb-2">¡Bienvenido a Panorama! 🌟</h3>
          <p className="text-sm text-center">
            Descubre las mejores actividades para disfrutar en la ciudad
          </p>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="mt-2 px-3 py-1 text-sm bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
          >
            Cerrar
          </button>
        </div>
      ),
      { id: toastId }
    );
  }, []);

  const categories: Category[] = ['gastronomia', 'deportes', 'cultura', 'naturaleza', 'indoor', 'outdoor', 'cine', 'teatro', 'ferias', 'talleres'];
  const companyTypes: CompanyType[] = ['individual', 'pareja', 'grupo', 'familia'];

  const filteredPanoramas = mockPanoramas.filter(panorama => {
    const categoryMatch = selectedCategory === 'all' || panorama.category === selectedCategory;
    const companyTypeMatch = selectedCompanyType === 'all' || panorama.companyType.includes(selectedCompanyType);
    const priceMatch = panorama.price <= maxPrice;
    return categoryMatch && companyTypeMatch && priceMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Descubre tu próximo panorama</h1>

          {/* Filtros */}
          <div className="mb-8 space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">Categorías</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Todas
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Tipo de compañía</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCompanyType('all')}
                  className={`px-4 py-2 rounded-full ${selectedCompanyType === 'all' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Todos
                </button>
                {companyTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedCompanyType(type)}
                    className={`px-4 py-2 rounded-full ${selectedCompanyType === type ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Precio máximo: ${maxPrice.toLocaleString()}</h2>
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Lista de panoramas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPanoramas.map(panorama => (
              <PanoramaCard key={panorama.id} panorama={panorama} />
            ))}
          </div>
        </div>

        {/* Sidebar con widget del clima */}
        <div className="lg:col-span-1">
          <WeatherWidget />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
