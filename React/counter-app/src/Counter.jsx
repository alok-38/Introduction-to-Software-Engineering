import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2 className="text-5xl">Count: {count}</h2>
            <div className="flex justify-center gap-4 mt-4">
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg" onClick={increment}>Increment</button>
                <button className="bg-amber-500 text-white py-2 px-4 rounded-lg" onClick={decrement}>Decrement</button>
                <button className="bg-orange-600 text-white py-2 px-4 rounded-lg" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;