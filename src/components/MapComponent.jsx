import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ route }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add the route as a polyline
    if (route) {
      const polyline = L.polyline(route, { color: 'blue' }).addTo(map);

      // Fit the map to the bounds of the route
      map.fitBounds(polyline.getBounds());
    }
  }, [route]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;