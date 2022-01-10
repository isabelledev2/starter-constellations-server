import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    
    async function fetchMyToDos() {
      let response = await fetch ('https://jsonplaceholder.typicode.com/todos?userId=3', { signal: abortController.signal });
      response = await response.json();
      setToDos(response)
    }

    fetchMyToDos();
    
    return () => abortController.abort();
  }, [])

  
  
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
