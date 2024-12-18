import React from 'react';

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.isComplete ? 'list-group-item-success' : ''
          }`}
        >
          <span
            style={{ textDecoration: todo.isComplete ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleComplete(index)}
          >
            {todo.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
