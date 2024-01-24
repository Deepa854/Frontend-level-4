import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (task.trim() === '') return;

    addTask({ task,  priority,});
    setTask('');
    setPriority('Low');
  };

  return (
    <div className="mb-3 d-flex align-items-center">
      <input type="text" className="form-control mr-2" placeholder="Add a new task" value={task} 
      onChange={(e) => setTask(e.target.value)}/>
      <select
        className="form-control mr-2" value={priority}  onChange={(e) => setPriority(e.target.value)} >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
      <button className="btn btn-primary" onClick={handleAddTask}> Add </button>
    </div>
  );
};

export default TaskInput;
