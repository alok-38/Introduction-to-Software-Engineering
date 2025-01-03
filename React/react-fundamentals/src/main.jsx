import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

function Greeting() {
  return <h2 className="text-red-400 text-5xl">My first component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);