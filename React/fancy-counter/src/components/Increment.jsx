import { useState } from "react";

const Increment = () => {
    const [count, setCount] = useState(0);

    return (
        <main>
            <span>{count}</span>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>
                    +
                </button>
                <button onClick={() => setCount(0)}>
                    R
                </button>
            </div>
        </main>
    );
}

export default Increment;
