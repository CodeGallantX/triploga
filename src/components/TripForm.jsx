import { useState } from 'react';
import axios from 'axios';

const TripForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    current_location: '',
    pickup_location: '',
    dropoff_location: '',
    current_cycle_used: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/trips/', formData);
      onSubmit(response.data); // Pass the trip data to the parent component
    } catch (error) {
      console.error("Error submitting trip details:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Current Location</label>
        <input
          type="text"
          value={formData.current_location}
          onChange={(e) => setFormData({ ...formData, current_location: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Pickup Location</label>
        <input
          type="text"
          value={formData.pickup_location}
          onChange={(e) => setFormData({ ...formData, pickup_location: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Dropoff Location</label>
        <input
          type="text"
          value={formData.dropoff_location}
          onChange={(e) => setFormData({ ...formData, dropoff_location: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Current Cycle Used (Hrs)</label>
        <input
          type="number"
          value={formData.current_cycle_used}
          onChange={(e) => setFormData({ ...formData, current_cycle_used: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit Trip
      </button>
    </form>
  );
};

export default TripForm;