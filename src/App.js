import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        };
      }
      return todo;
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <div className="container">
        <Header addTodo={addTodo} />
        <Todolist todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
