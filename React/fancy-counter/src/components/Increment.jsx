import { useState } from "react";

const Increment = () => {
    const [count, setCount] = useState(0);

    return (
        <main>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </main>
    );
}

export default Increment;
