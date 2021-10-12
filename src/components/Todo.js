import React from 'react'


export default function Todo({ todo, toggleComplete, removeTodo }) {
  function onClick() {
    toggleComplete(todo.id);
  }

  function deleteTodo() {
    removeTodo(todo.id);
  }
  return (
    <div className="todo">
      <div className="list">
        <input type="checkbox" onClick={onClick} />
        <div className="ikili">
          <li style={{ textDecoration: todo.completed ? "line-through" : null }} >{todo.task}</li>
          <span><button onClick={deleteTodo} >X</button></span>
        </div>

      </div>
    </div>
  )
}
