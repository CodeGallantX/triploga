import { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';

const TripDetails = ({ tripId }) => {
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!tripId) {
      setError("Trip ID is missing.");
      return;
    }

    // Fetch trip details from the backend
    axios.get(`http://localhost:8000/api/trips/${tripId}/`)
      .then(response => {
        setTrip(response.data);
      })
      .catch(error => {
        setError("Error fetching trip details. Please try again.");
        console.error("Error fetching trip details:", error);
      });
  }, [tripId]);

  const handleDownloadELDLog = () => {
    // Download the ELD log PDF
    window.open(`http://localhost:8000/api/eld-log/${tripId}/`, '_blank');
  };

  if (!trip) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Trip Details</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Route Instructions</h2>
        <ul className="list-disc pl-6">
          {trip.route.current_to_pickup.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
          {trip.route.pickup_to_dropoff.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Map</h2>
        <MapComponent route={[
          ...trip.route.current_to_pickup.steps.map(step => [step.start_location.lat, step.start_location.lng]),
          ...trip.route.pickup_to_dropoff.steps.map(step => [step.start_location.lat, step.start_location.lng])
        ]} />
      </div>
      <button
        onClick={handleDownloadELDLog}
        className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
      >
        Download ELD Log
      </button>
    </div>
  );
};

export default TripDetails;