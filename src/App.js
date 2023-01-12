import logo from './logo.svg';
import './App.css';
import DeterminePropertyMix from './components/DeterminePropertyMix';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState()

  const handlesubmit = (e) => {
    setTime(e.target.value)
  }
  return (
    <div className="App">
      <h1>Enter units of time</h1>
      <input type="number" name="" id="" onChange={(e) => setTime(e.target.value)} />
      <DeterminePropertyMix time={time} />
    </div>
  );
}

export default App;
