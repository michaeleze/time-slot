import React, {useState} from 'react';
import './App.css';
import mock from '../__mock/mock.json';
import Company from "./company";

function App() {
  const [state, setState] = useState<{ [x: string]: string;} | undefined>();
  const [currentSlot, setCurrentSlot] = useState<{ [x: string]: string;} | undefined>();

  const handleClick = (event: any, companyName: string) => {
      setState({[event.target.name]: event.target.value});
      setCurrentSlot({[companyName]: event.target.value});
  };

  return (
    <div className="App">
      {
        mock?.map(item => (
          <Company
            currentSlot={currentSlot}
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
