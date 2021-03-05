import React, {useState} from 'react';
import './App.css';
import mock from '../__mock/mock.json';
import Company from "./company";

function App() {
  const [state, setState] = useState<Array<any>>([]);

  const handleClick = (event: any) => {
    const currentTime = state?.find(item => item[event.target.name] === event.target.value) // Find Booked time

    if(!currentTime) {
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
            reseveredSlot={state}
            handleClick={handleClick}
            item={item}
            key={item.id}
          />
        ))
      }
    </div>
  );
}

export default App;
