import { FaTimes, FaRoute, FaTruckMoving } from "react-icons/fa";
import MapComponent from "./MapComponent";
import EldLogSheet from "./EldLogSheet";

const TripSummaryModal = ({ tripData, onClose }) => {
  if (!tripData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-lg">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Trip Summary</h2>

        <div className="space-y-3">
          <p><strong>Current Location:</strong> {tripData.currentLocation}</p>
          <p><strong>Pickup Location:</strong> {tripData.pickupLocation}</p>
          <p><strong>Dropoff Location:</strong> {tripData.dropoffLocation}</p>
          <p><strong>Cycle Hours Used:</strong> {tripData.cycleHours} hrs</p>
        </div>

        <hr className="my-4" />

        <div className="space-y-3">
          <h3 className="text-xl font-semibold flex items-center">
            <FaRoute className="mr-2" /> Route Information
          </h3>
          <MapComponent tripData={tripData} />
        </div>

        <hr className="my-4" />

        <div className="space-y-3">
          <h3 className="text-xl font-semibold flex items-center">
            <FaTruckMoving className="mr-2" /> ELD Log
          </h3>
          <EldLogSheet tripData={tripData} />
        </div>
      </div>
    </div>
  );
};

export default TripSummaryModal;
