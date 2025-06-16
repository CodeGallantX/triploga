import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import MapComponent from './MapComponent';

const TripDetails = ({ trip }) => {
  if (!trip) return <p className="text-red-500 text-center">No trip data available.</p>;

  const handleDownloadELDLog = () => {
    if (trip.id) {
      window.open(`https://triploga-be.onrender.com/api/eld-log/${trip.id}/`, '_blank');
      // window.open(`http://127.0.0.1:8000/api/eld-log/${trip.id}/`, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 md:bg-white py-10 md:py-6 md:px-6 md:rounded-lg md:shadow-md"
    >
      <h1 className="text-2xl font-bold mb-4">Trip Details</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Route Instructions</h2>

        {/* Current Location → Pickup Location */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">From Current Location to Pickup Location</h3>
          {trip.route?.current_to_pickup?.steps?.length > 0 ? (
            <ul className="list-disc pl-6">
              {trip.route.current_to_pickup.steps.map((step, index) => (
                <motion.li
                  key={`current-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {typeof step === 'string' ? step : step.instruction || 'No instruction available'}
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No route details available.</p>
          )}
        </div>

        {/* Pickup Location → Drop-off Location */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">From Pickup Location to Drop-off Location</h3>
          {trip.route?.pickup_to_dropoff?.steps?.length > 0 ? (
            <ul className="list-disc pl-6">
              {trip.route.pickup_to_dropoff.steps.map((step, index) => (
                <motion.li
                  key={`pickup-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (index + (trip.route?.current_to_pickup?.steps?.length || 0)) * 0.1 }}
                >
                  {typeof step === 'string' ? step : step.instruction || 'No instruction available'}
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No route details available.</p>
          )}
        </div>
      </div>

      {/* Map Component */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Map</h2>
        <MapComponent
          route={[
            ...(trip.route?.current_to_pickup?.coordinates || []),
            ...(trip.route?.pickup_to_dropoff?.coordinates || [])
          ]}
        />

      </div>

      {/* Download Button */}
      <motion.button
        onClick={handleDownloadELDLog}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition-all"
      >
        <FaDownload className="mr-2" /> Download ELD Log
      </motion.button>
    </motion.div>
  );
};

export default TripDetails;
