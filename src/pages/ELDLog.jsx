const EldLogSheet = ({ tripData }) => {
    const logs = [
      { time: "08:00 AM", status: "Driving", location: tripData.currentLocation },
      { time: "10:30 AM", status: "Break", location: "Rest Stop" },
      { time: "12:00 PM", status: "Driving", location: tripData.pickupLocation },
      { time: "02:00 PM", status: "Fueling", location: "Fuel Station" },
      { time: "04:30 PM", status: "Drop-off", location: tripData.dropoffLocation },
    ];
  
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">ELD Log</h3>
        <ul className="space-y-2">
          {logs.map((log, index) => (
            <li key={index} className="p-3 bg-white shadow-md rounded-md">
              <p><strong>{log.time}</strong> - {log.status} at <span className="text-blue-500">{log.location}</span></p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EldLogSheet;
  