import React from 'react'
import { useReducer } from 'react'
export default function UseRed() {
    const reducer = (state, action) => {

        if (action.type == "INC") {
            return state + 2;
        }
        else if (action.type == "DEC") {
            return state - 2
        }
        else if (action.type) {
            return state * 2;
        }
        console.log("state", state)
        console.log("action", action);
        return state;
    }
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            UseRed
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "INC" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "DEC" })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "MUL" })}>
                Multiply
            </button>
        </div>
    )
}
