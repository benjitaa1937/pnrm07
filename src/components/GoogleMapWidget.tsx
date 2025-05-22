
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
  }
}
const GOOGLE_MAPS_API_KEY = "AIzaSyDkh66YXjS3nX5O7bNLeD_rw-4vExwAeA8"; // Reemplaza por tu API Key

const MAP_CENTER = { lat: -33.4489, lng: -70.6693 }; // Santiago, CL

const GoogleMapWidget: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar el script de Google Maps solo si no está presente
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (mapRef.current && window.google) {
        new window.google.maps.Map(mapRef.current, {
          center: MAP_CENTER,
          zoom: 12,
        });
      }
    }
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Mapa de Santiago</h3>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '300px', borderRadius: '0.75rem', boxShadow: '0 2px 8px #0001' }}
      />
    </div>
  );
};

export default GoogleMapWidget;