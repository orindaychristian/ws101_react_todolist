import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]); // Start with an empty array
  const [newTask, setNewTask] = useState("");

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: tasks.length + 1,
        task: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>TodoList App</h1>

      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              {task.task}
            </label>
            <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
