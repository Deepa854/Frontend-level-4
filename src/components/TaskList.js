import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, priority, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => task.priority === priority);

  return (
    <div>
      <h4>{priority} Priority List</h4>
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} /> ))}
      </ul>
    </div>
  );
};

export default TaskList;
