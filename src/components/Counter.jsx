import { useState } from "react";

export function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span className="text-yellow-300 text-xl mr-4">{count}</span>
            <button className="border px-4 py-2 tex-xl" onClick={() => setCount(count => count + 1)}>+</button>
            <button className="border px-4 py-2 tex-xl" onClick={() => setCount(count => count - 1)}>-</button>
        </div>
    )
};
