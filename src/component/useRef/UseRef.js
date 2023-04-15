import React from 'react'
import { useState, useEffect, useRef } from 'react'
export default function UseRef() {
    const [input, setInput] = useState("");
    const counter = useRef(0);
    const [MYcounter, setCounter] = useState(0);
    const prevState = useRef("");
    const inputfieldRef = useRef("");
    useEffect(() => {
        // setCounter(counter + 1);
        //create infinite loop
        counter.current = counter.current + 1;
        prevState.current = input;

    }, [input]);

    const formHandler = (e) => {
        setInput(e.target.value);
    }
    const buttonHandler = () => {
        inputfieldRef.current.focus();
        inputfieldRef.current.value = "Sandesh Lamichhane";
        //its not rerender 
        //its not fully control 
    }
    return (
        <div>
            <h1>I dont thing its not be change....</h1>
            <input ref={inputfieldRef} value={input} onChange={formHandler} />

            <h4>Application has been rendered+ {prevState.current} +times</h4>
            <h4>Application has been rendered+ {counter.current} +times</h4>
            <button onClick={buttonHandler}>Click Me</button>
        </div>
    )
}
