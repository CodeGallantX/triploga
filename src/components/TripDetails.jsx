import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaDownload, FaSpinner } from 'react-icons/fa';
import MapComponent from './MapComponent';

const TripDetails = ({ tripId: initialTripId }) => {
  const [trip, setTrip] = useState(null);
  const [tripId, setTripId] = useState(initialTripId);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!tripId) {
      setError('Trip ID is missing.');
      setLoading(false);
      return;
    }
  
    axios.get(`http://localhost:8000/api/trips/${tripId}/`)
      .then(response => {
        if (!response.data || !response.data.trip) {
          throw new Error('Invalid response structure');
        }
  
        setTrip(response.data.trip);
        setTripId(response.data.trip.id);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching trip details. Please try again.');
        console.error('Error fetching trip details:', error);
        setLoading(false);
      });
  }, [tripId]);
  

  const handleDownloadELDLog = () => {
    if (tripId) {
      window.open(`http://localhost:8000/api/eld-log/${tripId}/`, '_blank');
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-40">
      <FaSpinner className="animate-spin text-3xl text-orange-500" />
    </div>
  );

  if (!trip) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold mb-4">Trip Details</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Route Instructions</h2>
        <ul className="list-disc pl-6">
          {trip.route?.current_to_pickup?.steps?.map((step, index) => (
            <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>{step}</motion.li>
          ))}
          {trip.route?.pickup_to_dropoff?.steps?.map((step, index) => (
            <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (index + (trip.route?.current_to_pickup?.steps?.length || 0)) * 0.1 }}>{step}</motion.li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Map</h2>
        <MapComponent route={[
          ...(trip.route?.current_to_pickup?.steps?.map(step => [step.start_location.lat, step.start_location.lng]) || []),
          ...(trip.route?.pickup_to_dropoff?.steps?.map(step => [step.start_location.lat, step.start_location.lng]) || [])
        ]} />
      </div>
      <motion.button
        onClick={handleDownloadELDLog}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition-all"
      >
        <FaDownload className="mr-2" /> Download ELD Log
      </motion.button>
    </motion.div>
  );
};

export default TripDetails;
