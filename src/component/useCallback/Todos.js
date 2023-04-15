import React from 'react'

export default function Todos({ todos, addTodo }) {
    console.log("CHild render")
    return (
        <div>My Notes

            {
                todos.map((todo, index) => {
                    return <p key={index}>{todos}</p>
                })
            }
            <button onClick={addTodo}>Add To do</button>
        </div>
    )
}
