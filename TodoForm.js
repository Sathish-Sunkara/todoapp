import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo({ text: input, isComplete: false });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex my-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}

export default TodoForm;
