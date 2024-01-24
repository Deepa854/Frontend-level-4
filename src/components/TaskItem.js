import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">{task.task}
      <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)} > Delete</button>
    </li>
  );
};

export default TaskItem;
