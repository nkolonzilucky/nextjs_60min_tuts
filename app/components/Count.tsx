"use client"
import { useState } from "react";

export default function Counter() {
    console.log("Counter component");
    const [count, setCount] = useState(0);
    return (
    <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
);
}