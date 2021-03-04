import React, {useState} from 'react';
import TimeSlot from './time-slot';
import './App.css';
import mock from '../__mock/mock.json';

function App() {
  const [state, setState] = useState<Array<string>>([]);
  const [timebooked, setTimeBooked] = useState<boolean>();

  const handleClick = (event: any) => {
    const currentTime = state?.find(item => item === event.target.value) // Find Booked time;
    if(!currentTime){
      setState([...state, event.target.value]);
    }
  };

  return (
    <div className="App">
      {console.log(state)}
      {
        mock?.map(item => (
          <div key={item?.id}>
            <h1>{item?.name}</h1>
            <TimeSlot handleClick={handleClick} timeSlots={item?.time_slots}/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
