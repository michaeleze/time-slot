import React from 'react';
import TimeSlot from './time-slot';
import './App.css';
import mock from '../__mock/mock.json';

function App() {
  return (
    <div className="App">
      {
        mock?.map(item => (
          <div key={item?.id}>
            <h1>{item?.name}</h1>
            <TimeSlot timeSlots={item?.time_slots}/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
