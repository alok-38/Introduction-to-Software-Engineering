import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);  // New state to track submission

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const clearInput = () => {
    setTimeout(() => {
      setName("");
    }, 1000); // Clear the input after 1 second
  };

  const handleSubmit = () => {
    setSubmitted(true);  // Set submitted to true when the button is clicked
    clearInput();  // Clear the input after 1 second
  };

  return (
    <div className="card">
      <input
        type="text"
        value={name}
        placeholder="John Smith"
        onChange={handleChange}
      />

      {/* Render the name only after the button is clicked */}
      {submitted && name && <h1>Hello, {name}!</h1>}

      <button onClick={handleSubmit}>Submit</button> {/* Button to trigger the render */}
    </div>
  );
}

export default App;
