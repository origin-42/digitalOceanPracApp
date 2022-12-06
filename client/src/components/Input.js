import React, { useState } from 'react';
const { addTodo } = require("../utils/request");

export const Input = ({ getTodos, setTodos }) => {
    const [action, setAction] = useState('');

    const handleChange = (e) => setAction(e.target.value);;

    return (  
        <div>
            <input type="text" onChange={handleChange} value={action} />
            <button onClick={() => addTodo(action, getTodos, setTodos, setAction)}>add todo</button>
        </div>
    );
};