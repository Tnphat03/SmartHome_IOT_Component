import { useState } from 'react'
import viteLogo from '/vite.svg'
import FlameSensor from './components/FlameSensor' // Import the FlameSensor component
import RoomCard from './components/RoomCard' 
const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-8">
      {/* Render three FlameSensor components */}
      <FlameSensor />
  
      <RoomCard name={''} status={''} price={0} />
    </div>
  );
};

export default App;
