import { useState } from "react";
import axios from "axios";
import TripForm from "../components/TripForm";
import TripDetails from "../components/TripDetails";
// import "tailwindcss/tailwind.css";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleTripSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post("http://localhost:8000/api/trips/", formData);
      setTrip(response.data);
      setSuccess("Trip saved successfully!");
    } catch (error) {
      setError("Error submitting trip. Please try again.");
      console.error("Error submitting trip:", error);
    }
    setLoading(false);
  };

  const handleDownloadLog = () => {
    if (!trip) return;
    const logData = JSON.stringify(trip, null, 2);
    const blob = new Blob([logData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "eld_log.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">TripLoga</h1>
        {loading && <p className="text-center text-blue-500">Submitting trip...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {success && <p className="text-center text-green-500">{success}</p>}
        {!trip ? (
          <TripForm onSubmit={handleTripSubmit} />
        ) : (
          <>
            <TripDetails trip={trip} />
            <MapContainer
              center={[trip.start_lat, trip.start_lng]}
              zoom={10}
              className="h-64 w-full mt-4 rounded-lg"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {trip.route && <Polyline positions={trip.route} color="blue" />}
            </MapContainer>
            <button
              onClick={handleDownloadLog}
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Download ELD Log
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
