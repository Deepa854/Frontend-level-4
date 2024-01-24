import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
 return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Priority To-Do List App</h1>
      <TaskInput addTask={addTask} />
      <div className="row">
        <div className="col">
          <TaskList tasks={tasks} priority="Low" deleteTask={deleteTask} />
        </div>
        <div className="col">
          <TaskList tasks={tasks} priority="Medium" deleteTask={deleteTask} />
        </div>
        <div className="col">
          <TaskList tasks={tasks} priority="High" deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};
export default App;
