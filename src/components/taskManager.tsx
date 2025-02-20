import React, { useState } from "react";
import { useTasks } from "../context/taskContext";
import "../App.css";

const TaskManager = () => {
  const { tasks, addTask, removeTask, toggleTask, completedTasksCount } = useTasks();
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="main-task-manager">
      <h2>Task Tracking System</h2>
      <div className="task-manager">
      <input
        className="task-input"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <button className="task-button" onClick={handleAddTask}>Add Task</button>
      </div> 
      <h3>Tasks</h3> 
      <hr></hr>
    <div className="task-manager">
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} >
            <span
             className={`task-text ${task.completed ? "completed" : ""}`}              
             onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button className="remove-button" onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p className="completed-tasks">Completed Tasks: {completedTasksCount}</p>
    </div>
    </div>
  );
};

export default TaskManager;
