import React, { useEffect, useState } from 'react';
import { Input } from './Input';
import { ListTodo } from './ListTodo';
const { getTodos, deleteTodo } = require("../utils/request");

export const Todo = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        getTodos(setTodos);
    }, [])
   

    return (    
        <div>
            <h1>My Todo(s)</h1>
            <Input getTodos={getTodos} setTodos={setTodos} />
            <ListTodo todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};