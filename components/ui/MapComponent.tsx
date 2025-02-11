"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent: React.FC = () => {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'leaflet/marker-icon-2x.png',
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    });
  }, []);

  // Coordenadas de Benidorm
  const position: [number, number] = [38.5411, -0.1225];

  return (
    <div 
      className="relative z-10 h-[500px] w-full rounded-lg overflow-hidden shadow-lg"
    >
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" aria-label="Ir a la página de OpenStreetMap">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Aroma Cafe <br />
            Calle Rioja 1, Local 5 <br />
            Benidorm, Spain
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;