import React, {useState} from 'react';
import './App.css';
import mock from '../__mock/mock.json';
import Company from "./company";

function App() {
  const [state, setState] = useState<any>([]);

  const handleClick = (event: any) => {
    // const currentTime = state?.find(item => item === event.target.value) // Find Booked time;
      setState({[event.target.name]: event.target.value});
  };


  return (
    <div className="App">
      {console.log(state)}
      {
        mock?.map(item => (
          <Company
            bookedTime={state}
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
