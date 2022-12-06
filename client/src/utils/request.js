import axios from 'axios';

export const addTodo = async (action, getTodos, setTodos, setAction) => {

  const task = { action }

  if (action && action.length > 0) {

    try {

      const addedTask = await axios.post('/api/todos', task);
      const { data } = addedTask;
      if (data) {
        await getTodos(setTodos);
        setAction('');
      }

    } catch (e) {
      console.log(e);
    };
    
  } else {
    console.log('input field required');
  }
};

export const getTodos = async (setTodos) => {

    try {

        const todosData = await axios.get('/api/todos');
        const { data } = todosData;
    
        if (data) {
            setTodos(data);
        };

    } catch (e) {
        console.log(e);
    };
    
};

export const deleteTodo = async (id) => {

    try {

        const todosData = await axios.delete(`/api/todos/${id}`);
        const { data } = todosData;
        if (data) {
            getTodos();
        };

    } catch (e) {
        console.log(e);
    };
};