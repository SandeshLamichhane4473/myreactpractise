import React from 'react'
import { useState } from 'react';

export default function MemoHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const expensiveCalculation = (num) => {
        for (let i = 0; i < 1000000; i++) { }
        return num;
    };


    return (
        <div>
            <h1>I am in the header </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Count:{count}</h1>
            <input onChange={(e) => setName(e.target.value)} />
            <h1>Name:{name}</h1>
        </div>
    )
}
