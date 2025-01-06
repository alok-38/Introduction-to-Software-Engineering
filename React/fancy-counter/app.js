const React = require('react');  // Use require to load React
const { useState } = React;      // Destructure useState from React

const [count, setCount] = useState(0);

function increment() {
    setCount(prevCount => prevCount + 1);
}

function decrement() {
    setCount(prevCount => prevCount - 1);
}

function App() {
    return (
        <main>
            <h1>Fancy Counter</h1>
            <div>
                <button onClick={increment}>+</button>
                <span>{count}</span>
                <button onClick={decrement}>-</button>
            </div>
        </main>
    );
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

root.render(<App />);
