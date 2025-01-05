const { useState } = React;

function Counter() {
    // state variable named count
    const [count, setCount] = useState(0);

    // Function to increment count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement count
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

// Create the root using createRoot (React 18+)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render() to render the Counter component
root.render(<Counter />);
