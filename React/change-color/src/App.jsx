import './App.css';
import React, { useState } from 'react';

function App() {
  const [isRed, setIsRed] = useState(true);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <h1
        style={{
          color: isRed ? 'red' : 'blue', // Conditionally change the color
        }}
      >
        Click the button to change color
      </h1>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
