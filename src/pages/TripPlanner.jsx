import { useState } from 'react';
import TripForm from '../components/TripForm';
import TripDetails from '../components/TripDetails';

const App = () => {
  const [trip, setTrip] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">TripLoga</h1>
        {!trip ? (
          <TripForm onSubmit={(data) => setTrip(data)} />
        ) : (
          <TripDetails tripId={trip.id} />
        )}
      </div>
    </div>
  );
};

export default App;