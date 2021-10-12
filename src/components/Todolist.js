import React from 'react'
import Todo from './Todo'

export default function Todolist({todos,toggleComplete,removeTodo}) {
  return (
    <div>
        <ul>
            {todos.map(todo=>(
              <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
            ))}
        </ul>
      
    </div>
  )
}
