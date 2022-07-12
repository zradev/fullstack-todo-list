import { useState, useEffect } from "react";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  }, [todos]);

  return (
    <div className="App">
      <h1>Wellcome, User</h1>
      <h4>Your tasks:</h4>
      <TodoList todoListData={todos} />
    </div>
  );
}

export default App;
