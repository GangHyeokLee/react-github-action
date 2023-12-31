import './App.css';
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <button data-testid="plus-button" onClick={() => setCounter((prev) => prev + 1)} disabled={disabled}>+</button>
        <button data-testid="minus-button" onClick={() => setCounter((prev) => prev - 1)} disabled={disabled}>-</button>
        <button data-testid="on/off-button" style={{ backgroundColor: "blue" }}
          onClick={() => setDisabled(prev => !prev)}>on/off</button>
      </header>
    </div>
  );
}

export default App;