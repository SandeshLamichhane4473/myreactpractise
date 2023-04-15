import React, { useState } from 'react'
import Todos from './Todos';
export default function Callback() {
    const [count, setCount] = useState(0);
    const [todos, setTodods] = useState([]);

    const Increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodods((t) => [...t, "New Todo"])
    }
    return (
        <div>
            Count:{count}
            <button onClick={Increment}></button>
            <hr></hr>
            <Todos todos={todos} addTodo={addTodo} />

        </div>

    )
}
