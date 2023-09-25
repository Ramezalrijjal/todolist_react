import React, { useState } from 'react';

function App() {
  // Task state
  const [tasks, setTasks] = useState([]);
  // Current task
  const [task, setTask] = useState('');

  // Add a new task
  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* Input box to add a task */}
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* Add button */}
      <button onClick={addTask}>Add</button>
      {/* Task list */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            {/* Delete button */}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
