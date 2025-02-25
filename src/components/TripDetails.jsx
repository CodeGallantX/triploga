import { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import TripSummaryModal from "./TripSummary";

const TripDetails = () => {
  const [formData, setFormData] = useState({
    currentLocation: "",
    pickupLocation: "",
    dropoffLocation: "",
    cycleHours: "",
  });

  const [tripData, setTripData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.currentLocation || !formData.pickupLocation || !formData.dropoffLocation || !formData.cycleHours) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setTripData(formData);
    setShowModal(true);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-50 py-20 pt-40 px-6 md:px-10 lg:px-20 min-h-[80vh]">
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col items-start justify-center space-y-4 w-full max-w-xl p-6 bg-white shadow-md rounded-lg"
        >
          <fieldset className="flex flex-col w-full">
            <label htmlFor="currentLocation" className="font-medium text-lg">
              Current Location
            </label>
            <input
              type="text"
              id="currentLocation"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              className="w-full p-3 rounded-lg outline-none border border-gray-400"
              placeholder="Enter current location"
            />
          </fieldset>

          <fieldset className="flex flex-col w-full">
            <label htmlFor="pickupLocation" className="font-medium text-lg">
              Pickup Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="w-full p-3 rounded-lg outline-none border border-gray-400"
              placeholder="Enter pickup location"
            />
          </fieldset>

          <fieldset className="flex flex-col w-full">
            <label htmlFor="dropoffLocation" className="font-medium text-lg">
              Dropoff Location
            </label>
            <input
              type="text"
              id="dropoffLocation"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              className="w-full p-3 rounded-lg outline-none border border-gray-400"
              placeholder="Enter dropoff location"
            />
          </fieldset>

          <fieldset className="flex flex-col w-full">
            <label htmlFor="cycleHours" className="font-medium text-lg">
              Current Cycle Used (Hours)
            </label>
            <input
              type="number"
              id="cycleHours"
              name="cycleHours"
              value={formData.cycleHours}
              onChange={handleChange}
              className="w-full p-3 rounded-lg outline-none border border-gray-400"
              placeholder="Enter cycle hours used"
            />
          </fieldset>

          <button 
            type="submit"
            className="w-full mt-2 p-3 bg-orange-500 hover:bg-black text-white rounded-xl transition-all duration-300 ease-in-out"
          >
            Generate Trip <FaMapMarkedAlt className="inline-block ml-2" />
          </button>
        </form>
      </div>

      {/* Show Modal if Data Exists */}
      {showModal && <TripSummaryModal tripData={tripData} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default TripDetails;
