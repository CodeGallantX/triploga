import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

const MapComponent = ({ tripData }) => {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    // TODO: Fetch route data from backend
    setRoute([
      [6.5244, 3.3792], // Example: Lagos
      [7.3775, 3.9470], // Example: Abeokuta
    ]);
  }, [tripData]);

  return (
    <MapContainer center={[6.5244, 3.3792]} zoom={6} className="h-96 w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {route.length > 0 && <Polyline positions={route} color="blue" />}
      {route.map((pos, idx) => (
        <Marker key={idx} position={pos} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
