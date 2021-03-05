import React, {useState} from 'react';
import './App.css';
import mock from '../__mock/mock.json';
import Company from "./company";

function App() {
  const [state, setState] = useState<Array<any>>([]);
  const [currentReservation, setCurrentReservation]  = useState<string>();

  const handleClick = (event: any, companyName: string) => {
    const currentTime = state?.find(item => item[`${companyName}-${event.target.name}`] === event.target.value) // Find Booked time

    if(!currentTime) {
      setCurrentReservation(event.target.value);
      setState([...state, {[event.target.name]: event.target.value}]);
    }
    else{
      state.splice(state.indexOf(currentTime),1);
    }
  };


  return (
    <div className="App">
      {
        mock?.map(item => (
          <Company
            currentReservation={currentReservation}
            handleClick={handleClick}
            item={item}
            key={item.id}
            reservedSlot={state}
          />
        ))
      }
    </div>
  );
}

export default App;
