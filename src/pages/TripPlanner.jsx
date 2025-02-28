import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import TripForm from '../components/TripForm';
import TripDetails from '../components/TripDetails';

const App = () => {
  const [trip, setTrip] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-20 pt-40 px-10 xl:px-20">
        {!trip ? (
          <TripForm onSubmit={(tripData) => setTrip(tripData)} />
        ) : (
          <TripDetails trip={trip} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;


