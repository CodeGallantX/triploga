import { useState } from 'react';
import { FaSpinner } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';

const TripForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    current_location: '',
    pickup_location: '',
    dropoff_location: '',
    current_cycle_used: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setAlert(true);
    try {
      const response = await axios.post('http://localhost:8000/api/trips/', formData);
      console.log("API response: ", response.data.trip.id);
      onSubmit(response.data.trip.id);
    } catch (error) {
      setError("Error submitting trip details. Please check your inputs.");
      console.error("Error submitting trip details:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(false), 3000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter Trip Details</h2>
      
      <AnimatePresence>
        {alert && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded-lg"
          >
            Generating Route... Please wait.
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['current_location', 'pickup_location', 'dropoff_location'].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 text-lg capitalize">{field.replace('_', ' ')}</label>
            <input
              type="text"
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all duration-300 ease-in-out"
              placeholder={field === 'current_location' ? 'Houston, TX' : field === 'pickup_location' ? 'Dallas, TX' : 'Austin, TX'}
              required
            />
          </div>
        ))}
        
        <div>
          <label className="block text-gray-700 text-lg">Current Cycle Used (Hrs)</label>
          <input
            type="number"
            value={formData.current_cycle_used}
            onChange={(e) => setFormData({ ...formData, current_cycle_used: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all duration-300 ease-in-out"
            placeholder="12"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full flex items-center justify-center bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300 ease-in-out relative"
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin text-lg mr-2" />
              Processing...
            </>
          ) : (
            "Submit Trip"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default TripForm;
