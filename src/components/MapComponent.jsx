import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ route }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current || !route || route.length === 0) return;

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([6.5244, 3.3792], 13); // Default Lagos
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    const map = mapRef.current;

    // Remove old routes before adding new ones
    map.eachLayer(layer => {
      if (layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    // ✅ Ensure route contains valid coordinates
    const formattedRoute = route.map(coord => {
      if (Array.isArray(coord) && coord.length === 2) {
        return [parseFloat(coord[0]), parseFloat(coord[1])]; // Ensure numbers
      }
      return null;
    }).filter(coord => coord !== null); // Remove invalid points

    if (formattedRoute.length > 0) {
      const polyline = L.polyline(formattedRoute, { color: 'blue' }).addTo(map);
      map.fitBounds(polyline.getBounds()); // Auto-fit map to route
    }
  }, [route]);

  return <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
